import { Recipe } from '@core/models';
import { createAction, props } from '@ngrx/store';

export const editRecipe = createAction(
  '[RecipeEdit] setRecipeEdit',
  props<{ editedRecipe: Recipe }>()
);

export const resetRecipeEdit = createAction(
  '[RecipeEdit] resetRecipeEdit'
);
