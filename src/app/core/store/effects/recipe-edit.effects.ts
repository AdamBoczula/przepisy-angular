import { Injectable } from '@angular/core';
import { RecipeEditActions } from '@coreStore/actions';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { RedirectionActions } from '@rootStore/actions';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class RecipeEditEffects {

  private editRecipe$: Observable<Action | null> = createEffect(() =>
    this.actions$.pipe(
      ofType(RecipeEditActions.editRecipe),
      map(({ editedRecipe }) => RedirectionActions.editRecipe({ recipeName: editedRecipe.name })))
  );

  constructor(private actions$: Actions) {}
}
