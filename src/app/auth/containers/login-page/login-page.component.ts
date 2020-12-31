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
export class LoginPageComponent implements OnInit {
  pending$ = this.store.select(fromAuth.selectLoginPagePending);
  error$ = this.store.select(fromAuth.selectLoginPageError);
  constructor(private store: Store<fromAuth.State>) {}

  ngOnInit(): void {}

  public loginAction(credentials: Credentials): void {
    this.store.dispatch(LoginPageActions.login({ credentials }));
  }
}
