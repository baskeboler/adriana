import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar, Splashscreen} from 'ionic-native';

import {Page1} from '../pages/page1/page1';
import {Page2} from '../pages/page2/page2';
import {Perfil} from '../pages/perfil/perfil'
import {AngularFire} from "angularfire2";
import {AuthService} from "../providers/auth-service";
import {LoginPage} from "../pages/login/login";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any, visible: boolean}>;

  loggedIn: boolean;

  constructor(public platform: Platform, private af: AngularFire, private auth: AuthService) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      {title: 'Login', component: LoginPage, visible: true},
      {title: 'Page One', component: Page1, visible: true},
      {title: 'Page Two', component: Page2, visible: true},
      {title: 'Perfil', component: Perfil, visible: true}
    ];

    // System

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();

      this.auth.loggedIn
        .subscribe(arg => {
          this.loggedIn = arg.valueOf();
          this.pages[0].visible = this.loggedIn;
        });

    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout() {
    this.openPage({component: LoginPage});
    this.auth.signOut();
  }


}
