import { Client } from './client';
import { Sale } from './sale';

export class Payment {

    private _toReceive: number;
    private _received: number;
    private _client: Client;
    private _sale: Sale;

    get toReceive(): number {
        return this._toReceive;
    }

    get received(): number {
        return this._received;
    }

    get client(): Client {
        return this._client;
    }

    get sale(): Sale {
        return this._sale;
    }
}
