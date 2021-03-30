import { NgModule } from '@angular/core';
import {
  redirectLoggedInTo,
  redirectUnauthorizedTo,
  AngularFireAuthGuard,
} from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';
import { UserResolver } from './resolvers/user.resolver';

const redirectLoggedInToItems = () => redirectLoggedInTo(['dashboard']);
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['auth']);

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToItems },
  },
  {
    path: 'dashboard',
    resolve: [UserResolver],
    loadChildren: () => import('./core/core.module').then((m) => m.CoreModule),
    data: { authGuardPipe: redirectUnauthorizedToLogin },
    canActivate: [AngularFireAuthGuard],
  },
  {
    path: '**',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
