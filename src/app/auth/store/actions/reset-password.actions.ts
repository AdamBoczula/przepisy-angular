import { createAction, props } from '@ngrx/store';

export const resetPasswordForEmail = createAction(
  '[Reset Password] Reset Password For Email',
  props<{ email: string }>()
);
