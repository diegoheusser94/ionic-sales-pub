import { Product } from './product';

describe('model/Product', () => {
    it('id should be undefined', () => {
        const product = new Product();
        expect(product.id).toBeUndefined();
    });
});
