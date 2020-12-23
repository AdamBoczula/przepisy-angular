import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriesService, Category } from 'src/app/services/categories.service';

@Component({
  selector: 'rp-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
  public readonly categories$: Observable<Category[]> = this.categoriesService
    .categories$;
  constructor(private categoriesService: CategoriesService) {}
}
