import { Component, Input, OnInit } from '@angular/core';
import { Unit } from '../core/models';

@Component({
  selector: 'rp-simple-ingredient',
  templateUrl: './simple-ingredient.component.html',
  styleUrls: ['./simple-ingredient.component.scss'],
})
export class SimpleIngredientComponent {
  @Input() availableUnit: Unit[] = [];
  constructor() {}
}
