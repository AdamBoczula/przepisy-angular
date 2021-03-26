import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Resolve } from '@angular/router';
import { UserActions } from '@coreStore/actions/';
import { Store } from '@ngrx/store';
import * as fromAuth from '../auth/store/reducers';
@Injectable({
  providedIn: 'root',
})
export class UserResolver implements Resolve<boolean> {
  constructor(
    private firebaseAuth: AngularFireAuth,
    private store: Store<fromAuth.State>
  ) {}

  public async resolve(): Promise<boolean> {
    const user = await this.firebaseAuth.currentUser;
    if (user) {
      this.store.dispatch(
        UserActions.setUser({
          user: { email: user.email as string, uid: user.uid },
        })
      );
    }
    return true;
  }
}
