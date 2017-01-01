/**
 * Created by Axxiome on 12/6/2016.
 */

import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController, ToastController, LoadingController } from "ionic-angular";
import { AngularFire } from 'angularfire2';
import { AuthService } from '../../providers/auth-service';
import { ProfileService } from '../../providers/profile-service';
import { Subscription } from 'rxjs/Subscription';
import { CityService } from '../../providers/cities.service';
import { Geolocation } from 'ionic-native';
import {HistoryPage} from "../history/history";
import {JobRequestService} from '../../providers/providers';
import {House} from '../../models/house'
@Component({
  selector: 'page=perfil',
  templateUrl: 'perfil.html'
})
export class Perfil implements OnInit, OnDestroy {
  public direccion: string;
  public habitaciones: number;
  public profileObj: any;
  private profileObjSub: Subscription;
  private citiesSub: Subscription;
  public cities: [any];
  public mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  constructor(public navCtrl: NavController, af: AngularFire, auth: AuthService,
    public ps: ProfileService, public cs: CityService,
    public toastCtrl: ToastController, public loadingCtrl: LoadingController, 
    public requestService: JobRequestService) {
    //this.profileObj = af.database.object('profile/' + auth.uid);
  }

  ngOnInit() {
    // this.profileObj = this.ps.getProfile();
    console.log("on init");

    this.profileObjSub = this.ps.getProfile().subscribe((p) => {
      console.log(p);
      this.profileObj = p;
    });

    this.citiesSub = this.cs.find().subscribe((cities) => {
      this.cities = cities;
    });

    Geolocation.getCurrentPosition({enableHighAccuracy: true, timeout: Number.POSITIVE_INFINITY}).then((resp) => {
      let jsonStringResponse = JSON.stringify(resp.coords);
      console.log(`Got this response: ${resp}`);
    }).catch((err) => console.log(`Error: ${err.message}`));

  }

  ngOnDestroy() {
    console.log("on destroy");
    this.profileObjSub.unsubscribe();
    this.citiesSub.unsubscribe();
  }
  save() {
    // this.profileObj.update
    let obj = {
      address: this.profileObj.address,
      nRooms: this.profileObj.nRooms,
      nBathrooms: this.profileObj.nBathrooms,
      city: this.profileObj.city,
      telefono: this.profileObj.telefono
    };
    this.ps.getProfile().update(obj).then(() => {
      let toast = this.toastCtrl.create({
        message: "Perfil guardado",
        duration: 2000,
        position: "top"
      });
      toast.onDidDismiss(() => console.log('toast dismissed'));
      toast.present();
    });
  }

  goToHistory(){
    this.navCtrl.push(HistoryPage);
  }

  createRequest() {
    let house = new House(this.profileObj.address, "55 5555 5555", this.profileObj.nRooms, this.profileObj.nBathrooms)
    house.id = this.profileObj.$key;
    this.requestService.createJobRequest(house, new Date(), 3);
  }

}
