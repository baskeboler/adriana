"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
// import { Http } from '@angular/http';
require('rxjs/add/operator/map');
var angularfire2_1 = require('angularfire2');
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var AuthService = (function () {
    function AuthService(auth$) {
        var _this = this;
        this.auth$ = auth$;
        this.authState = auth$.getAuth();
        auth$.subscribe(function (state) {
            _this.authState = state;
        });
    }
    Object.defineProperty(AuthService.prototype, "authenticated", {
        get: function () {
            return this.authState !== null;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.signInWithFacebook = function () {
        return this.auth$.login({
            provider: angularfire2_1.AuthProviders.Facebook,
            method: angularfire2_1.AuthMethods.Popup
        });
    };
    AuthService.prototype.signOut = function () {
        this.auth$.logout();
    };
    AuthService.prototype.signInWithUserPassword = function (credentials) {
        credentials = credentials || credentials;
        return this.auth$.login(credentials);
    };
    AuthService.prototype.displayName = function () {
        if (this.authState != null) {
            return this.authState.facebook.displayName;
        }
        else {
            return '';
        }
    };
    AuthService.prototype.createUser = function (credentials) {
        return this.auth$.createUser(credentials);
    };
    AuthService = __decorate([
        core_1.Injectable()
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth-service.js.map