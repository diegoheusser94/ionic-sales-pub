import { Client } from './client';
import { Sale } from './sale';

export class Payment {

    private _id: number;
    private _toReceive: number;
    private _received: number;
    private _client: Client;
    private _sale: Sale;

    get id(): number {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    get toReceive(): number {
        return this._toReceive;
    }

    set toReceive(toReceive: number) {
        this._toReceive = toReceive;
    }

    get received(): number {
        return this._received;
    }

    set received(received: number) {
        this._received = received;
    }

    get client(): Client {
        return this._client;
    }

    set client(client: Client) {
        this._client = client;
    }

    get sale(): Sale {
        return this._sale;
    }

    set sale(sale: Sale) {
        this._sale = sale;
    }
}
