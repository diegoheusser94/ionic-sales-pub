import { Product } from './product';

export class Category {

    private _id: number;
    private _name: string;
    private _products: Array<Product>;

    get id(): number {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get products(): Array<Product> {
        return this._products;
    }

}
