import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { AuthService } from './auth-service';
import { JobRequest } from '../models/jobrequest';

@Injectable()
export class JobRequestService {

    constructor(private af: AngularFire, private auth: AuthService) {

    }

    createJobRequest(house, date, hours) {
        // this.af.database.object()
        let now = new Date();
        let req = new JobRequest(house, date, hours, now);
        req.uid = this.auth.uid;
        return this.af.database.list('requests').push(req.toJSON())
            .then(result => {
                req.id = result.key;
                return req;
            });
    }

    query() {
        return this.af.database.list('requests', {
            query: {
                orderByChild: 'uid',
                equalTo: this.auth.uid,
                limitToLast: 20
            }
        });
    }
}