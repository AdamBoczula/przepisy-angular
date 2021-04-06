import { Injectable } from '@angular/core';
import { RecipeService } from '@core/services/recipe.service';
import { RecipeEditActions } from '@coreStore/actions';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { RedirectionActions } from '@rootStore/actions';
import * as fromRoot from '@rootStore/reducers';
import { Observable } from 'rxjs';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';


@Injectable()
export class RecipeEditEffects {

  private editRecipe$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(RecipeEditActions.editRecipe),
      map(({ editedRecipe }) => RedirectionActions.editRecipe({ recipeName: editedRecipe.name }))
    )
  );

  private changeRecipe$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(RecipeEditActions.changeRecipe),
      withLatestFrom(this.store.select(fromRoot.selectUserId)),
      switchMap(([{ editedRecipe }, userId]) => this.recipeService.changeRecipe(editedRecipe, userId)
        .pipe(
          map(() => RecipeEditActions.changeRecipeSuccess())
        )
      )
    )
  );

  private removeRecipe$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(RecipeEditActions.removeRecipe),
      withLatestFrom(this.store.select(fromRoot.selectUserId)),
      switchMap(([{ recipe }, userId]) => this.recipeService.removeRecipe(recipe, userId)
        .pipe(
          map(() => RecipeEditActions.removeRecipeSuccess())
        ))
    ));

  private editionSuccess$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(RecipeEditActions.removeRecipeSuccess, RecipeEditActions.changeRecipeSuccess),
      map(() => RedirectionActions.dashboard())
    ));

  constructor(private actions$: Actions, private recipeService: RecipeService, private store: Store<fromRoot.State>) {}
}
