import { Component } from '@angular/core';
import * as fromCore from '@coreStore/reducers';
import { Store } from '@ngrx/store';
import { UserActions } from '@rootStore/actions';
import { selectUserLoggedIn } from '@rootStore/reducers';

@Component({
  selector: 'rp-background-content-wrapper',
  templateUrl: './background-content-wrapper.component.html',
  styleUrls: ['./background-content-wrapper.component.scss']
})
export class BackgroundContentWrapperComponent {
  public pending$ = this.store.select(fromCore.selectFetchRecipePending);
  public showMenu$ = this.store.select(selectUserLoggedIn);

  constructor(private store: Store<fromCore.State>) {}

  public logout(): void {
    this.store.dispatch(UserActions.logout());
  }
}
