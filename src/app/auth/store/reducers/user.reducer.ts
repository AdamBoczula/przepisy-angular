import { createReducer, on } from '@ngrx/store';
import { AuthApiActions } from '../actions';
import { User } from '../../models';

export const userFeatureKey = 'user';

export interface State {
  user: User | null;
}

export const initialState: State = {
  user: null,
};

export const reducer = createReducer(
  initialState,
  on(AuthApiActions.loginSuccess, (state, { user }) => ({
    ...state,
    user,
  }))
);

export const getUser = (state: State) => state.user;
