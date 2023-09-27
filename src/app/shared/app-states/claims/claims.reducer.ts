import { createReducer, on } from '@ngrx/store';
import {
  changeClaims,
  clearCurrentClaim,
  loginUser,
  setCurrentClaim,
} from './claims.actions';
import { ClaimsState, IUser, UserState } from 'app/models';
import { allUsers, mockData } from '../../helpers';

const claimsInitialState: ClaimsState = {
  claims: mockData,
  currentClaim: void 0,
};

const usersInitialState: UserState = {
  user: allUsers[0],
  error: void 0,
};

export const claimsReducer = createReducer(
  claimsInitialState,
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

export const usersReducer = createReducer(
  usersInitialState,
  on(loginUser, (state, { login, password }) => {
    const currUser = allUsers.find(
      (el) => el.login === login && el.password === password
    );
    if (currUser) {
      return { ...state, user: currUser, error: void 0 };
    } else {
      return { ...state, error: 'Invalid login or password', user: void 0 };
    }
  })
);
