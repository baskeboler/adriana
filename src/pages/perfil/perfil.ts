/**
 * Created by Axxiome on 12/6/2016.
 */

import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController, ToastController, LoadingController } from "ionic-angular";
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { AuthService } from '../../providers/auth-service';
import { ProfileService } from '../../providers/profile-service';
import { Subscription } from 'rxjs/Subscription';
import { CityService } from '../../providers/cities.service'
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
    public toastCtrl: ToastController, public loadingCtrl: LoadingController) {
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
    })
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

}
