import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rp-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss'],
})
export class CategoryCardComponent {
  @Input() title = '';
  @Input() recipesCount = 0;
  @Input() imageUrl = '';

  constructor() {}
}
