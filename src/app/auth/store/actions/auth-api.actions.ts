import { createAction, props } from '@ngrx/store';
import { Error } from 'src/app/models/error';
import { User } from '../../models/';

export const loginSuccess = createAction(
  '[Auth/API] Login Success',
  props<{ user: User }>()
);
export const loginFailure = createAction(
  '[Auth/API] Login Failure',
  props<{ error: Error }>()
);

export const loginRedirect = createAction('[Auth/API] Login Redirect');
