import { Category } from './category';

describe('model/Category', () => {
    it('id should be undefined', () => {
        const category = new Category();
        expect(category.id).toBeUndefined();
    });
    it('id should be equal to 1', () => {
        const category = new Category();
        category.id = 1;
        expect(category.id).toEqual(1);
    });
    it('name should be undefined', () => {
        const category = new Category();
        expect(category.name).toBeUndefined();
    });
    it('name should be equal to empty string', () => {
        const category = new Category();
        category.name = '';
        expect(category.name).toEqual('');
    });
    it('products should be undefined', () => {
        const category = new Category();
        expect(category.products).toBeUndefined();
    });
    it('products should be empty array', () => {
        const category = new Category();
        category.products = [];
        expect(category.products).toEqual([]);
    });
});
