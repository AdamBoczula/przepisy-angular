import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Resolve } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { loginSuccess } from '../auth/store/actions/auth-api.actions';
import * as fromAuth from '../auth/store/reducers';
import { filter, map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserResolver implements Resolve<boolean> {
  constructor(
    private firebaseAuth: AngularFireAuth,
    private store: Store<fromAuth.State>
  ) {}

  async resolve(): Promise<boolean> {
    const user = await this.firebaseAuth.currentUser;
    if (user) {
      this.store.dispatch(
        loginSuccess({
          user: { email: user.email as string },
          loginRedirect: false,
        })
      );
    }
    return true;
  }
}
