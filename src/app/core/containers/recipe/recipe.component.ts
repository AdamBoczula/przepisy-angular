import { Component, Input } from '@angular/core';
import { Recipe } from '../../models';

@Component({
  selector: 'rp-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent {
  @Input() public recipe: Recipe | null = null;
}
