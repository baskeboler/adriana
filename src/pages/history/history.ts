import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {JobRequestService} from '../../providers/providers';
/*
 Generated class for the History page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-history',
  templateUrl: 'history.html'
})
export class HistoryPage {
  public services: Array<any> = [
    {
      fecha: new Date(),
      worker: 'Sandra',
      horas: 3
    }, {
      fecha: new Date(),
      worker: 'Sandra',
      horas: 3
    }, {
      fecha: new Date(),
      worker: 'Sandra',
      horas: 3
    }
  ];
  public requests: any;

  constructor(public navCtrl: NavController, public requestService: JobRequestService) {
    this.requests = this.requestService.query();
  }

  ionViewDidLoad() {
    console.log('Hello HistoryPage Page');
  }

}
