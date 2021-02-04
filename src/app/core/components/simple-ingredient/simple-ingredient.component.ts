import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'rp-simple-ingredient',
  templateUrl: './simple-ingredient.component.html',
  styleUrls: ['./simple-ingredient.component.scss'],
})
export class SimpleIngredientComponent {
  @Output() removeIngredient = new EventEmitter<number>();
  @Input() ingredientIndex = 0;
  @Input() availableUnits: string[] = [];
  @Input() public ingredientFG: any;

  public remove(): void {
    if (!this.disabled()) {
      this.removeIngredient.emit(this.ingredientIndex);
    }
  }

  public disabled(): boolean {
    return !this.name;
  }

  private get name(): string {
    return (this.ingredientFG as FormGroup).value.name;
  }
}
