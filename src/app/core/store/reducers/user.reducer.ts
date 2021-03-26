import { User } from '@core/models';
import { UserActions } from '@coreStore/actions';
import { createReducer, on } from '@ngrx/store';

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
  }))
);

export const getUser = (state: State) => state.user;

