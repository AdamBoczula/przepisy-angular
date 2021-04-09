import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { RedirectionActions } from '@rootStore/actions';
import * as fromRoot from '@rootStore/reducers';
import { of, Observable } from 'rxjs';
import { catchError, filter, map, switchMap, withLatestFrom, } from 'rxjs/operators';
import { RecipeService } from '../../services/recipe.service';
import { RecipeActions, RecipeCreationActions } from '../actions';

@Injectable()
export class RecipeEffect {
  public createRecipe$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(RecipeCreationActions.createRecipe),
      withLatestFrom(this.store.select(fromRoot.selectUserId)),
      filter((_, userId) => !userId),
      switchMap(([{ recipe }, userId]) =>
        this.recipeService.createRecipe(recipe, userId).pipe(
          map(() => RecipeCreationActions.createRecipeSuccess()),
          catchError(() =>
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

  public createRecipeSuccess$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(RecipeCreationActions.createRecipeSuccess),
      map(() => RedirectionActions.dashboard()),
    )
  );

  public fetchRecipes$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(ofType(RecipeActions.fetchRecipes),
      withLatestFrom(this.store.select(fromRoot.selectUserId)),
      switchMap(([_, userId]) => this.recipeService.fetchRecipes(userId)
        .pipe(
          map((recipes) => RecipeActions.fetchRecipesSuccess({ recipes })),
          catchError(() => of(RecipeActions.fetchRecipesFailure)),
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private recipeService: RecipeService,
    private store: Store<fromRoot.State>
  ) {}
}
