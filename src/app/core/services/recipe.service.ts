import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { DatabaseReference } from '@angular/fire/database/interfaces';
import { from, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Recipe } from '../models';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(private afdb: AngularFireDatabase) {}

  public fetchRecipes(userId?: string): Observable<Recipe[]> {
    return this.afdb
      .list<Recipe>(`/users/${userId}/recipes`)
      .snapshotChanges()
      .pipe(take(1),
        map(snapRecipes => snapRecipes.map(snapRecipe => ({
            ...snapRecipe.payload.val(),
            id: snapRecipe.key
          } as Recipe))
        ));
  }

  public createRecipe(
    recipe: Recipe,
    userId?: string
  ): Observable<DatabaseReference> {
    return from(
      this.afdb.database.ref(`/users/${userId}/recipes`).push(recipe)
    );
  }

  public changeRecipe(recipe: Recipe, userId?: string): Observable<DatabaseReference> {
    return from(this.afdb.database.ref(`/users/${userId}/recipes/${recipe.id}`).update(recipe));
  }

  public removeRecipe(recipe: Recipe, userId?: string): Observable<DatabaseReference> {
    return from(this.afdb.database.ref(`/users/${userId}/recipes/${recipe?.id}`).remove());
  }

}
