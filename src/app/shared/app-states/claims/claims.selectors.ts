import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../app-state';
import { ClaimsState, UserState } from 'app/models';

const selectClaims = (state: AppState) => state.claims;
const selectUser = (state: AppState) => state.user;

export const selectClaimsList = createSelector(
  selectClaims,
  (state: ClaimsState) => state.claims
);

export const selectCurrentClaim = createSelector(
  selectClaims,
  (state: ClaimsState) => state.currentClaim
);

export const selectCurrentUser = createSelector(
  selectUser,
  (state: UserState) => state.user
);

export const selectUserError = createSelector(
  selectUser,
  (state: UserState) => state.error
);
