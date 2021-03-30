import { Injectable } from '@angular/core';
import * as fromUser from '@coreStore/reducers';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { of, Observable } from 'rxjs';
import {
  catchError,
  filter,
  map,
  switchMap,
  withLatestFrom,
} from 'rxjs/operators';
import { RecipeService } from '../../services/recipe.service';
import { RecipeActions, RecipeCreationActions } from '../actions';

@Injectable()
export class RecipeEffect {
  public createRecipe$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(RecipeCreationActions.createRecipe),
      withLatestFrom(this.store.select(fromUser.selectUserId)),
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
    this.actions$.pipe(ofType(RecipeActions.fetchRecipes),
      withLatestFrom(this.store.select(fromUser.selectUserId)),
      switchMap(([_, userId]) => this.recipeService.fetchRecipes(userId)
        .pipe(
          map((recipes) => RecipeActions.fetchRecipesSuccess({ recipes })),
          catchError(e => of(RecipeActions.fetchRecipesFailure)),
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private recipeService: RecipeService,
    private store: Store<fromUser.State>
  ) {}
}
