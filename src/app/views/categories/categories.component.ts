import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/categories.service';

@Component({
  selector: 'rp-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
  constructor(private categoriesService: CategoriesService) {}
}
