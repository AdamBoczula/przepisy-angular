import { createAction, props } from '@ngrx/store';
import { Error } from 'src/app/models/error';
import { Recipe } from '../../models';

export const createRecipe = createAction(
  '[recipeCreation] Create recipe',
  props<{ recipe: Recipe }>()
);

export const createRecipeSuccess = createAction(
  '[recipeCreation/API] Create Recipe Success'
);

export const createRecipeFailure = createAction(
  '[recipeCreation/API] Create Recipe Failure',
  props<{ error: Error }>()
);
