import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Ingredient, Recipe } from '../../models';

import * as fromRecipeCreator from '../../store/reducers';
import { RecipeActions, RecipeCreationActions } from '../../store/actions';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'rp-create-new',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.scss'],
})
export class CreateNewComponent {
  public pending$ = this.store.select(
    fromRecipeCreator.selectRecipeCreationPending);

  constructor(private store: Store<fromRecipeCreator.State>) {}

  public createNewRecipe(recipe: Recipe): void {
    recipe.ingredients = this.removeEmptyIngredient(recipe.ingredients);
    this.store.dispatch(RecipeCreationActions.createRecipe({ recipe }));
  }

  private removeEmptyIngredient(ingredients: Ingredient[]): Ingredient[] {
    return ingredients.filter((i) => !!i.name);
  }
}
