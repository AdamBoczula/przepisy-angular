import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import {
  catchError,
  filter,
  map,
  switchMap,
  withLatestFrom,
} from 'rxjs/operators';
import { RecipeService } from '../../services/recipe.service';
import * as fromAuth from '../../../auth/store/reducers';
import { RecipeActions, RecipeCreationActions } from '../actions';

@Injectable()
export class RecipeEffect {
  public createRecipe$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(RecipeCreationActions.createRecipe),
      withLatestFrom(this.store.select(fromAuth.selectUserId)),
      filter((_, userId) => !userId),
      switchMap(([{ recipe }, userId]) =>
        this.recipeService.createRecipe(recipe, userId).pipe(
          map(() => RecipeCreationActions.createRecipeSuccess()),
          catchError((error) =>
            of(
              RecipeCreationActions.createRecipeFailure({
                error: 'Nie można stworzyć przepisu',
              })
            )
          )
        )
      )
    )
  );

  public fetchRecipes$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(ofType(RecipeActions.fetchRecipesSuccess),
    withLatestFrom(this.store.select(fromAuth.selectUserId)),
    switchMap(([userId]) => this.recipeService.fetchRecipes(userId).pipe(catchError(e) => of(null),
    map(() => )))

  );

  // FETCH
  // switchMap(([_, user]) =>
  //   this.recipeService.fetchRecipes(user?.uid)
  //     .pipe(
  //       map(() => RecipeCreationActions.createRecipeSuccess({recipes})) // recipeCreationSuccess(recipes)
  //       catchError(e => RecipeCreationActions.createRecipeFailure({error: e})) //recipeCreationFailure
  //       )
  // )

  constructor(
    private actions$: Actions,
    private recipeService: RecipeService,
    private store: Store<fromAuth.State>
  ) {}
}