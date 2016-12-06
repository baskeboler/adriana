import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {Page1} from '../pages/page1/page1';
import {Page2} from '../pages/page2/page2';
import {Perfil} from "../pages/perfil/perfil";
import {AngularFireModule} from 'angularfire2';
import {AuthService} from "../providers/auth-service";
import {CrearUsuarioPage} from "../pages/crearusuario/crearusuario";
import {LoginPage} from "../pages/login/login";

export const firebaseConfig = {
  apiKey: "AIzaSyBMleRohBWnm04bwY5BaTRv0SG280ozPZs",
  authDomain: "adriana-a58d9.firebaseapp.com",
  databaseURL: "https://adriana-a58d9.firebaseio.com",
  storageBucket: "adriana-a58d9.appspot.com",
  messagingSenderId: "473945575301"
};


@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    Perfil,
    CrearUsuarioPage,
    LoginPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    Perfil,
    CrearUsuarioPage,
    LoginPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, AuthService]
})
export class AppModule {
}
