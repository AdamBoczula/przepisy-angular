import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'rp-background-context',
  templateUrl: './background-context.component.html',
  styleUrls: ['./background-context.component.scss'],
  animations: [
    trigger('showSplashScreen', [
      state(
        'off',
        style({
          opacity: 0,
        })
      ),
      state(
        'on',
        style({
          opacity: 1,
        })
      ),
      transition('on => off', [animate('0.35s')]),
      transition('off => on', [animate('0.25s')]),
    ]),
  ],
})
export class BackgroundContextComponent implements OnInit {
  public showSplashScreen$ = new BehaviorSubject(false);

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => this.showSplashScreen$.next(true));
    setTimeout(() => this.showSplashScreen$.next(false), 3000);
  }
}
