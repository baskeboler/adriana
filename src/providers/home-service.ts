import {Injectable} from '@angular/core'
import {AngularFire} from 'angularfire2';
import {House} from '../models/house';
import {Observable} from 'rxjs';

@Injectable()
export class HomeService {

    constructor(private af: AngularFire){

    }
    createHome(opts: any): House {
        let home = new House(opts.address, opts.phoneNumber, opts.numberOfRooms, opts.numberOfBathrooms);
        let id = this.af.database.list('homes').push(home).key;
        home.id = id;
        return home;
    }

    get(id: string): Observable<House> {
        return this.af.database.object('homes/' + id).map(obj => {
            let home = new House(obj.address, obj.phoneNumber, obj.numberOfRooms, obj.numberOfBathrooms);
            home.id = id;
            return home;
        });
    }
}