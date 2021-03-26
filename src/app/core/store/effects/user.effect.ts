import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { RedirectionActions } from '@rootStore/actions';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import { UserActions } from '../actions';


@Injectable()
export class AuthEffects {
  private setUser$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.setUser),
      map(_ => RedirectionActions.dashboard())
    )
  );

  // private logoutSuccess$: Observable<Action> = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(UserApiActions.logoutSuccess),
  //     map(() => LoginPageActions.loginRedirect())
  //   )
  // );

//   private logout$: Observable<Action> = createEffect(() =>
//   this.actions$.pipe(
//     ofType(UserActions.logout),
//     exhaustMap(() =>
//       this.authService.logout().pipe(
//         map(() => AuthApiActions.logoutSuccess()),
//         catchError((error) => of(AuthApiActions.logoutFailure({ error })))
//       )
//     )
//   )
// );

//   private returnLoginSuccess(user: UserCredential): Action {
//     return AuthApiActions.loginSuccess({
//       user: {
//         id: user.user?.uid,
//         email: user.user?.email,
//       } as User,
//       loginRedirect: true,
//     });
//   }

  constructor(
    private actions$: Actions,
    private userService: UserService,
  ) { }
}
