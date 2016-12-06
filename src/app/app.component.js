"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var ionic_native_1 = require('ionic-native');
var page1_1 = require('../pages/page1/page1');
var page2_1 = require('../pages/page2/page2');
var perfil_1 = require('../pages/perfil/perfil');
var login_1 = require("../pages/login/login");
var MyApp = (function () {
    function MyApp(platform, af, auth) {
        this.platform = platform;
        this.af = af;
        this.auth = auth;
        this.rootPage = page1_1.Page1;
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Login', component: login_1.LoginPage },
            { title: 'Page One', component: page1_1.Page1 },
            { title: 'Page Two', component: page2_1.Page2 },
            { title: 'Perfil', component: perfil_1.Perfil }
        ];
        // System
    }
    MyApp.prototype.initializeApp = function () {
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            ionic_native_1.StatusBar.styleDefault();
            ionic_native_1.Splashscreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.signInWithFacebook = function () {
        var _this = this;
        this.auth.signInWithFacebook()
            .then(function () { return _this.onSignInSuccess(); });
    };
    MyApp.prototype.onSignInSuccess = function () {
        console.log("Facebook display name ", this.auth.displayName());
    };
    __decorate([
        core_1.ViewChild(ionic_angular_1.Nav)
    ], MyApp.prototype, "nav");
    MyApp = __decorate([
        core_1.Component({
            templateUrl: 'app.html'
        })
    ], MyApp);
    return MyApp;
}());
exports.MyApp = MyApp;
//# sourceMappingURL=app.component.js.map