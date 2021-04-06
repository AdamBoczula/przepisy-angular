import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeEditionComponent } from '@core/containers/recipe-edition/recipe-edition.component';
import { RecipeResolver } from '@resolvers/recipe.resolver';
import { BackgroundContentWrapperComponent } from '../shared/container/background-content-wrapper/background-content-wrapper.component';
import { CreateNewComponent } from './containers/create-new/create-new.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: BackgroundContentWrapperComponent,
    resolve: [RecipeResolver],
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'recipe/:recipeName',
        component: RecipeEditionComponent,
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
