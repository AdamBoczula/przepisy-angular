import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '@rootStore/reducers';
import { selectCurrentRoute } from '@rootStore/reducers';
import { map } from 'rxjs/operators';

@Component({
  selector: 'rp-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @Input() public showMenu = false;
  @Output() public logout: EventEmitter<void> = new EventEmitter();
  public selectedRoute$ = this.store.select(selectCurrentRoute)
    .pipe(map(currentRoute => {
      return currentRoute.routeConfig.path;
    }));

  constructor(private store: Store<fromRoot.State>) {}

  public onLogout(): void {
    this.logout.emit();
  }
}
