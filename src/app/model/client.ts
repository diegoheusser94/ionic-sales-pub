import { Payment } from './payment';

export class Client {

    private _name: string;
    private _payments: Array<Payment>;

    get name(): string {
        return this._name;
    }

    get payments(): Array<Payment> {
        return this._payments;
    }
}
