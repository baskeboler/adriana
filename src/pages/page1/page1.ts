// <reference path="leaflet.d.ts"/>
import { Component, OnInit, OnDestroy } from '@angular/core';

import { NavController, ToastController } from 'ionic-angular';
import {LoggerService} from '../../providers/logger-service';
import {CityService} from '../../providers/cities.service';
import {Subscription} from 'rxjs/Subscription';
// import {Map} from 'leaflet';

// import 'leaflet.css';
// import   'leaflet/leaflet-src.js';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 implements OnInit,OnDestroy{
  // public mymap: L.Map;
  citiesSub: Subscription;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, private logger: LoggerService, private cities: CityService) {
    // this.mymap = new L.Map('mapid').setView(new L.LatLng(51.505, -0.09), 13);;
  }

  ngOnInit() {
    this.logger.log('Page 1 initializing.');
    this.citiesSub = this.cities.find().subscribe((observable) => {
      this.logger.log(observable);
    });
  }
ngOnDestroy(){
  this.citiesSub.unsubscribe();
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
