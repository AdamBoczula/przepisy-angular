import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Recipe } from '@core/models';
import { ofType, Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { first, map, tap } from 'rxjs/operators';
import { RecipeActions, RecipeEditActions } from '../core/store/actions';
import * as fromRecipe from '../core/store/reducers';

@Injectable({
  providedIn: 'root'
})
export class RecipeResolver implements Resolve<boolean> {
  constructor(private store: Store<fromRecipe.State>, private actions$: Actions) {}

  public resolve(route: ActivatedRouteSnapshot): boolean {
    this.store.select(fromRecipe.selectEditedRecipe)
      .pipe(
        first(),
        map(er => {
          if (!er) {
            this.actions$.pipe(
              ofType(RecipeActions.fetchRecipesSuccess))
              .pipe(
                first(),
                map(({ recipes }) => recipes.find((r: Recipe) => r.name.toLowerCase() === route.params.recipeName.toLowerCase())),
                tap(editedRecipe => {
                    if (editedRecipe) {
                      this.store.dispatch(RecipeEditActions.editRecipe({ editedRecipe }));
                    }
                  }
                ),
              ).subscribe();
            this.store.dispatch(RecipeActions.fetchRecipes());
          }

        })
      ).subscribe();
    return true;
  }
}
