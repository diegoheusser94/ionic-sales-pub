import { Item } from './item';
import { Product } from './product';
import { Sale } from './sale';

describe('model/Item', () => {
    it('id should be undefined', () => {
        const item = new Item();
        expect(item.id).toBeUndefined();
    });
    it('id should be equal to 1', () => {
        const item = new Item();
        item.id = 1;
        expect(item.id).toEqual(1);
    });
    it('quantity should be undefined', () => {
        const item = new Item();
        expect(item.quantity).toBeUndefined();
    });
    it('quantity should be equal to 1', () => {
        const item = new Item();
        item.quantity = 1;
        expect(item.quantity).toEqual(1);
    });
    it('price should be undefined', () => {
        const item = new Item();
        expect(item.price).toBeUndefined();
    });
    it('price should be equal to 1', () => {
        const item = new Item();
        item.price = 1;
        expect(item.price).toEqual(1);
    });
    it('product should be undefined', () => {
        const item = new Item();
        expect(item.product).toBeUndefined();
    });
    it('product should be equal empy Product', () => {
        const item = new Item();
        item.product = new Product();
        expect(item.product).toEqual(new Product());
    });
    it('sale should be undefined', () => {
        const item = new Item();
        expect(item.sale).toBeUndefined();
    });
    it('sale should be equal to empty Sale', () => {
        const item = new Item();
        item.sale = new Sale();
        expect(item.sale).toEqual(new Sale());
    });
});
