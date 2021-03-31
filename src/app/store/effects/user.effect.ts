import { Injectable } from '@angular/core';
import { UserService } from '@core/services/user.service';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { RedirectionActions } from '@rootStore/actions';
import { of, Observable } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { UserActions, UserApiActions } from '../actions';


@Injectable()
export class UserEffects {
  private logout$: Observable<Action> = createEffect(() =>
  this.actions$.pipe(
    ofType(UserActions.logout),
    exhaustMap(() =>
      this.userService.logout()
        .pipe(
          map(() => UserApiActions.logoutSuccess()),
          catchError(error => of(UserApiActions.logoutFailure({error: error.message})))
        )
      )
    )
  );


  private logoutSuccess$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(UserApiActions.logoutSuccess),
      map(() => RedirectionActions.login())
    )
  );

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
