import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeResolver } from '@resolvers/recipe.resolver';
import { BackgroundContentWrapperComponent } from '../shared/container/background-content-wrapper/background-content-wrapper.component';
import { CategoriesComponent } from './containers/categories/categories.component';
import { CreateNewComponent } from './containers/create-new/create-new.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { RecipesComponent } from './containers/recipes/recipes.component';

const routes: Routes = [
  {
    path: '',
    component: BackgroundContentWrapperComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
        data: {showMenu: true},
      },
      {
        path: 'categories',
        component: CategoriesComponent,
        data: {showMenu: true},
      },
      {
        path: 'recipes',
        component: RecipesComponent,
        resolve: [RecipeResolver],
        data: {showMenu: true},

      },
      {
        path: 'new',
        component: CreateNewComponent,
        data: {showMenu: true},

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
