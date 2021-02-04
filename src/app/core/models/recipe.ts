import { Category } from './category';
import { Ingredient } from './ingredient';
import { Step } from './step';

export interface Recipe {
  name: string;
  imagePath?: string; // w przyszłości możliwe, że damy możliwość wrzucania zdjęcia.
  categories: Category[];
  time: number; // raczej w minutach, treba to zaznaczyć.
  downtime?: number; // raczej w godzinach, trzeba to zaznaczyć.
  ingredients: Ingredient[];
  steps: Step[];
}
