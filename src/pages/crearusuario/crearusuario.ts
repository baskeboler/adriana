import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { EmailPasswordCredentials } from "angularfire2/auth";
import { AuthService } from "../../providers/auth-service";


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
  public user: EmailPasswordCredentials = {
    email: '',
    password: ''
  };
  public password2: string;

  constructor(public navCtrl: NavController, private auth: AuthService, public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('Hello CrearusuarioPage Page');
  }

  showToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom',
      showCloseButton: true
    });

    toast.onDidDismiss(() => {
      console.log('dismiss toast!');
    });

    toast.present();
    return toast;
  }

  crearUsuario() {
    let loading = this.loadingCtrl.create({
      content: 'Creando Usuario',
      delay: 3000
    });
    loading.present();
    // let created = new Promise<any>();

    this.auth.createUser(this.user).then((ret) => {
      console.log(ret);
      loading.dismiss().then( () => this.showToast("Usuario creado"));
    }).catch((err) => {
      console.log('hubo un error', err);
    });
  }

}
