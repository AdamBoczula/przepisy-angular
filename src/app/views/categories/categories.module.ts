import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';
import { CategoryCardComponent } from './category-card/category-card.component';

@NgModule({
  declarations: [CategoriesComponent, CategoryCardComponent],
  imports: [CommonModule],
  exports: [CategoriesComponent, CategoryCardComponent],
})
export class CategoriesModule {}
