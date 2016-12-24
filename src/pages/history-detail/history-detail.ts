import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the HistoryDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-history-detail',
  templateUrl: 'history-detail.html'
})
export class HistoryDetailPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello HistoryDetailPage Page');
  }

}
