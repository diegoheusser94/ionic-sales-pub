import { Sale } from './sale';
import { Payment } from './payment';

describe('model/Sale', () => {
    it('id should be undefined', () => {
        const sale = new Sale();
        expect(sale.id).toBeUndefined();
    });
    it('id should be equal to 1', () => {
        const sale = new Sale();
        sale.id = 1;
        expect(sale.id).toEqual(1);
    });
    it('date should be undefined', () => {
        const sale = new Sale();
        expect(sale.date).toBeUndefined();
    });
    it('date should be equal to Date', () => {
        const sale = new Sale();
        const date = new Date();
        sale.date = date;
        expect(sale.date).toEqual(date);
    });
    it('items should be undefined', () => {
        const sale = new Sale();
        expect(sale.items).toBeUndefined();
    });
    it('items should be equal to empty array', () => {
        const sale = new Sale();
        sale.items = [];
        expect(sale.items).toEqual([]);
    });
    it('payment should be undefined', () => {
        const sale = new Sale();
        expect(sale.payment).toBeUndefined();
    });
    it('payment should be equal to empty payment', () => {
        const sale = new Sale();
        sale.payment = new Payment();
        expect(sale.payment).toEqual(new Payment());
    });
});
