import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {Page1} from '../pages/page1/page1';
import {Page2} from '../pages/page2/page2';
import {Perfil} from "../pages/perfil/perfil";

import {HistoryDetailPage} from "../pages/history-detail/history-detail";
import {HistoryPage} from "../pages/history/history";

import {AngularFireModule, FirebaseAppConfig, AuthProviders, AuthMethods} from 'angularfire2';
import {AuthService, CityService, LoggerService, ProfileService, HomeService, JobRequestService} from "../providers/providers";
import {CrearUsuarioPage} from "../pages/crearusuario/crearusuario";
import {LoginPage} from "../pages/login/login";
import {CityListComponent} from '../components/city-list/citi-list.component';
import {TextMaskModule} from 'angular2-text-mask';

export const firebaseConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyBMleRohBWnm04bwY5BaTRv0SG280ozPZs",
  authDomain: "adriana-a58d9.firebaseapp.com",
  databaseURL: "https://adriana-a58d9.firebaseio.com",
  storageBucket: "adriana-a58d9.appspot.com",
  // messagingSenderId: "473945575301"
}

export const firebaseAuthConfig = {
  method: AuthMethods.Password,
  provider: AuthProviders.Password
};

let pages = [
    MyApp,
    Page1,
    Page2,
    Perfil,
    CrearUsuarioPage,
    LoginPage,
    CityListComponent,
    HistoryDetailPage,
    HistoryPage
];
@NgModule({
  declarations: pages,
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    TextMaskModule
  ],
  bootstrap: [IonicApp],
  entryComponents: pages,
  providers: [
    {
      provide: ErrorHandler, 
      useClass: IonicErrorHandler
    }, 
    AuthService, 
    LoggerService, 
    CityService, 
    ProfileService,
    HomeService,
    JobRequestService
  ]
})
export class AppModule {
}
