import { createAction, props } from '@ngrx/store';
import { Credentials } from '../../models/';

export const createAccount = createAction(
  '[Create Account] Create Account',
  props<{ credentials: Credentials }>()
);
