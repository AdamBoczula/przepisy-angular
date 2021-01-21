import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core.routing.module';
import { NavigationComponent } from './containers/navigation/navigation.component';
import { BackgroundLayoutComponent } from './containers/background-layout/background-layout.component';
import { RecipesComponent } from './containers/recipes/recipes.component';
import { CreateNewComponent } from './containers/create-new/create-new.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    NavigationComponent,
    BackgroundLayoutComponent,
    RecipesComponent,
    CreateNewComponent,
    MenuComponent,
  ],
  imports: [CommonModule, CoreRoutingModule],
})
export class CoreModule {}
