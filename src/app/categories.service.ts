import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Category {
  categoryName: string;
  photoUrl: string;
  recipesCount: number;
}

@Injectable()
export class CategoriesService {
  public categories$: BehaviorSubject<Category[]> = new BehaviorSubject([
    {
      categoryName: 'śniadania',
      photoUrl: '../assets/photos/śniadania.jpg',
      recipesCount: 0,
    } as Category,
    {
      categoryName: 'obiady',
      photoUrl: '../assets/photos/obiad.jpg',
      recipesCount: 0,
    } as Category,
    {
      categoryName: 'kolacje',
      photoUrl: '../assets/photos/kolacja.jpg',
      recipesCount: 0,
    } as Category,
    {
      categoryName: 'przekąski',
      photoUrl: '../assets/photos/przekąski.jpg',
      recipesCount: 0,
    } as Category,
    {
      categoryName: 'ciasta',
      photoUrl: '../assets/photos/ciasta.jpg',
      recipesCount: 0,
    } as Category,
  ]);
  constructor() {}
}
