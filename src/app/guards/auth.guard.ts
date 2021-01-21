import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanLoad,
  Route,
  UrlSegment,
  Router,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { iif, Observable, of } from 'rxjs';
import { exhaustMap, map } from 'rxjs/operators';
import * as fromAuth from '../auth/store/reducers';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  constructor(private store: Store<fromAuth.State>, private router: Router) {}

  public canLoad(): Observable<UrlTree | boolean> {
    return this.store
      .select(fromAuth.selectUser)
      .pipe(
        exhaustMap((user) =>
          iif(() => !user, of(this.router.createUrlTree(['/'])), of(true))
        )
      );
  }
}
