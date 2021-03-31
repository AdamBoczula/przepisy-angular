import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { BackgroundContentWrapperComponent } from './container/background-content-wrapper/background-content-wrapper.component';
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
