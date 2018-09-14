import { Product } from './product';
import { Sale } from './sale';

export class Item {

    private _quantity: number;
    private _price: number;
    private _product: Product;
    private _sale: Sale;

    get quantity(): number {
        return this._quantity;
    }

    get price(): number {
        return this._price;
    }

    get product(): Product {
        return this._product;
    }

    get sale(): Sale {
        return this._sale;
    }
}
