import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { RecipeCreationActions } from '../actions';
import { tap } from 'rxjs/operators';

@Injectable()
export class RecipeCreationEffect {
  public createRecipe$: Observable<Action> = createEffect(
    () =>
      this.actions$.pipe(
        ofType(RecipeCreationActions.createRecipe),
        tap(({ recipe }) => {
          console.log('tutaj efekt; recipe:', recipe);
        })
        // map(() => AuthApiActions.logoutRedirect())
      ),
    { dispatch: false }
  );

  // public logoutRedirect$: Observable<Action> = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(AuthApiActions.logoutRedirect),
  //       tap(() => this.router.navigate(['/']))
  //     ),
  //   { dispatch: false }
  constructor(
    private actions$: Actions // private authService: AuthService, // private router: Router
  ) {}
}
