import {Component} from '@angular/core';
import {NavController, LoadingController} from 'ionic-angular';
import {EmailPasswordCredentials} from "angularfire2/auth";
import {AuthService} from "../../providers/auth-service";
import {Perfil} from '../perfil/perfil';
import {CrearUsuarioPage} from '../crearusuario/crearusuario';
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

  constructor(public navCtrl: NavController, public auth: AuthService, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('Hello LoginPage Page');
  }

  login() {
    let loading = this.loadingCtrl.create({
      content: 'Entrando',
      delay: 3000
    });
    loading.present();

    this.auth.signInWithUserPassword(this.usuario).then((ret) => {
      console.log('successs!', ret);
      this.navCtrl.setRoot(Perfil);
      loading.dismiss();
    }).catch((err) => {
      console.log( 'error: ', err);
    })
  }

  goToCreateUser() {
    this.navCtrl.push(CrearUsuarioPage);
  }

}
