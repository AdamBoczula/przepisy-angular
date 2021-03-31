import { User } from '@core/models';
import { createReducer, on } from '@ngrx/store';
import { UserActions } from '@rootStore/actions';

export const userFeatureKey = 'user';

export interface State {
  user: User | null;
}

export const initialState: State = {
  user: null,
};

export const reducer = createReducer(
  initialState,
  on(UserActions.setUser, (state, { user }) => ({
    ...state,
    user,
  })),
  on(UserActions.logout, state => ({
    ...state,
    user: null
  }))
);

export const getUser = (state: State) => state.user;
export const getUserLoggedIn = (state: State) => !!state.user;
export const getUserId = (state: State) => state.user?.uid;
