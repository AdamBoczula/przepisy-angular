import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserCredential } from '@firebase/auth-types';
import { Observable, from } from 'rxjs';
import { Credentials, User } from '../models';

@Injectable()
export class AuthService {
  constructor(private angularFireAuth: AngularFireAuth) {}

  public signIn({ email, password }: Credentials): Observable<UserCredential> {
    return from(
      this.angularFireAuth.signInWithEmailAndPassword(email, password)
    );

    // .pipe(
    //   map((user: any) => {
    //     console.log('User:', user);
    //     return {
    //       email: 'user@user.com',
    //     };
    //   })
    // );
  }
}
