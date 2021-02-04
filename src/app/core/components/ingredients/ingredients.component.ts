// import { Component, forwardRef } from '@angular/core';
// import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
// import { Ingredient, Unit } from '../../models';
//
// @Component({
//   selector: 'rp-ingredients',
//   templateUrl: './ingredients.component.html',
//   styleUrls: ['./ingredients.component.scss'],
//   providers: [
//     {
//       provide: NG_VALUE_ACCESSOR,
//       useExisting: forwardRef(() => IngredientsComponent),
//       multi: true,
//     },
//   ],
// })
// export class IngredientsComponent implements ControlValueAccessor {
//   public ingredients: Ingredient[] = [];
//   public availableUnits: Unit[] = Object.values(Unit);
//   public onChange: any = () => {};
//   public onTouch: any = () => {};
//
//   writeValue(ingredients: Ingredient[]): void {
//     this.ingredients = ingredients;
//     if (!this.ingredients.length) {
//       console.log('this.ingredients:', this.ingredients);
//       // this.ingredients.push({ name: '', quantity: 0, unit: Unit.GRAM });
//     }
//   }
//
//   registerOnChange(fn: any): void {
//     this.onChange = fn;
//   }
//   registerOnTouched(fn: any): void {
//     this.onTouch = fn;
//   }
// }
