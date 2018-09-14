import { Product } from './product';

export class Category {

    private _name: string;
    private _products: Array<Product>;

    get name(): string {
        return this._name;
    }

    get products(): Array<Product> {
        return this._products;
    }

}
