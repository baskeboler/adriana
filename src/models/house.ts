
export class House {
    public id: string;
    constructor (
        public address: string,
        public phoneNumber: string,
        public numberOfRooms: number,
        public numberOfBathrooms: number
    ) {
    }
}