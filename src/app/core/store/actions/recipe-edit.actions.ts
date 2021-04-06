import { Recipe } from '@core/models';
import { createAction, props } from '@ngrx/store';

export const editRecipe = createAction(
  '[RecipeEdit] editRecipe',
  props<{ editedRecipe: Recipe }>()
);
export const changeRecipe = createAction(
  '[RecipeEdit] changeRecipe',
  props<{ editedRecipe: Recipe }>()
);
export const changeRecipeSuccess = createAction(
  '[RecipeEdit] changeRecipeSuccess',
);

export const removeRecipe = createAction('[RecipeEdit] removeRecipe',
  props<{ recipe: Recipe }>()
);

export const removeRecipeSuccess = createAction('[RecipeEdit] removeRecipeSuccess');

export const resetRecipeEdit = createAction(
  '[RecipeEdit] resetRecipeEdit'
);
