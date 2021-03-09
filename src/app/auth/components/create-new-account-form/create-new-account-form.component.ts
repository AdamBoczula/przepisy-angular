import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Error } from '../../../models/error';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { SameValuesValidator } from '../../validators/same-values.validator';
import { Credentials } from '../../models';

@Component({
  selector: 'rp-create-new-account-form',
  templateUrl: './create-new-account-form.component.html',
  styleUrls: ['./create-new-account-form.component.scss']
})
export class CreateNewAccountFormComponent {
  @Input() error: Error = null;
  @Input() pending: boolean | null = false;

  @Output() back: EventEmitter<void> = new EventEmitter();
  @Output() createAccount: EventEmitter<Credentials> = new EventEmitter<Credentials>();

  public form: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('')
  });

  constructor() {
    this.confirmPasswordFC?.setValidators(SameValuesValidator(this.passwordFC, 'passwordsShouldMatch'));
  }

  get emailFC(): AbstractControl | null {
    return this.form.get('email');
  }

  get passwordFC(): AbstractControl | null {
    return this.form.get('password');
  }

  get confirmPasswordFC(): AbstractControl | null {
    return this.form.get('confirmPassword');
  }

  public create(): void {
    const credentials = {
      email: this.emailFC?.value,
      password: this.passwordFC?.value
    } as Credentials;
    this.createAccount.emit(credentials);

  }

  public goBack(): void {
    this.back.emit();
  }
}
