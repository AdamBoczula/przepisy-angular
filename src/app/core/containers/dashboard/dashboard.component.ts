import { Component } from '@angular/core';
import { Recipe } from '@core/models';
import { RecipeEditActions } from '@coreStore/actions';
import * as fromCore from '@coreStore/reducers';
import { Store } from '@ngrx/store';
import * as fromRecipes from '../../store/reducers';

@Component({
  selector: 'rp-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public recipes$ = this.store.select(fromRecipes.selectRecipes);

  constructor(private store: Store<fromCore.State>) {}

  public onRecipeSelect(recipe: Recipe): void {
    this.store.dispatch(RecipeEditActions.editRecipe({ editedRecipe: recipe }));
  }
}
