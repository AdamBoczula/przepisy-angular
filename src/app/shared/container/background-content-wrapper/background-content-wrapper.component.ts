import { Component } from '@angular/core';
import { UserActions } from '@coreStore/actions';
import * as fromCore from '@coreStore/reducers';
import { selectUserLoggedIn } from '@coreStore/reducers';
import { Store } from '@ngrx/store';
@Component({
  selector: 'rp-background-content-wrapper',
  templateUrl: './background-content-wrapper.component.html',
  styleUrls: ['./background-content-wrapper.component.scss']
})
export class BackgroundContentWrapperComponent {

  constructor(private store: Store<fromCore.State>) {}
  public showMenu$ = this.store.select(selectUserLoggedIn);

  public logout(): void {
    this.store.dispatch(UserActions.logout());
  }
}
