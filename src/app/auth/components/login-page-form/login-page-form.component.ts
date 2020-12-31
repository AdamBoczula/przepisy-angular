import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Error } from 'src/app/models/error';
import { Credentials } from '../../models';

@Component({
  selector: 'rp-login-page-form',
  templateUrl: './login-page-form.component.html',
  styleUrls: ['./login-page-form.component.scss'],
})
export class LoginPageFormComponent {
  @Input() error: Error = null;
  @Input() pending: boolean | null = false;
  @Output() login: EventEmitter<Credentials> = new EventEmitter();
  public form: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  public get usernameFormControl(): AbstractControl | null {
    return this.form.get('username');
  }

  public get passwordFormControl(): AbstractControl | null {
    return this.form.get('password');
  }

  public submit(): void {
    if (this.form.valid) {
      this.login.emit(this.form.value);
    }
  }
}
