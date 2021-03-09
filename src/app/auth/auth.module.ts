import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './containers/login-page/login-page.component';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageFormComponent } from './components/login-page-form/login-page-form.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/effects/auth.effects';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthService } from './services/auth.service';
import { ResetPasswordDialogComponent } from './components/reset-password-dialog/reset-password-dialog.component';
import { CreateNewAccountComponent } from './containers/create-new-account/create-new-account.component';
import { CreateNewAccountFormComponent } from './components/create-new-account-form/create-new-account-form.component';

@NgModule({
  declarations: [
    LoginPageComponent,
    LoginPageFormComponent,
    ResetPasswordDialogComponent,
    CreateNewAccountComponent,
    CreateNewAccountFormComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.reducers),
    EffectsModule.forFeature([AuthEffects]),
    FormsModule,
  ],
  providers: [AuthService],
})
export class AuthModule {
}
