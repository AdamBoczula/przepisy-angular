import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Category, Unit } from '../../models';
import { debounce } from 'rxjs/operators';
import { timer } from 'rxjs';

@Component({
  selector: 'rp-create-new-form',
  templateUrl: './create-new-form.component.html',
  styleUrls: ['./create-new-form.component.scss'],
})
export class CreateNewFormComponent {
  public availableCategories: string[] = Object.values(Category);
  public availableUnits: string[] = Object.values(Unit);
  public form: FormGroup = this.formBuilder.group({
    name: new FormControl(null, Validators.required),
    categories: new FormControl(null, Validators.required),
    ingredients: new FormArray([]),
    steps: new FormControl([], Validators.required),
  });

  constructor(private formBuilder: FormBuilder) {
    this.ingredients.valueChanges.pipe(debounce(() => timer(500)))
      .subscribe(() => {
        if (this.canAddIngredient()) {
          this.createIngredient();
        }
      });

    if (this.ingredients?.length === 0) {
      this.createIngredient();
    }
  }

  public get nameFormControl(): AbstractControl | null {
    return this.form.get('name');
  }

  public get ingredients(): FormArray {
    return this.form.get('ingredients') as FormArray;
  }

  public submit(): void {
    console.log('submit:', this.form.value);
  }

  public onDelete(ingredientIndex: number): void {
    this.ingredients.removeAt(ingredientIndex);
  }

  private canAddIngredient(): boolean {
    return !this.ingredients.controls.some(ingredient => !ingredient.value.name);
  }

  private createIngredient(): void {
    this.ingredients.insert(this.ingredients.controls.length, new FormGroup({
      name: new FormControl(null, Validators.required),
      quantity: new FormControl(null),
      unit: new FormControl(null),
    }));
  }
}
