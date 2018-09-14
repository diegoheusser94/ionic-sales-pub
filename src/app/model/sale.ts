import { Item } from './item';
import { Payment } from './payment';

export class Sale {

    private _date: Date;
    private _items: Array<Item>;
    private _payment: Payment;

    get date(): Date {
        return this._date;
    }

    get items(): Array<Item> {
        return this._items;
    }

    get payment(): Payment {
        return this._payment;
    }
}
