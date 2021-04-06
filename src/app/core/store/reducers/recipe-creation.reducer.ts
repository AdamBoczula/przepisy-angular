import { createReducer, on } from '@ngrx/store';
import { Error } from 'src/app/models/error';
import { Recipe } from '../../models';
import { RecipeActions, RecipeCreationActions, RecipeEditActions } from '../actions';

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
  on(RecipeCreationActions.createRecipe, (state, { recipe }) => ({
    ...state,
    recipe,
    pending: true,
  })),
  on(RecipeCreationActions.createRecipeSuccess, (state) => ({
    ...state,
    pending: false,
  })),
  on(RecipeCreationActions.createRecipeFailure, (state, { error }) => ({
    ...state,
    error,
    pending: false,
  }))
);

export const getError = (state: State) => state.error;
export const getPending = (state: State) => state.pending;
export const getRecipe = (state: State) => state.recipe;
