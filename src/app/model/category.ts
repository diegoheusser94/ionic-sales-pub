import { Product } from './product';

export class Category {

    private _id: number;
    private _name: string;
    private _products: Array<Product>;

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

    get products(): Array<Product> {
        return this._products;
    }

    set products(products: Array<Product>) {
        this._products = products;
    }

}
