import { createReducer, on } from '@ngrx/store';
import { RecipeActions } from '../actions';
import { Recipe } from '../../models';

export const recipeFeatureKey = 'recipe'; // trzeba będzie zmienic na coś jak edition

export interface State {
  recipes: Recipe[];
}

export const initialState: State = {
  recipes: [],
};

export const reducer = createReducer(
  initialState,
  on(RecipeActions.fetchRecipesSuccess, (state, { recipes }) => {
    console.log('tuuutaeeejlrekjgkj');
    return {
      ...state,
      recipes,
    };
  })
);

export const getRecipes = (state: State) => state.recipes;
