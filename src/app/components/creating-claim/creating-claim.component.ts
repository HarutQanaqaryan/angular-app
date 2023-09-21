import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { ClaimType, IClaim, StatusType } from 'app/models';
import {
  AppState,
  changeClaims,
  selectClaimsList,
  selectCurrentClaim,
  setCurrentClaim,
} from 'app/shared';

@Component({
  selector: 'creating-modal',
  templateUrl: './creating-claim.component.html',
  styleUrls: ['./creating-claim.component.scss'],
})
export class CreatingClaimComponent {
  @Output() close = new EventEmitter();
  claims: IClaim[];
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
  });
  _status: any = '';
  _type: any = '';

  constructor(private store: Store<AppState>) {
    this.store
      .pipe(select(selectClaimsList))
      .subscribe((value) => (this.claims = value));
  }

  onClose() {
    this.close.emit();
  }

  onSave() {
    const updatedClaim = [
      ...this.claims,
      {
        id: Math.random(),
        title: this.form.value.title,
        created: this.form.value.created,
        type: this._type,
        status: this._status,
        description: 'desc',
      },
    ];
    this.store.dispatch(changeClaims({ newClaim: updatedClaim as IClaim[] }));
    this.onClose();
  }
}
