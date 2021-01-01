import {
  Action,
  combineReducers,
  createSelector,
  createFeatureSelector,
} from '@ngrx/store';
import * as fromLoginPage from './login-page.reducer';
import * as fromAuth from './auth.reducer';
import * as fromRoot from '../../../reducers';

export const authFeatureKey = 'auth';

export interface AuthState {
  [fromLoginPage.loginPageFeatureKey]: fromLoginPage.State;
}

export interface State extends fromRoot.State {
  [authFeatureKey]: AuthState;
}

export function reducers(
  state: AuthState | undefined,
  action: Action
): { [fromLoginPage.loginPageFeatureKey]: fromLoginPage.State } {
  return combineReducers({
    [fromLoginPage.loginPageFeatureKey]: fromLoginPage.reducer,
    [fromAuth.loginPageFeatureKey]: fromAuth.reducer,
  })(state, action);
}

export const selectAuthState = createFeatureSelector<State, AuthState>(
  authFeatureKey
);

// export const selectAuthStatusState = createSelector(
//   selectAuthState,
//   (state) => state.status
// );
// export const selectUser = createSelector(
//   selectAuthStatusState,
//   fromAuth.getUser
// );
// export const selectLoggedIn = createSelector(selectUser, (user) => !!user);

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
