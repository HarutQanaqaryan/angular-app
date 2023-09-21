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
  selector: 'deleting-claim',
  templateUrl: './deleting-claim.component.html',
  styleUrls: ['./deleting-claim.component.scss'],
})
export class DeletingClaimComponent {
  @Output() close = new EventEmitter();
  claims: IClaim[];
  currentClaim?: IClaim;

  constructor(private store: Store<AppState>) {
    this.store.pipe(select(selectCurrentClaim)).subscribe((value) => {
      this.currentClaim = value;
    });
    this.store
      .pipe(select(selectClaimsList))
      .subscribe((value) => (this.claims = value));
  }

  onClose() {
    this.close.emit();
  }

  onDelete() {
    const updatedClaim = this.claims.filter(
      (el) => this.currentClaim?.id !== el.id
    );
    this.store.dispatch(changeClaims({ newClaim: updatedClaim as IClaim[] }));
    this.onClose();
  }
}
