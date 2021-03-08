import { createAction, props } from '@ngrx/store';
import { Recipe } from '../../models';
import { HttpErrorResponse } from '@angular/common/http';

export const fetchRecipes = createAction('[Recipe] Fetch Recipe');
export const fetchRecipesSuccess = createAction(
  '[Recipe/API] Fetch Recipe Success',
  props<{ recipes: Recipe[] }>()
);

export const fetchRecipesFailure = createAction(
  '[Recipe/API] Fetch Recipe Failure',
  props<{ error: HttpErrorResponse }>()
);
