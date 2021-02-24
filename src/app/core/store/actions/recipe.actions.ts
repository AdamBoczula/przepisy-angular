import { createAction, props } from '@ngrx/store';
import { Recipe } from '../../models';

export const fetchRecipesSuccess = createAction(
  '[Recipe/API] Fetch Recipe Success',
  props<{ recipes: Recipe[] }>()
);
