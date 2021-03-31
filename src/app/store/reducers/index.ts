import { InjectionToken } from '@angular/core';
import * as fromRouter from '@ngrx/router-store';
import { getSelectors } from '@ngrx/router-store';
import {
  createFeatureSelector,
  createSelector,
  Action,
  ActionReducer,
  ActionReducerMap,
  MetaReducer,
} from '@ngrx/store';
import { environment } from 'src/environments/environment';
import * as fromUser from './user.reducer';

export interface State {
  router: fromRouter.RouterReducerState<any>;
  user: fromUser.State;
}

export const ROOT_REDUCERS = new InjectionToken<
  ActionReducerMap<State, Action>
>('Root reducers token', {
  factory: () => ({
    router: fromRouter.routerReducer,
    user: fromUser.reducer
  }),
});

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state, action) => {
    const result = reducer(state, action);
    console.groupCollapsed(action.type);
    console.log('prev state', state);
    console.log('action', action);
    console.log('next state', result);
    console.groupEnd();

    return result;
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger]
  : [];
// lejałt selektorsy

export const selectRouter = createFeatureSelector<State,
  fromRouter.RouterReducerState>('router');
export const {
  selectCurrentRoute, // select the current route
} = getSelectors(selectRouter);

export const selectUserState = createFeatureSelector<State,
  fromUser.State>('user');
export const selectUser = createSelector(selectUserState, fromUser.getUser);
export const selectUserLoggedIn = createSelector(selectUserState, fromUser.getUserLoggedIn);
export const selectUserId = createSelector(selectUserState, fromUser.getUserId);
