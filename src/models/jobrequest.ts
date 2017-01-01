import {House} from './house';

export class JobRequest {
    public id: string;
    public uid: string;
    constructor (
        public house: House,
        public date: Date,
        public hours: number,
        public timestamp: Date
    ) {
        
    }

    toJSON() {
        return {
            house: this.house.id,
            date: this.date.toJSON(),
            hours: this.hours,
            timestamp: this.timestamp.toJSON(),
            uid: this.uid
        };
    }
}