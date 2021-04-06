import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ofType, Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { RecipeActions } from '../core/store/actions';
import * as fromRecipe from '../core/store/reducers';

@Injectable({
  providedIn: 'root'
})
export class RecipesResolver implements Resolve<boolean> {
  constructor(private store: Store<fromRecipe.State>, private actions$: Actions) {}

  public resolve(): Observable<boolean> {
    this.store.dispatch(RecipeActions.fetchRecipes());
    return this.actions$.pipe(ofType(RecipeActions.fetchRecipesSuccess)).pipe(first(), map(() => {
      return true;
    }));
  }
}
