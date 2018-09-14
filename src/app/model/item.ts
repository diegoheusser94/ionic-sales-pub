import { Product } from './product';
import { Sale } from './sale';

export class Item {

    private _id: number;
    private _quantity: number;
    private _price: number;
    private _product: Product;
    private _sale: Sale;

    get id(): number {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    get quantity(): number {
        return this._quantity;
    }

    set quantity(quantity: number) {
        this._quantity = quantity;
    }

    get price(): number {
        return this._price;
    }

    set price(price: number) {
        this._price = price;
    }

    get product(): Product {
        return this._product;
    }

    set product(product: Product) {
        this._product = product;
    }

    get sale(): Sale {
        return this._sale;
    }

    set sale(sale: Sale) {
        this._sale = sale;
    }
}
