import { Category } from './category';
import { Item } from './item';

export class Product {

    private _id: number;
    private _name: string;
    private _price: number;
    private _category: Category;
    private _items: Array<Item>;

    get id(): number {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get price(): number {
        return this._price;
    }

    get category(): Category {
        return this._category;
    }

    get items(): Array<Item> {
        return this._items;
    }
}
