import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { AuthProviders, FirebaseAuth, FirebaseAuthState, AuthMethods } from 'angularfire2';
import {EmailPasswordCredentials} from "angularfire2/auth";

/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthService {
  private authState: FirebaseAuthState;

  constructor(public auth$: FirebaseAuth) {
    this.authState = auth$.getAuth();
    auth$.subscribe((state: FirebaseAuthState) => {
      this.authState = state;
    });
  }

  get authenticated(): boolean {
    return this.authState !== null;
  }

  signInWithFacebook(): firebase.Promise<FirebaseAuthState> {
    return this.auth$.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup
    });
  }

  signOut(): void {
    this.auth$.logout();
  }

  signInWithUserPassword(credentials: EmailPasswordCredentials): firebase.Promise<FirebaseAuthState> {
    credentials = credentials || credentials;
    return this.auth$.login(credentials)
  }

  displayName(): string {
    if (this.authState != null) {
      return this.authState.facebook.displayName;
    } else {
      return '';
    }
  }

  createUser(credentials: EmailPasswordCredentials) {
    return this.auth$.createUser(credentials);
  }
}
