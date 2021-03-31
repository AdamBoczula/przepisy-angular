import { createAction, props } from '@ngrx/store';
import { Error } from 'src/app/models/error';

export const logoutSuccess = createAction('[User/API] Logout Success');
export const logoutFailure = createAction('[User/API] Logout Failure', props<{error: Error}>());
