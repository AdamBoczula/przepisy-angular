import { combineReducers, createFeatureSelector, createSelector, Action, } from '@ngrx/store';
import * as fromRoot from '@rootStore/reducers';
import * as fromRecipeCreation from './recipe-creation.reducer';
import * as fromRecipe from './recipe.reducer';
import { recipeFeatureKey } from './recipe.reducer';

export const coreFeatureKey = 'core';

export interface CoreState {
  [fromRecipeCreation.recipeCreationFeatureKey]: fromRecipeCreation.State;
  [fromRecipe.recipeFeatureKey]: fromRecipe.State;
}

export interface State extends fromRoot.State {
  [coreFeatureKey]: CoreState;
}

export function reducers(
  state: CoreState | undefined,
  action: Action
): {
  [fromRecipeCreation.recipeCreationFeatureKey]: fromRecipeCreation.State;
  [fromRecipe.recipeFeatureKey]: fromRecipe.State;
} {
  return combineReducers({
    [fromRecipeCreation.recipeCreationFeatureKey]: fromRecipeCreation.reducer,
    [fromRecipe.recipeFeatureKey]: fromRecipe.reducer,
  })(state, action);
}

export const selectRecipeState = createFeatureSelector<State, CoreState>(
  coreFeatureKey
);

export const selectRecipeCreationState = createSelector(
  selectRecipeState,
  (state) => state.recipeCreation
);

export const selectRecipeCreationError = createSelector(
  selectRecipeCreationState,
  fromRecipeCreation.getError
);

export const selectRecipeCreationPending = createSelector(
  selectRecipeCreationState,
  fromRecipeCreation.getPending
);

export const selectRecipeFeatureState = createSelector(
  selectRecipeState,
  (state) => state[recipeFeatureKey]
);

export const selectRecipes = createSelector(
  selectRecipeFeatureState,
  fromRecipe.getRecipes
);

// export const selectUserState = createSelector(
//   selectAuthState,
//   (state) => state?.user
// );

// export const selectUser = createSelector(selectUserState, fromUser.getUser);
// export const selectUserLoggedIn = createSelector(selectUserState, (state) => !!state.user);
// export const selectUserId = createSelector(
//   selectUserState,
//   (state) => state.user?.uid
// );
