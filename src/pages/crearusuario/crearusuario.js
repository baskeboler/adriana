"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
/*
 Generated class for the Crearusuario page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var CrearUsuarioPage = (function () {
    function CrearUsuarioPage(navCtrl, auth) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.usuario = {
            email: '',
            password: ''
        };
    }
    CrearUsuarioPage.prototype.ionViewDidLoad = function () {
        console.log('Hello CrearusuarioPage Page');
    };
    CrearUsuarioPage.prototype.crearUsuario = function () {
        this.auth.createUser(this.usuario).then(function (ret) {
            console.log(ret);
        }).catch(function (err) {
            console.log('hubo un error', err);
        });
    };
    CrearUsuarioPage = __decorate([
        core_1.Component({
            selector: 'page-crearusuario',
            templateUrl: 'crearusuario.html'
        })
    ], CrearUsuarioPage);
    return CrearUsuarioPage;
}());
exports.CrearUsuarioPage = CrearUsuarioPage;
//# sourceMappingURL=crearusuario.js.map