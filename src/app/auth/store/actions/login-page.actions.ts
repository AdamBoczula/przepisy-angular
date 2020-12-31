import { createAction, props } from '@ngrx/store';
import { Credentials } from '../../models/';

export const login = createAction(
  '[Login Page] Login',
  props<{ credentials: Credentials }>()
);
// export const loginSuccess = createAction('[Login Page] Login Success');
// export const loginFailure = createAction(
//   '[Login Page] Login Failure',
//   props<{ error: string }>()
// );
