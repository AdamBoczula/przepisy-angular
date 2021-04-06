import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Recipe } from '@core/models';
import { RecipeEditActions } from '@coreStore/actions';
import * as fromCore from '@coreStore/reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, startWith, withLatestFrom } from 'rxjs/operators';
import * as fromRecipes from '../../store/reducers';

@Component({
  selector: 'rp-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public recipeCtrl = new FormControl();
  public recipes$ = this.store.select(fromRecipes.selectRecipes);
  public filteredRecipes$: Observable<Recipe[]>;

  constructor(private store: Store<fromCore.State>) {
    this.filteredRecipes$ = this.recipeCtrl.valueChanges
      .pipe(
        startWith(''), // to show every recipe on click on input
        withLatestFrom(this.recipes$),
        map(([searchInput, recipes]) => {
          return recipes.filter(r => r.name.toLowerCase()
            .includes(searchInput.toLowerCase()));
        })
      );
  }

  public onRecipeSelect(recipe: Recipe): void {
    this.store.dispatch(RecipeEditActions.editRecipe({ editedRecipe: recipe }));
  }
}
