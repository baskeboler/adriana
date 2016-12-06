/**
 * Created by Axxiome on 12/6/2016.
 */

import {Component} from '@angular/core';
import {NavController} from "ionic-angular";

@Component({
  selector: 'page=perfil',
  templateUrl: 'perfil.html'
})
export class Perfil {
  public direccion: string    ;
  public habitaciones: number;
  constructor(public navCtrl: NavController) {

  }

}
