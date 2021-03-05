import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { firebaseConfig } from '../../firebaseConfig';
import { take } from 'rxjs/operators';
import { from, Observable } from 'rxjs';
import { Recipe } from '../models';
import { DatabaseReference } from '@angular/fire/database/interfaces';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(private afdb: AngularFireDatabase) {}

  public fetchRecipes(userId?: string): Observable<Recipe[]> {
    return this.afdb
      .list<Recipe>(`/users/${userId}/recipes`)
      .valueChanges()
      .pipe(take(1));
  }

  public createRecipe(
    recipe: Recipe,
    userId?: string
  ): Observable<DatabaseReference> {
    return from(
      this.afdb.database.ref(`/users/${userId}/recipes`).push(recipe)
    );
  }
}
