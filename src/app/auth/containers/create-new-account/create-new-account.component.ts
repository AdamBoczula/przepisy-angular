import { Component } from '@angular/core';
import * as fromAuth from '../../store/reducers';
import { Store } from '@ngrx/store';
import { CreateAccountActions, LoginPageActions } from '../../store/actions/';
import { Credentials } from '../../models';

@Component({
  selector: 'rp-create-new-account',
  templateUrl: './create-new-account.component.html',
  styleUrls: ['./create-new-account.component.scss']
})
export class CreateNewAccountComponent {
  public pending$ = this.store.select(fromAuth.selectLoginPagePending);
  public error$ = this.store.select(fromAuth.selectLoginPageError);


  constructor(private store: Store<fromAuth.State>) { }

  public back(): void {
    this.store.dispatch(LoginPageActions.loginRedirect());
  }

  public createAccount(credentials: Credentials): void {
    this.store.dispatch(CreateAccountActions.createAccount({ credentials }));
  }
}
