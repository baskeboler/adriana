import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Subject} from 'rxjs/Subject';
import { AuthProviders, FirebaseAuth, FirebaseAuthState, AuthMethods } from 'angularfire2';
import {EmailPasswordCredentials} from "angularfire2/auth";

/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthService {
  public authState: Subject<FirebaseAuthState>= new Subject();
  public uid: string;
  public loggedIn: Subject<Boolean> = new Subject();

  constructor(public auth$: FirebaseAuth) {
    this.loggedIn.next(false);
    this.authState.next(auth$.getAuth());
    auth$.subscribe((state: FirebaseAuthState) => {
      this.authState.next(state);
      this.uid = (state != null) ? state.uid : null;
      this.loggedIn.next(this.uid != null);
    });
  }


  get authenticated(): boolean {
    return this.uid !== null;
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


  createUser(credentials: EmailPasswordCredentials) {
    return this.auth$.createUser(credentials);
  }
}
