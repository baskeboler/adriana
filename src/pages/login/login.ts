import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {EmailPasswordCredentials} from "angularfire2/auth";
import {AuthService} from "../../providers/auth-service";

/*
 Generated class for the Login page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  public usuario: EmailPasswordCredentials = {
    email: '',
    password: ''
  };

  constructor(public navCtrl: NavController, public auth: AuthService) {
  }

  ionViewDidLoad() {
    console.log('Hello LoginPage Page');
  }

  login() {
    this.auth.signInWithUserPassword(this.usuario).then((ret) => {
      console.log('successs!', ret);
    }).catch((err) => {
      console.log( 'error: ', err);
    })
  }

}
