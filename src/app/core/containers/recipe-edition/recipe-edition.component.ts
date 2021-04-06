import { Component } from '@angular/core';
import { Recipe } from '@core/models';
import { RecipeEditActions } from '@coreStore/actions';
import * as fromCore from '@coreStore/reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'rp-recipe-edition',
  templateUrl: './recipe-edition.component.html',
  styleUrls: ['./recipe-edition.component.scss']
})
export class RecipeEditionComponent {
  public editedRecipe$ = this.store.select(fromCore.selectEditedRecipe);

  constructor(private store: Store<fromCore.State>) {}

  public editRecipe(editedRecipe: Recipe): void {
    this.store.dispatch(RecipeEditActions.changeRecipe({ editedRecipe }));
  }

  public removeRecipe(recipe: Recipe): void {
    this.store.dispatch(RecipeEditActions.removeRecipe({ recipe }));
  }
}
