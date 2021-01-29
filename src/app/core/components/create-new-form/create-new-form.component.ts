import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Category } from '../../models';

@Component({
  selector: 'rp-create-new-form',
  templateUrl: './create-new-form.component.html',
  styleUrls: ['./create-new-form.component.scss'],
})
export class CreateNewFormComponent {
  public availableCategories: string[] = Object.values(Category);
  public form: FormGroup = this.formBuilder.group({
    name: new FormControl(null, Validators.required),
    categories: new FormControl(null, Validators.required),
    ingredients: new FormControl([], Validators.required),
    steps: new FormControl([], Validators.required),
  });

  constructor(private formBuilder: FormBuilder) {}

  public get nameFormControl(): AbstractControl | null {
    return this.form.get('name');
  }

  public get categoriesFormControl(): AbstractControl | null {
    return this.form.get('categories');
  }

  public get ingredientsControl(): AbstractControl | null {
    return this.form.get('ingredients');
  }

  public submit(): void {
    console.log('submit:', this.form.value);
  }
}
