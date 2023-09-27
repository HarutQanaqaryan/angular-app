import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { ClaimType, IClaim, IUser, RollesEnum, StatusType } from 'app/models';
import {
  AppState,
  changeClaims,
  selectClaimsList,
  selectCurrentClaim,
  selectCurrentUser,
  setCurrentClaim,
} from 'app/shared';

@Component({
  selector: 'editing-modal',
  templateUrl: './editing-claim.component.html',
  styleUrls: ['./editing-claim.component.scss'],
})
export class EditingClaimComponent implements OnInit {
  @Output() close = new EventEmitter();
  currentClaim?: IClaim;
  claims: IClaim[];
  currentUser?: IUser = void 0;
  errorMessage = '';
  Rolles = RollesEnum;
  isAbleToEdit: boolean = false;

  typeOptions = [
    ClaimType.Hardware,
    ClaimType.Networking,
    ClaimType.Sofware,
    ClaimType.Troubleshooting,
  ];
  statusOptions = [
    StatusType.Declined,
    StatusType.Done,
    StatusType.In_Progres,
    StatusType.New,
  ];

  loading = false;
  form = new FormGroup({
    title: new FormControl(this.currentClaim?.title, [Validators.required]),
    created: new FormControl(this.currentClaim?.created, [Validators.required]),
    type: new FormControl(this.currentClaim?.type, [Validators.required]),
    status: new FormControl(this.currentClaim?.status, [Validators.required]),
    description: new FormControl(this.currentClaim?.description, [
      Validators.required,
    ]),
  });
  _status: any = '';
  _type: any = '';
  _desc: any = '';

  constructor(private store: Store<AppState>) {
    this.store.pipe(select(selectCurrentClaim)).subscribe((value) => {
      this.currentClaim = value;
    });
    this.store
      .pipe(select(selectClaimsList))
      .subscribe((value) => (this.claims = value));
    this.store
      .pipe(select(selectCurrentUser))
      .subscribe((value) => (this.currentUser = value));
  }

  ngOnInit(): void {
    this.form.setValue({
      title: this.currentClaim?.title,
      created: this.currentClaim?.created,
      type: this.currentClaim?.type,
      status: this.currentClaim?.status,
      description: this.currentClaim?.description,
    });
    this.isAbleToEdit =
      this.currentClaim?.creator === this.currentUser?.login &&
      this.currentClaim?.status === StatusType.New;
  }

  onClose() {
    this.close.emit();
  }

  onSave() {
    const updatedClaim = this.claims.map((el) => {
      if (this.currentClaim?.id === el.id) {
        return {
          ...el,
          status: this._status || el.status,
          description: this.form.value.description || el.description,
        };
      } else {
        return el;
      }
    });
    this.store.dispatch(changeClaims({ newClaim: updatedClaim as IClaim[] }));
    this.onClose();
  }
}
