import { createReducer, on } from '@ngrx/store';
import { RecipeActions } from '../actions';
import { Recipe } from '../../models';
import { HttpErrorResponse } from '@angular/common/http';

export const recipeFeatureKey = 'recipe'; // trzeba będzie zmienic na coś jak edition

export interface State {
  recipes: Recipe[];
  error: HttpErrorResponse | null;
}

export const initialState: State = {
  recipes: [],
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(RecipeActions.fetchRecipesSuccess, (state, { recipes }) => ({
      ...state,
      recipes,
    })
  ));

export const getRecipes = (state: State) => state.recipes;
