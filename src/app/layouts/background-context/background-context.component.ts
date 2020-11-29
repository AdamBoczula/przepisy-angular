import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'rp-background-context',
  templateUrl: './background-context.component.html',
  styleUrls: ['./background-context.component.scss'],
})
export class BackgroundContextComponent implements OnInit {
  public showSplashScreen = new BehaviorSubject(true);

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => this.showSplashScreen.next(false), 2500);
  }
}
