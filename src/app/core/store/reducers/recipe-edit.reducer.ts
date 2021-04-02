import { Recipe } from '@core/models';
import { RecipeEditActions } from '@coreStore/actions';
import { createReducer, on } from '@ngrx/store';

export const recipeEditFeatureKey = 'recipeEdit';

export interface State {
  editedRecipe: Recipe | undefined;
}

export const initialState: State = {
  editedRecipe: undefined,
};


export const reducer = createReducer(
  initialState,
  on(RecipeEditActions.editRecipe, (state, { editedRecipe }) => ({
    ...state,
    editedRecipe
  })),
  on(RecipeEditActions.resetRecipeEdit, () => (initialState))
);

