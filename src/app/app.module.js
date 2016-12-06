"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var app_component_1 = require('./app.component');
var page1_1 = require('../pages/page1/page1');
var page2_1 = require('../pages/page2/page2');
var perfil_1 = require("../pages/perfil/perfil");
var angularfire2_1 = require('angularfire2');
var auth_service_1 = require("../providers/auth-service");
var crearusuario_1 = require("../pages/crearusuario/crearusuario");
var login_1 = require("../pages/login/login");
exports.firebaseConfig = {
    apiKey: "AIzaSyBMleRohBWnm04bwY5BaTRv0SG280ozPZs",
    authDomain: "adriana-a58d9.firebaseapp.com",
    databaseURL: "https://adriana-a58d9.firebaseio.com",
    storageBucket: "adriana-a58d9.appspot.com",
    messagingSenderId: "473945575301"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.MyApp,
                page1_1.Page1,
                page2_1.Page2,
                perfil_1.Perfil,
                crearusuario_1.CrearUsuarioPage,
                login_1.LoginPage
            ],
            imports: [
                ionic_angular_1.IonicModule.forRoot(app_component_1.MyApp),
                angularfire2_1.AngularFireModule.initializeApp(exports.firebaseConfig)
            ],
            bootstrap: [ionic_angular_1.IonicApp],
            entryComponents: [
                app_component_1.MyApp,
                page1_1.Page1,
                page2_1.Page2,
                perfil_1.Perfil,
                crearusuario_1.CrearUsuarioPage,
                login_1.LoginPage
            ],
            providers: [{ provide: core_1.ErrorHandler, useClass: ionic_angular_1.IonicErrorHandler }, auth_service_1.AuthService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map