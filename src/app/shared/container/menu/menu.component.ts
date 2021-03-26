import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'rp-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @Output() public logout: EventEmitter<void> = new EventEmitter();

  public onLogout(): void {
    this.logout.emit();
  }
}
