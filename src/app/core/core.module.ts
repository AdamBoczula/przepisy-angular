import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from '../material/material.module';
import { StepsComponent } from '../steps/steps.component';
import { CreateNewFormComponent } from './components/create-new-form/create-new-form.component';
import { SimpleIngredientComponent } from './components/simple-ingredient/simple-ingredient.component';
import { SimpleStepComponent } from './components/simple-step/simple-step.component';
import { CreateNewComponent } from './containers/create-new/create-new.component';
import { NavigationComponent } from './containers/navigation/navigation.component';
import { RecipeComponent } from './containers/recipe/recipe.component';
import { RecipesComponent } from './containers/recipes/recipes.component';
import { CoreRoutingModule } from './core.routing.module';
import { RecipeEffect, UserEffect } from './store/effects';
import * as fromCore from './store/reducers';

@NgModule({
  declarations: [
    NavigationComponent,
    RecipesComponent,
    CreateNewComponent,
    CreateNewFormComponent,
    StepsComponent,
    SimpleIngredientComponent,
    SimpleStepComponent,
    RecipeComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule,
    StoreModule.forFeature(fromCore.coreFeatureKey, fromCore.reducers),
    EffectsModule.forFeature([RecipeEffect, UserEffect]),
  ],
})
export class CoreModule {}
