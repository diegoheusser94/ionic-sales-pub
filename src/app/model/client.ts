import { Payment } from './payment';

export class Client {

    private _id: number;
    private _name: string;
    private _payments: Array<Payment>;

    constructor() {
        this._name = '';
        this._payments = [];
    }

    get id(): number {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get payments(): Array<Payment> {
        return this._payments;
    }
}
