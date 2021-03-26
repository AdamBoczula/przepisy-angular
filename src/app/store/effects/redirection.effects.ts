import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { RedirectionActions } from '@rootStore/actions';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class RedirectionEffects {
  private dashboardRedirect$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(RedirectionActions.dashboard),
      tap(() => this.router.navigate(['dashboard']))
    ), { dispatch: false }
  );

  private createAccountRedirect$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(RedirectionActions.createAccount),
      tap(() => this.router.navigate(['auth', 'create-new-account']))
    ), { dispatch: false }
  );

  private loginRedirct$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(RedirectionActions.login),
      tap(() => this.router.navigate(['auth', 'login']))
    ), { dispatch: false }
  );


  constructor(
    private actions$: Actions,
    private router: Router,
  ) { }
}
