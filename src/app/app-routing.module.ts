import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  AngularFireAuthGuard,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';
import { UserResolver } from './resolvers/user.resolver';
import { canActivate } from '@angular/fire/auth-guard';

const redirectLoggedInToItems = () => redirectLoggedInTo(['dashboard']);
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/']);

const routes: Routes = [
  {
    path: '',
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
