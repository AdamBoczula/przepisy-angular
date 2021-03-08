import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackgroundLayoutComponent } from './containers/background-layout/background-layout.component';
import { CategoriesComponent } from './containers/categories/categories.component';
import { CreateNewComponent } from './containers/create-new/create-new.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { RecipesComponent } from './containers/recipes/recipes.component';
import { RecipeResolver } from '../resolvers/recipe.resolver';

const routes: Routes = [
  {
    path: '',
    component: BackgroundLayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'categories',
        component: CategoriesComponent,
      },
      {
        path: 'recipes',
        component: RecipesComponent,
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
