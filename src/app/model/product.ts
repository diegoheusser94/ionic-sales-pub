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

    set id(id: number) {
        this._id = id;
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get price(): number {
        return this._price;
    }

    set price(price: number) {
        this._price = price;
    }

    get category(): Category {
        return this._category;
    }

    set category(category: Category) {
        this._category = category;
    }

    get items(): Array<Item> {
        return this._items;
    }

    set items(items: Array<Item>) {
        this._items = items;
    }
}
