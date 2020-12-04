import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rp-root',
  template: '<router-outlet></router-outlet>',
})
export class RootComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
