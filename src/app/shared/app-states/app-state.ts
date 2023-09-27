import { ActionReducerMap } from '@ngrx/store';
import { claimsReducer, usersReducer } from './claims';
import { ClaimsState, UserState } from 'app/models';

export interface AppState {
  claims: ClaimsState;
  user: UserState;
}

export const reducers: ActionReducerMap<AppState> = {
  claims: claimsReducer,
  user: usersReducer,
};
