import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the WorkerDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-worker-detail',
  templateUrl: 'worker-detail.html'
})
export class WorkerDetailPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello WorkerDetailPage Page');
  }

}
