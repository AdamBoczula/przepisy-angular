import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Category, Recipe } from '../../models';

@Component({
  selector: 'rp-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnChanges {
  @Input() public recipe: Recipe | undefined;
  public imageUrl = '';

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.recipe.isFirstChange()) {
      switch (this.recipe?.categories[0]) {
        case Category.BREAKFETS:
          this.imageUrl = `url('./assets/photos/breakfast.jpg')`;
          break;
        case Category.CAKE:
          this.imageUrl = `url('./assets/photos/cake.jpg')`;
          break;
        case Category.DESSERT:
          this.imageUrl = `url('./assets/photos/dessert.jpg')`;
          break;
        case Category.DINNER:
          this.imageUrl = `url('./assets/photos/dinner.jpg')`;
          break;
        case Category.FAST:
          this.imageUrl = `url('./assets/photos/fast.jpg')`;
          break;
        case Category.HANDMADE:
          this.imageUrl = `url('./assets/photos/handmade.jpg')`;
          break;
        case Category.HEALTHY:
          this.imageUrl = `url('./assets/photos/healthy.jpg')`;
          break;
        case Category.PATE:
          this.imageUrl = `url('./assets/photos/pate.jpg')`;
          break;
        case Category.SALAD:
          this.imageUrl = `url('./assets/photos/salad.jpg')`;
          break;
        case Category.SLOW:
          this.imageUrl = `url('./assets/photos/slow.jpg')`;
          break;
        case Category.SNACK:
          this.imageUrl = `url('./assets/photos/snack.jpg')`;
          break;
        case Category.SOUP:
          this.imageUrl = `url('./assets/photos/soup.jpg')`;
          break;
        case Category.SUPPER:
          this.imageUrl = `url('./assets/photos/supper.jpg')`;
          break;
      }
    }
  }
}
