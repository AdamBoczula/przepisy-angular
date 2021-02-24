import { createReducer, on } from '@ngrx/store';
import { RecipeCreationActions } from '../actions';
import { Recipe } from '../../models';
import { Error } from 'src/app/models/error';

export const recipeCreationFeatureKey = 'recipeCreation'; // raczej zmienić nazwę na creation

export interface State {
  error: Error;
  pending: boolean;
  recipe: Recipe | null;
}

export const initialState: State = {
  error: null,
  pending: false,
  recipe: null,
};

export const reducer = createReducer(
  initialState,
  on(RecipeCreationActions.createRecipe, (state, { recipe }) => {
    console.log('heeejoooo');
    return {
      ...state,
      recipe,
      pending: true,
    };
  }),
  on(RecipeCreationActions.createRecipeSuccess, (state) => {
    console.log('state:', state);
    return {
      ...state,
    };
  })
);

export const getError = (state: State) => state.error;
export const getPending = (state: State) => state.pending;
export const getRecipe = (state: State) => state.recipe;
