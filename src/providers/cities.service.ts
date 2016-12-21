import { Injectable } from '@angular/core';
import {AuthService} from './auth-service';
import {LoggerService} from './logger-service';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
export interface Barrio {
  name: string;
}
export interface City {
  name: string;
  barrio: Array<{string: Barrio}>
}
@Injectable()
export class CityService {

  constructor(private logger: LoggerService, private auth: AuthService, private af: AngularFire) {

  }

  find(): FirebaseListObservable<any> {
    return this.af.database.list('cities');
  }
}
