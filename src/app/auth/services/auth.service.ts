import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserCredential } from '@firebase/auth-types';
import { Observable, from } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Credentials } from '../models';

@Injectable()
export class AuthService {
  constructor(private angularFireAuth: AngularFireAuth) {}

  public signIn({ email, password }: Credentials): Observable<UserCredential> {
    return from(
      this.angularFireAuth.signInWithEmailAndPassword(email, password)
    );
  }

  public logout(): Observable<void> {
    return from(this.angularFireAuth.signOut());
  }
}
