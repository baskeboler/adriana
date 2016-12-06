// <reference path="leaflet.d.ts"/>
import { Component } from '@angular/core';

import { NavController, ToastController } from 'ionic-angular';
// import {Map} from 'leaflet';

// import 'leaflet.css';
// import   'leaflet/leaflet-src.js';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  // public mymap: L.Map;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {
    // this.mymap = new L.Map('mapid').setView(new L.LatLng(51.505, -0.09), 13);;
  }

  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  };

  public horas: number = 3;

  showToast() {
    let toast = this.toastCtrl.create({
      message: "new toast!",
      duration: 3000,
      position: 'bottom',
      showCloseButton: true
    });

    toast.onDidDismiss(() => {
      console.log('dismiss toast!');
    });

    toast.present();
  }

  findAdriana($event) {
    console.log($event);

  }
}
