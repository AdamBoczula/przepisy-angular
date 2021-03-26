import { User } from '@core/models';
import { createAction, props } from '@ngrx/store';

export const setUser = createAction('[User] Set User', props<{user: User}>());
export const logout = createAction('[User] Logout');
