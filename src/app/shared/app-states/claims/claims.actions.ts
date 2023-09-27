import { createAction, props } from '@ngrx/store';
import { IClaim } from 'app/models';

export const setCurrentClaim = createAction(
  '[Claims Component] Set Claim',
  props<{ currentClaim: IClaim }>()
);

export const clearCurrentClaim = createAction('[Claims Component] Clear Claim');

export const changeClaims = createAction(
  '[Claims Component] Change Claim',
  props<{ newClaim: IClaim[] }>()
);

export const loginUser = createAction(
  '[Login Component] Login User',
  props<{ login: string; password: string }>()
);
