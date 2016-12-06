"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
/*
 Generated class for the Login page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, auth) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.usuario = {
            email: '',
            password: ''
        };
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('Hello LoginPage Page');
    };
    LoginPage.prototype.login = function () {
        this.auth.signInWithUserPassword(this.usuario).then(function (ret) {
            console.log('successs!', ret);
        }).catch(function (err) {
            console.log('error: ', err);
        });
    };
    LoginPage = __decorate([
        core_1.Component({
            selector: 'page-login',
            templateUrl: 'login.html'
        })
    ], LoginPage);
    return LoginPage;
}());
exports.LoginPage = LoginPage;
//# sourceMappingURL=login.js.map