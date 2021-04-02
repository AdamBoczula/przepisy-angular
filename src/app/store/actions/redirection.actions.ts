import { createAction, props } from '@ngrx/store';

export const dashboard = createAction('[Redirection] Dashboard');
export const login = createAction('[Redirection] Login');
export const createAccount = createAction('[Redirection] Create Account');
export const editRecipe = createAction('[Redirection] Edit Recipe', props<{ recipeName: string }>());
