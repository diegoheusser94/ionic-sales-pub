import { Sale } from './sale';

describe('model/Sale', () => {
    it('id should be undefined', () => {
        const sale = new Sale();
        expect(sale.id).toBeUndefined();
    });
});
