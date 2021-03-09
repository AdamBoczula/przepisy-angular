import { ApplicationInitStatus, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Credentials, User } from '../../models';
import { AuthService } from '../../services/auth.service';
import { AuthApiActions, LoginPageActions, UserActions, ResetPasswordActions, CreateAccountActions } from '../actions';
import { catchError, exhaustMap, filter, map, switchMap, take, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import { Router } from '@angular/router';
import firebase from 'firebase';
import UserCredential = firebase.auth.UserCredential;
import FirebaseError = firebase.FirebaseError;
import { MatDialog } from '@angular/material/dialog';
import { ResetPasswordDialogComponent } from '../../components/reset-password-dialog/reset-password-dialog.component';
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
            ).subscribe((email) => this.store.dispatch(ResetPasswordActions.resetPasswordForEmail({ email }))
          );
        }
      )
    ), { dispatch: false }
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

  private loginSuccess$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthApiActions.loginSuccess),
      filter(({ loginRedirect }) => !!loginRedirect),
      map(() => LoginPageActions.dashboardRedirect())
    )
  );

  private dashboardRedirect$: Observable<Action> = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LoginPageActions.dashboardRedirect),
        tap(() => this.router.navigate(['dashboard']))
      ),
    { dispatch: false }
  );

  private logout$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.logout),
      exhaustMap(() =>
        this.authService.logout().pipe(
          map(() => AuthApiActions.logoutSuccess()),
          catchError((error) => of(AuthApiActions.logoutFailure({ error })))
        )
      )
    )
  );

  private logoutSuccess$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthApiActions.logoutSuccess),
      map(() => LoginPageActions.loginRedirect())
    )
  );

  private loginRedirect$: Observable<Action> = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LoginPageActions.loginRedirect),
        tap(() => this.router.navigate(['/']))
      ),
    { dispatch: false }
  );

  private redirectCreateAccount$: Observable<Action> = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LoginPageActions.createAccountRedirect),
        tap(() => this.router.navigate(['create-new-account']))
      ), { dispatch: false }
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

  private returnLoginSuccess(user: UserCredential): Action {
    return AuthApiActions.loginSuccess({
      user: {
        id: user.user?.uid,
        email: user.user?.email,
      } as User,
      loginRedirect: true,
    });
  }

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private dialog: MatDialog,
    private store: Store<fromAuth.State>
  ) {
  }
}
