import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundContextComponent } from './background-context/background-context.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BackgroundContextComponent],
  imports: [CommonModule, RouterModule],
  exports: [BackgroundContextComponent],
})
export class LayoutsModule {}
