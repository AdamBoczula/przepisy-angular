import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Credentials, User } from '../../models';
import { AuthService } from '../../services/auth.service';
import { AuthApiActions, LoginPageActions } from '../actions';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  public login$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginPageActions.login),
      map((action) => action.credentials),
      exhaustMap((auth: Credentials) =>
        this.authService.signIn(auth).pipe(
          map((user) =>
            AuthApiActions.loginSuccess({
              user: {
                email: user.user?.email,
              } as User,
            })
          ),
          catchError((error) => of(AuthApiActions.loginFailure({ error })))
        )
      )
    )
  );

  public loginSuccess$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthApiActions.loginSuccess),
      map(() => AuthApiActions.loginRedirect())
    )
  );

  public loginRedirect$: Observable<Action> = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthApiActions.loginRedirect),
        tap(() => this.router.navigate(['recipes']))
      ),
    { dispatch: false }
  );
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}
