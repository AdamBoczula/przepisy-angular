import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { RecipeService } from '../core/services/recipe.service';
import { Store } from '@ngrx/store';
import * as fromRecipe from '../core/store/reducers';
import { RecipeActions } from '../core/store/actions';
import { Actions, ofType } from '@ngrx/effects';
import { first, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipeResolver implements Resolve<boolean> {
  constructor(private recipeService: RecipeService, private store: Store<fromRecipe.State>, private actions$: Actions) {}

  resolve(): Observable<boolean> {
    this.store.dispatch(RecipeActions.fetchRecipes());
    return this.actions$.pipe(ofType(RecipeActions.fetchRecipesSuccess)).pipe(first(), map(() => {
      return true;
    }));
  }
}
