import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '@core/models';

@Component({
  selector: 'rp-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent {
  @Input() public recipes: Recipe[] | null = null;
  @Output() public editRecipe: EventEmitter<Recipe> = new EventEmitter<Recipe>();
}
