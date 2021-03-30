import { Injectable } from '@angular/core';
import UserCredential = firebase.auth.UserCredential;
import FirebaseError = firebase.FirebaseError;
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { RedirectionActions } from '@rootStore/actions';
import firebase from 'firebase';
import { of, Observable } from 'rxjs';
import { catchError, exhaustMap, filter, map, switchMap, take, tap } from 'rxjs/operators';
import { ResetPasswordDialogComponent } from '../../components/reset-password-dialog/reset-password-dialog.component';
import { Credentials } from '../../models';
import { AuthService } from '../../services/auth.service';
import { AuthApiActions, CreateAccountActions, LoginPageActions, ResetPasswordActions } from '../actions';

import * as fromAuth from '../reducers';

@Injectable()
export class AuthEffects {
  private loginViaEmail$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginPageActions.loginViaEmail),
      map((action) => action.credentials),
      exhaustMap((auth: Credentials) =>
        this.authService.loginViaEmail(auth).pipe(
          map((user) => this.returnLoginSuccess(user)
          ),
          catchError((error: FirebaseError) => {
            return of(AuthApiActions.loginFailure({ error: error.message }));
          })
        )
      )
    )
  );

  private loginViaFacebook: Observable<Action | null> = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginPageActions.loginViaFacebook),
      exhaustMap(() =>
        this.authService.loginViaFacebook().pipe(
          map((user) => this.returnLoginSuccess(user)
          ),
          catchError((error: FirebaseError) => of(AuthApiActions.loginFailure({ error: error.message })))
        )
      )
    )
  );

  private loginViaGoogle: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginPageActions.loginViaGoogle),
      exhaustMap(() =>
        this.authService.loginViaGoogle().pipe(
          map((user) => this.returnLoginSuccess(user)
          ),
          catchError((error: FirebaseError) => of(AuthApiActions.loginFailure({ error: error.message })))
        )
      )
    )
  );

  private resetPassword$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginPageActions.resetPassword),
      tap(() => {
          const dialogRef = this.dialog.open(ResetPasswordDialogComponent);
          dialogRef.afterClosed()
            .pipe(
              take(1),
              filter(email => !!email),
              map(email => ResetPasswordActions.resetPasswordForEmail({ email }))
            );
        }
      )
    )
  );

  private resetPasswordForEmail$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ResetPasswordActions.resetPasswordForEmail),
      switchMap(({ email }) =>
        this.authService.resetPassword(email)
          .pipe(
            map(() => AuthApiActions.resetPasswordForEmailSuccess()),
            catchError((error: FirebaseError) => of(AuthApiActions.resetPasswordForEmailFailure({ error: error.message })))
          )
      )
    )
  );

  private createAccount$: Observable<Action> = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CreateAccountActions.createAccount),
        switchMap(({ credentials }) => {
            return this.authService.createAccountViaEmail(credentials)
              .pipe(
                map(() => AuthApiActions.createAccountSuccess()),
                catchError((error: FirebaseError) =>
                  of(AuthApiActions.createAccountFailure({ error: error.message }))
                )
              );
          }
        )
      )
  );

  private loginSuccess$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthApiActions.loginSuccess),
      filter(({ loginRedirect }) => !!loginRedirect),
      map(() => RedirectionActions.dashboard())
    )
  );

  // private logoutSuccess$: Observable<Action> = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(AuthApiActions.logoutSuccess),
  //     map(() => LoginPageActions.loginRedirect())
  //   )
  // );

  // private dashboardRedirect$: Observable<Action> = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(LoginPageActions.dashboardRedirect,
  //         AuthApiActions.createAccountSuccess),
  //       tap(() => this.router.navigate(['dashboard']))
  //     ),
  //   { dispatch: false }
  // );

  // private loginRedirect$: Observable<Action> = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(LoginPageActions.loginRedirect),
  //       tap(() => this.router.navigate(['auth']))
  //     ),
  //   { dispatch: false }
  // );

  // private redirectCreateAccount$: Observable<Action> = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(LoginPageActions.createAccountRedirect),
  //       tap(() => this.router.navigate(['auth', 'create-new-account']))
  //     ), { dispatch: false }
  // );

  private returnLoginSuccess(user: UserCredential): Action {
    return AuthApiActions.loginSuccess({
      // user: {
      //   id: user.user?.uid,
      //   email: user.user?.email,
      // } as User,
      loginRedirect: true,
    });
  }

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private dialog: MatDialog,
    private store: Store<fromAuth.State>
  ) { }
}
