import { createReducer, on } from '@ngrx/store';
import {
  changeClaims,
  clearCurrentClaim,
  setCurrentClaim,
} from './claims.actions';
import { ClaimsState } from 'app/models';
import { mockData } from '../../helpers';

const initialState: ClaimsState = {
  claims: mockData,
  currentClaim: void 0,
};

export const claimsReducer = createReducer(
  initialState,
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
