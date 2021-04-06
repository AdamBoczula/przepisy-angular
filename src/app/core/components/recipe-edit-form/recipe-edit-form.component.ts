import { Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
import { timer, Subscription } from 'rxjs';
import { debounce } from 'rxjs/operators';
import { Category, Recipe, Unit } from '../../models';

@Component({
  selector: 'rp-recipe-edit-form',
  templateUrl: './recipe-edit-form.component.html',
  styleUrls: ['./recipe-edit-form.component.scss'],
})
export class RecipeEditFormComponent implements OnChanges, OnDestroy {
  @Input() public pending: boolean | null = null;
  @Input() public editedRecipe?: Recipe | undefined;
  @Output() public submitRecipe: EventEmitter<Recipe> = new EventEmitter<Recipe>();
  @Output() public removeRecipe: EventEmitter<Recipe> = new EventEmitter<Recipe>();
  public isInEditMode = true;
  public availableCategories: string[] = Object.values(Category);
  public availableUnits: string[] = Object.values(Unit);
  public form: FormGroup = this.formBuilder.group({
    name: new FormControl(null, Validators.required),
    categories: new FormControl(null, Validators.required),
    ingredients: new FormArray([]),
    steps: new FormControl(null),
  });
  private valueChangesSub: Subscription;

  constructor(private formBuilder: FormBuilder) {
    this.createIngredient();
    this.valueChangesSub = this.ingredients.valueChanges
      .pipe(
        debounce(() => timer(500))
      )
      .subscribe(() => {
        if (this.canAddIngredient()) {
          this.createIngredient();
        }
      });
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.editedRecipe?.isFirstChange()) {
      const recipe: Recipe = changes.editedRecipe.currentValue;
      this.isInEditMode = false;
      recipe.ingredients.forEach(() => this.createIngredient());
      this.form.patchValue(recipe);
      this.changeDisabledState(true);
    }
  }

  public ngOnDestroy(): void {
    this.valueChangesSub.unsubscribe();
  }

  public get nameFormControl(): AbstractControl | null {
    return this.form.get('name');
  }

  public get categoriesControl(): AbstractControl | null {
    return this.form.get('categories');
  }

  public get ingredients(): FormArray {
    return this.form.get('ingredients') as FormArray;
  }

  public get steps(): AbstractControl | null {
    return this.form.get('steps');
  }

  public submit(): void {
    if (this.form.valid) {
      const recipe: Recipe = this.form.value;
      if (this.editedRecipe?.id) {
        recipe.id = this.editedRecipe.id;
      }
      this.submitRecipe.emit(recipe);
      this.form.reset({
        name: null,
        categories: null,
        ingredients: [],
        steps: null,
      });
      this.nameFormControl?.clearValidators();
      this.nameFormControl?.updateValueAndValidity();
      this.categoriesControl?.clearValidators();
      this.categoriesControl?.updateValueAndValidity();
    }
  }

  public onDelete(ingredientIndex: number): void {
    this.ingredients.removeAt(ingredientIndex);
  }

  public toggleEditMode(): void {
    this.isInEditMode = !this.isInEditMode;
    this.changeDisabledState(!this.isInEditMode);
  }

  public remove(): void {
    this.removeRecipe?.emit(this.editedRecipe);
  }

  private canAddIngredient(): boolean {
    return this.isInEditMode && !this.ingredients.controls.some(
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

  private changeDisabledState(disable: boolean): void {
    if (disable) {
      this.form.disable({});
    } else {
      this.form.enable({});
    }
  }
}
