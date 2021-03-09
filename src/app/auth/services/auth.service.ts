import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserCredential } from '@firebase/auth-types';
import { Observable, from } from 'rxjs';
import { Credentials } from '../models';
import firebase from 'firebase/app';

@Injectable()
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  public loginViaEmail({ email, password }: Credentials): Observable<UserCredential> {
    return from(
      this.afAuth.signInWithEmailAndPassword(email, password)
    );
  }

  public loginViaGoogle(): Observable<UserCredential> {
    return from(
      this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    );
  }

  public loginViaFacebook(): Observable<UserCredential> {
    return from(
      this.afAuth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    );
  }

  public logout(): Observable<void> {
    return from(this.afAuth.signOut());
  }

  public resetPassword(email: string): Observable<void> {
    return from(this.afAuth.sendPasswordResetEmail(email));
  }

  public createAccountViaEmail({ email, password }: Credentials): Observable<UserCredential> {
    return from(this.afAuth.createUserWithEmailAndPassword(email, password));
  }
}
