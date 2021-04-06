import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'rp-simple-ingredient',
  templateUrl: './simple-ingredient.component.html',
  styleUrls: ['./simple-ingredient.component.scss'],
})
export class SimpleIngredientComponent {
  @Output() public removeIngredient = new EventEmitter<number>();
  @Input() public ingredientIndex = 0;
  @Input() public availableUnits: string[] = [];
  @Input() public ingredientFG: any;

  public remove(): void {
    if (!this.disabled()) {
      this.removeIngredient.emit(this.ingredientIndex);
    }
  }

  public disabled(): boolean {
    return !(this.ingredientFG as FormGroup).value.name
      || (this.ingredientFG as FormGroup).disabled;
  }
}
