import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Credentials } from '../../models';
import { LoginPageActions } from '../../store/actions';
import * as fromAuth from '../../store/reducers';

@Component({
  selector: 'rp-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  pending$ = this.store.select(fromAuth.selectLoginPagePending);
  error$ = this.store.select(fromAuth.selectLoginPageError);

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
    this.store.dispatch(LoginPageActions.createAccountRedirect());
  }

  public resetPassword(): void {
    this.store.dispatch(LoginPageActions.resetPassword());

  }
}
