import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {EmailPasswordCredentials} from "angularfire2/auth";
import {AuthService} from "../../providers/auth-service";

/*
 Generated class for the Crearusuario page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-crearusuario',
  templateUrl: 'crearusuario.html'
})
export class CrearUsuarioPage {
  public usuario: EmailPasswordCredentials = {
    email: '',
    password: ''
  };

  constructor(public navCtrl: NavController, private auth: AuthService) {
  }

  ionViewDidLoad() {
    console.log('Hello CrearusuarioPage Page');
  }

  crearUsuario(){
    this.auth.createUser(this.usuario).then((ret) => {
      console.log(ret);
    }).catch((err) => {
      console.log('hubo un error', err);
    });
  }

}
