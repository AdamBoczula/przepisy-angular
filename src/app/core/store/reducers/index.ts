import { combineReducers, createFeatureSelector, createSelector, Action, } from '@ngrx/store';
import * as fromRoot from '@rootStore/reducers';
import * as fromRecipeCreation from './recipe-creation.reducer';
import * as fromRecipeEdit from './recipe-edit.reducer';
import * as fromRecipe from './recipe.reducer';

export const coreFeatureKey = 'core';

export interface CoreState {
  [fromRecipeCreation.recipeCreationFeatureKey]: fromRecipeCreation.State;
  [fromRecipe.recipeFeatureKey]: fromRecipe.State;
  [fromRecipeEdit.recipeEditFeatureKey]: fromRecipeEdit.State;
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
    [fromRecipeEdit.recipeEditFeatureKey]: fromRecipeEdit.reducer,
  })(state, action);
}

export const selectCoreState = createFeatureSelector<State, CoreState>(
  coreFeatureKey
);

export const selectRecipeCreationState = createSelector(
  selectCoreState,
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
  selectCoreState,
  (state) => state[fromRecipe.recipeFeatureKey]
);

export const selectRecipes = createSelector(
  selectRecipeFeatureState,
  fromRecipe.getRecipes
);

