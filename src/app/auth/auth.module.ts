import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './containers/login-page/login-page.component';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageFormComponent } from './components/login-page-form/login-page-form.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from './store/reducers';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [LoginPageComponent, LoginPageFormComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.reducers),
    // EffectsModule.forFeature([AuthEffects]),
  ],
})
export class AuthModule {}
