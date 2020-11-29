import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundContextComponent } from './background-context/background-context.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';

@NgModule({
  declarations: [BackgroundContextComponent, SplashScreenComponent],
  imports: [CommonModule],
  exports: [BackgroundContextComponent],
})
export class LayoutsModule {}
