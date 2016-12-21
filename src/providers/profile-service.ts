import { Injectable } from '@angular/core';
import {AuthService} from './auth-service';
import {AngularFire} from 'angularfire2';

@Injectable()
export class ProfileService {

  constructor(private auth: AuthService, private af: AngularFire) { }

  getProfile() {
    let uid = this.auth.uid;
    return this.af.database.object('profile/' + uid);
  }
}
