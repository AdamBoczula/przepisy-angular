import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { logout } from 'src/app/auth/store/actions/user.actions';

@Component({
  selector: 'rp-background-layout',
  templateUrl: './background-layout.component.html',
  styleUrls: ['./background-layout.component.scss'],
})
export class BackgroundLayoutComponent {
  constructor(private store: Store) {}

  public onLogout(): void {
    this.store.dispatch(logout());
  }
}
