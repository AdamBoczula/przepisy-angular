import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
import { timer } from 'rxjs';
import { debounce } from 'rxjs/operators';
import { Category, Recipe, Unit } from '../../models';

@Component({
  selector: 'rp-create-new-form',
  templateUrl: './create-new-form.component.html',
  styleUrls: ['./create-new-form.component.scss'],
})
export class CreateNewFormComponent {
  @Input() public pending: boolean | null = null;
  @Output() public createNew: EventEmitter<Recipe> = new EventEmitter<Recipe>();
  public availableCategories: string[] = Object.values(Category);
  public availableUnits: string[] = Object.values(Unit);
  public form: FormGroup = this.formBuilder.group({
    name: new FormControl(null, Validators.required),
    categories: new FormControl(null, Validators.required),
    ingredients: new FormArray([]),
    steps: new FormControl(null),
  });

  constructor(private formBuilder: FormBuilder) {
    this.ingredients.valueChanges
      .pipe(debounce(() => timer(500)))
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

  public get steps(): FormArray {
    return this.form.get('steps') as FormArray;
  }

  public submit(): void {
    if (this.form.valid) {
      this.createNew.emit(this.form.value);
      this.form.reset({
        name: null,
        categories: null,
        ingredients: [],
        steps: null,
      });
    }
  }

  public onDelete(ingredientIndex: number): void {
    this.ingredients.removeAt(ingredientIndex);
  }

  private canAddIngredient(): boolean {
    return !this.ingredients.controls.some(
      (ingredient) => !ingredient.value.name
    );
  }

  private createIngredient(): void {
    this.ingredients.insert(
      this.ingredients.controls.length,
      new FormGroup({
        name: new FormControl(null),
        quantity: new FormControl(null),
        unit: new FormControl(null),
      })
    );
  }
}
