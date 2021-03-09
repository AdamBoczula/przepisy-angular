import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRecipes from '../../store/reducers';

@Component({
  selector: 'rp-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent {
  public recipes$ = this.store.select(fromRecipes.selectRecipes);
  constructor(private store: Store<fromRecipes.State>) {}

}
