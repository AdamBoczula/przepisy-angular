import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeEditionComponent } from '@core/containers/recipe-edition/recipe-edition.component';
import { RecipeResolver } from '@resolvers/recipe.resolver';
import { RecipesResolver } from '@resolvers/recipes.resolver';
import { BackgroundContentWrapperComponent } from '../shared/container/background-content-wrapper/background-content-wrapper.component';
import { CreateNewComponent } from './containers/create-new/create-new.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: BackgroundContentWrapperComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
        resolve: [RecipesResolver],
      },
      {
        path: 'recipe/:recipeName',
        component: RecipeEditionComponent,
        resolve: [RecipeResolver],
      },
      {
        path: 'new',
        component: CreateNewComponent,

      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {
}
