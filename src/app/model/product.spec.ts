import { Product } from './product';
import { Category } from './category';

describe('model/Product', () => {
    it('id should be undefined', () => {
        const product = new Product();
        expect(product.id).toBeUndefined();
    });
    it('id should be equal to 1', () => {
        const product = new Product();
        product.id = 1;
        expect(product.id).toEqual(1);
    });
    it('name should be undefined', () => {
        const product = new Product();
        expect(product.name).toBeUndefined();
    });
    it('name should be equal to empty string', () => {
        const product = new Product();
        product.name = '';
        expect(product.name).toEqual('');
    });
    it('price should be undefined', () => {
        const product = new Product();
        expect(product.price).toBeUndefined();
    });
    it('price should be equal to 1', () => {
        const product = new Product();
        product.price = 1;
        expect(product.price).toEqual(1);
    });
    it('category should be undefined', () => {
        const product = new Product();
        expect(product.category).toBeUndefined();
    });
    it('category should be equal to empty Category', () => {
        const product = new Product();
        product.category = new Category();
        expect(product.category).toEqual(new Category());
    });
    it('items should be undefined', () => {
        const product = new Product();
        expect(product.items).toBeUndefined();
    });
    it('items should be equal to empty array', () => {
        const product = new Product();
        product.items = [];
        expect(product.items).toEqual([]);
    });
});
