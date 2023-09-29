import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { ClaimType, IClaim, IUser, StatusType } from 'app/models';
import { ClaimsService } from 'app/services/claims.service';
import {
  AppState,
  changeClaims,
  selectClaimsList,
  selectCurrentClaim,
  selectCurrentUser,
  setCurrentClaim,
} from 'app/states';

@Component({
  selector: 'creating-modal',
  templateUrl: './creating-claim.component.html',
  styleUrls: ['./creating-claim.component.scss'],
})
export class CreatingClaimComponent {
  @Output() close = new EventEmitter();
  claims?: IClaim[];
  currentUser?: IUser = void 0;
  errorMessage = '';

  typeOptions = [
    ClaimType.Hardware,
    ClaimType.Networking,
    ClaimType.Sofware,
    ClaimType.Troubleshooting,
  ];
  statusOptions = [StatusType.New];

  loading = false;
  form = new FormGroup({
    title: new FormControl('', [Validators.required]),
    created: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });
  _status: any = '';
  _type: any = '';

  constructor(
    private store: Store<AppState>,
    private claimsService: ClaimsService
  ) {
    this.store
      .pipe(select(selectClaimsList))
      .subscribe((value) => (this.claims = value));
    this.store
      .pipe(select(selectCurrentUser))
      .subscribe((value) => (this.currentUser = value));
  }

  onClose() {
    this.close.emit();
  }

  onSave() {
      this.claimsService.createClaim(
        this.form.value.title!,
        this.form.value.created!,
        this._type,
        this._status,
        this.currentUser?.login!,
        this.form.value.description!
      );
      this.onClose();
    }
}
