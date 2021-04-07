import { HttpErrorResponse } from '@angular/common/http';
import { createReducer, on } from '@ngrx/store';
import { Recipe } from '../../models';
import { RecipeActions } from '../actions';

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
  on(RecipeActions.fetchRecipes, state => ({ ...state })),
  on(RecipeActions.fetchRecipesSuccess, (state, { recipes }) => ({
      ...state,
      recipes,
    })
  ));

export const getRecipes = (state: State) => state.recipes;
