import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { RootComponent } from './root.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  providers: [],
  bootstrap: [RootComponent],
  declarations: [RootComponent],
})
export class AppModule {}
