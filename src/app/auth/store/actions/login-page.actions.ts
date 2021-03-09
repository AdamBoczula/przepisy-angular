import { createAction, props } from '@ngrx/store';
import { Credentials } from '../../models/';

export const loginViaEmail = createAction(
  '[Login Page] Login',
  props<{ credentials: Credentials }>()
);

export const loginViaFacebook = createAction('[Login Page] Login via Facebook');

export const loginViaGoogle = createAction('[Login Page] Login via Google');

export const resetPassword = createAction('[Login Page] Reset Password');

export const createAccountRedirect = createAction('[Login Page] Redirect Create Account');

export const loginRedirect = createAction('[Auth/API] Login Redirect');

export const dashboardRedirect = createAction('[Auth/API] Dashboard Redirect');

