import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Error } from 'src/app/models/error';
import { Credentials } from '../../models';

const GOOGLE_SVG_ICON = `
<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" class="svg-inline--fa fa-google fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>`;


@Component({
  selector: 'rp-login-page-form',
  templateUrl: './login-page-form.component.html',
  styleUrls: ['./login-page-form.component.scss'],
})
export class LoginPageFormComponent {
  @Input() public error: Error = null;

  @Output() public loginViaEmail: EventEmitter<Credentials> = new EventEmitter();
  @Output() public loginViaFacebook: EventEmitter<void> = new EventEmitter();
  @Output() public loginViaGoogle: EventEmitter<void> = new EventEmitter();
  @Output() public createAccount: EventEmitter<void> = new EventEmitter();
  @Output() public resetPassword: EventEmitter<void> = new EventEmitter();

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconLiteral('google', sanitizer.bypassSecurityTrustHtml(GOOGLE_SVG_ICON));

  }


  public form: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  public get emailFormControl(): AbstractControl | null {
    return this.form.get('email');
  }

  public get passwordFormControl(): AbstractControl | null {
    return this.form.get('password');
  }

  public loginEmail(): void {
    if (this.form.valid) {
      this.loginViaEmail.emit(this.form.value);
    }
  }

  public loginGoogle(): void {
    this.loginViaGoogle.emit();
  }

  public loginFacebook(): void {
    this.loginViaFacebook.emit();
  }

  public reset(): void {
    this.resetPassword.emit();

  }

  public create(): void {
    this.createAccount.emit();
  }
}
