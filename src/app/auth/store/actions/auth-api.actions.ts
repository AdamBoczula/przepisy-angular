import { createAction, props } from '@ngrx/store';
import { Error } from 'src/app/models/error';
import { User } from '../../models/';

export const loginSuccess = createAction(
  '[Auth/API] Login Success',
  props<{ user: User; loginRedirect?: boolean }>()
);
export const loginFailure = createAction(
  '[Auth/API] Login Failure',
  props<{ error: Error }>()
);

export const logoutSuccess = createAction('[Auth/API] Logout Success');

export const createAccountSuccess = createAction('[Auth/API] Create Account Success');

export const logoutFailure = createAction(
  '[Auth/API] Logout Failure',
  props<{ error: Error }>()
);
export const createAccountFailure = createAction(
  '[Auth/API] Create Account Failure',
  props<{ error: Error }>()
);


export const resetPasswordForEmailSuccess = createAction(
  '[Reset Password] Reset Password For Email Success'
);

export const resetPasswordForEmailFailure = createAction(
  '[Reset Password] Reset Password For Email Failure',
  props<{ error: string }>()
);
