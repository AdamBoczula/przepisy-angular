import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackgroundContentWrapperComponent } from '../shared/container/background-content-wrapper/background-content-wrapper.component';
import { CreateNewAccountComponent } from './containers/create-new-account/create-new-account.component';
import { LoginPageComponent } from './containers/login-page/login-page.component';

const routes: Routes = [
  {
    path: '',
    component: BackgroundContentWrapperComponent,
    children: [
      {
        path: '',
        component: LoginPageComponent,
      },
      {
        path: 'create-new-account',
        component: CreateNewAccountComponent,
      },
      {
        path: '*',
        redirectTo: ''
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {
}
