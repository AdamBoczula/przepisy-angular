import {
  Action,
  combineReducers,
  createSelector,
  createFeatureSelector,
} from '@ngrx/store';
import * as fromLoginPage from './login-page.reducer';
import * as fromUser from './user.reducer';
import * as fromRoot from '../../../reducers';

export const authFeatureKey = 'auth';

export interface AuthState {
  [fromLoginPage.loginPageFeatureKey]: fromLoginPage.State;
  [fromUser.userFeatureKey]: fromUser.State;
}

export interface State extends fromRoot.State {
  [authFeatureKey]: AuthState;
}

export function reducers(
  state: AuthState | undefined,
  action: Action
): {
  [fromLoginPage.loginPageFeatureKey]: fromLoginPage.State;
  [fromUser.userFeatureKey]: fromUser.State;
} {
  return combineReducers({
    [fromLoginPage.loginPageFeatureKey]: fromLoginPage.reducer,
    [fromUser.userFeatureKey]: fromUser.reducer,
  })(state, action);
}

export const selectAuthState = createFeatureSelector<State, AuthState>(
  authFeatureKey
);

export const selectLoginPageState = createSelector(
  selectAuthState,
  (state) => state.loginPage
);

export const selectLoginPageError = createSelector(
  selectLoginPageState,
  fromLoginPage.getError
);

export const selectLoginPagePending = createSelector(
  selectLoginPageState,
  fromLoginPage.getPending
);

export const selectUserState = createSelector(
  selectAuthState,
  (state) => state.user
);

export const selectUser = createSelector(selectUserState, fromUser.getUser);
export const selectUserId = createSelector(
  selectUserState,
  (state) => state.user?.uid
);
