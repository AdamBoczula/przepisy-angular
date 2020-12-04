import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesModule } from './categories/categories.module';

@NgModule({
  imports: [CommonModule, CategoriesModule],
})
export class ViewsModule {}
