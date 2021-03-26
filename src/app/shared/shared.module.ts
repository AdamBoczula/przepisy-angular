import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundContentWrapperComponent } from './container/background-content-wrapper/background-content-wrapper.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { MenuComponent } from './container/menu/menu.component';



@NgModule({
  declarations: [BackgroundContentWrapperComponent, MenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
  ],
  exports: [BackgroundContentWrapperComponent]
})
export class SharedModule { }
