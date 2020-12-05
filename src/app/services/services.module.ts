import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesService } from '../categories.service';

@NgModule({
  imports: [CommonModule],
  providers: [CategoriesService],
})
export class ServicesModule {}
