import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { CreateNewAccountFormComponent } from './components/create-new-account-form/create-new-account-form.component';
import { LoginPageFormComponent } from './components/login-page-form/login-page-form.component';
import { ResetPasswordDialogComponent } from './components/reset-password-dialog/reset-password-dialog.component';
import { CreateNewAccountComponent } from './containers/create-new-account/create-new-account.component';
import { LoginPageComponent } from './containers/login-page/login-page.component';
import { AuthService } from './services/auth.service';
import { AuthEffects } from './store/effects/auth.effects';
import * as fromAuth from './store/reducers';

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
    SharedModule,
  ],
  providers: [AuthService],
})
export class AuthModule {
}
