import { createReducer, on } from '@ngrx/store';
import {
  changeClaims,
  clearCurrentClaim,
  setClaims,
  setCurrentClaim,
} from './claims.actions';
import { ClaimsState } from 'app/models';

const claimsInitialState: ClaimsState = {
  claims: void 0,
  currentClaim: void 0,
};

export const claimsReducer = createReducer(
  claimsInitialState,
  on(setClaims, (state, { claims }) => ({
    ...state,
    claims,
  })),
  on(setCurrentClaim, (state, { currentClaim }) => ({
    ...state,
    currentClaim: currentClaim,
  })),
  on(clearCurrentClaim, (state) => ({
    ...state,
    currentClaim: void 0,
  })),
  on(changeClaims, (state, { newClaim }) => ({
    ...state,
    claims: newClaim,
  }))
);
