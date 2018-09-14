import { Payment } from './payment';

export class Client {

    private _id: number;
    private _name: string;
    private _payments: Array<Payment>;

    get id(): number {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get payments(): Array<Payment> {
        return this._payments;
    }

    set payments(payments: Array<Payment>) {
        this._payments = payments;
    }
}
