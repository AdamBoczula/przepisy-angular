import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core.routing.module';
import { NavigationComponent } from './containers/navigation/navigation.component';
import { BackgroundLayoutComponent } from './containers/background-layout/background-layout.component';
import { RecipesComponent } from './containers/recipes/recipes.component';
import { CreateNewComponent } from './containers/create-new/create-new.component';
import { MenuComponent } from './components/menu/menu.component';
import { CreateNewFormComponent } from './components/create-new-form/create-new-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
// import { IngredientsComponent } from './components/ingredients/ingredients.component';
import { SimpleStepComponent } from './components/simple-step/simple-step.component';
import { StepsComponent } from '../steps/steps.component';
import { SimpleIngredientComponent } from './components/simple-ingredient/simple-ingredient.component';

@NgModule({
  declarations: [
    NavigationComponent,
    BackgroundLayoutComponent,
    RecipesComponent,
    CreateNewComponent,
    CreateNewFormComponent,
    MenuComponent,
    // IngredientsComponent,
    StepsComponent,
    SimpleIngredientComponent,
    SimpleStepComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule,
  ],
})
export class CoreModule {}
