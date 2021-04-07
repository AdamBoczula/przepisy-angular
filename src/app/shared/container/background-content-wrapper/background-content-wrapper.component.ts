import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserActions } from '@rootStore/actions';
import * as fromRoot from '@rootStore/reducers';

@Component({
  selector: 'rp-background-content-wrapper',
  templateUrl: './background-content-wrapper.component.html',
  styleUrls: ['./background-content-wrapper.component.scss']
})
export class BackgroundContentWrapperComponent {
  public pending$ = this.store.select(fromRoot.selectPending);
  public showMenu$ = this.store.select(fromRoot.selectUserLoggedIn);

  constructor(private store: Store<fromRoot.State>) {}

  public logout(): void {
    this.store.dispatch(UserActions.logout());
  }
}
