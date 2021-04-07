import { RecipeActions } from '@coreStore/actions';
import { createReducer, on } from '@ngrx/store';

export const userFeatureKey = 'layout';

export interface State {
  pending: boolean;
}

export const initialState: State = {
  pending: false,
};

export const reducer = createReducer(
  initialState,
  on(RecipeActions.fetchRecipes, () => ({ pending: true })),
  on(RecipeActions.fetchRecipesSuccess, () => ({ pending: false })),
);

export const getPending = (state: State) => state.pending;
