import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from '@core/containers/dashboard/dashboard.component';
import { RecipeEditionComponent } from '@core/containers/recipe-edition/recipe-edition.component';
import { RecipeEditEffects } from '@coreStore/effects/recipe-edit.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from '../material/material.module';
import { StepsComponent } from '../steps/steps.component';
import { RecipeEditFormComponent } from './components/recipe-edit-form/recipe-edit-form.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { SimpleIngredientComponent } from './components/simple-ingredient/simple-ingredient.component';
import { SimpleStepComponent } from './components/simple-step/simple-step.component';
import { CreateNewComponent } from './containers/create-new/create-new.component';
import { NavigationComponent } from './containers/navigation/navigation.component';
import { RecipesComponent } from './containers/recipes/recipes.component';
import { CoreRoutingModule } from './core.routing.module';
import { RecipeEffect } from './store/effects';
import * as fromCore from './store/reducers';

@NgModule({
  declarations: [
    NavigationComponent,
    RecipesComponent,
    CreateNewComponent,
    RecipeEditFormComponent,
    StepsComponent,
    SimpleIngredientComponent,
    SimpleStepComponent,
    RecipeComponent,
    DashboardComponent,
    RecipeEditionComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule,
    StoreModule.forFeature(fromCore.coreFeatureKey, fromCore.reducers),
    EffectsModule.forFeature([RecipeEffect, RecipeEditEffects]),
  ],
})
export class CoreModule {}
