import { Component } from '@angular/core';
import { LoginPageActions } from '@authStore/actions';
import * as fromAuth from '@authStore/reducers';
import { Store } from '@ngrx/store';
import { RedirectionActions } from '@rootStore/actions';
import { Credentials } from '../../models';

@Component({
  selector: 'rp-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  public pending$ = this.store.select(fromAuth.selectLoginPagePending);
  public error$ = this.store.select(fromAuth.selectLoginPageError);

  constructor(private store: Store<fromAuth.State>) {}

  public loginViaEmail(credentials: Credentials): void {
    this.store.dispatch(LoginPageActions.loginViaEmail({ credentials }));
  }

  public loginViaFacebook(): void {
    this.store.dispatch(LoginPageActions.loginViaFacebook());
  }

  public loginViaGoogle(): void {
    this.store.dispatch(LoginPageActions.loginViaGoogle());
  }

  public createAccount(): void {
    this.store.dispatch(RedirectionActions.createAccount());
  }

  public resetPassword(): void {
    this.store.dispatch(LoginPageActions.resetPassword());

  }
}
