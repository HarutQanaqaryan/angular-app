import { ActionReducerMap } from '@ngrx/store';
import { claimsReducer } from './claims';
import { ClaimsState } from 'app/models';

export interface AppState {
  claims: ClaimsState;
}

export const reducers: ActionReducerMap<AppState> = {
  claims: claimsReducer,
};
