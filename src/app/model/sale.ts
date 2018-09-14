import { Item } from './item';
import { Payment } from './payment';

export class Sale {

    private _id: number;
    private _date: Date;
    private _items: Array<Item>;
    private _payment: Payment;

    get id(): number {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    get date(): Date {
        return this._date;
    }

    set date(date: Date) {
        this._date = date;
    }

    get items(): Array<Item> {
        return this._items;
    }

    set items(items: Array<Item>) {
        this._items = items;
    }

    get payment(): Payment {
        return this._payment;
    }

    set payment(payment: Payment) {
        this._payment = payment;
    }
}
