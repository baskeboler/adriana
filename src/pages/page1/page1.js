"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// <reference path="leaflet.d.ts"/>
var core_1 = require('@angular/core');
// import {Map} from 'leaflet';
// import 'leaflet.css';
// import   'leaflet/leaflet-src.js';
var Page1 = (function () {
    // public mymap: L.Map;
    function Page1(navCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.event = {
            month: '1990-02-19',
            timeStarts: '07:43',
            timeEnds: '1990-02-20'
        };
        this.horas = 3;
        // this.mymap = new L.Map('mapid').setView(new L.LatLng(51.505, -0.09), 13);;
    }
    Page1.prototype.showToast = function () {
        var toast = this.toastCtrl.create({
            message: "new toast!",
            duration: 3000,
            position: 'bottom',
            showCloseButton: true
        });
        toast.onDidDismiss(function () {
            console.log('dismiss toast!');
        });
        toast.present();
    };
    Page1.prototype.findAdriana = function ($event) {
        console.log($event);
    };
    Page1 = __decorate([
        core_1.Component({
            selector: 'page-page1',
            templateUrl: 'page1.html'
        })
    ], Page1);
    return Page1;
}());
exports.Page1 = Page1;
//# sourceMappingURL=page1.js.map