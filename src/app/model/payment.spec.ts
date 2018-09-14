import { Payment } from './payment';
import { Client } from './client';
import { Sale } from './sale';

describe('model/Payment', () => {
    it('id should be undefined', () => {
        const payment = new Payment();
        expect(payment.id).toBeUndefined();
    });
    it('id should be equal to 1', () => {
        const payment = new Payment();
        payment.id = 1;
        expect(payment.id).toEqual(1);
    });
    it('toReceive should be undefined', () => {
        const payment = new Payment();
        expect(payment.toReceive).toBeUndefined();
    });
    it('toReceive should be equal to 1', () => {
        const payment = new Payment();
        payment.toReceive = 1;
        expect(payment.toReceive).toEqual(1);
    });
    it('received should be undefined', () => {
        const payment = new Payment();
        expect(payment.received).toBeUndefined();
    });
    it('received should be equal to 1', () => {
        const payment = new Payment();
        payment.received = 1;
        expect(payment.received).toEqual(1);
    });
    it('client should be undefined', () => {
        const payment = new Payment();
        expect(payment.client).toBeUndefined();
    });
    it('client should be equal to empty Client', () => {
        const payment = new Payment();
        payment.client = new Client();
        expect(payment.client).toEqual(new Client());
    });
    it('sale should be undefined', () => {
        const payment = new Payment();
        expect(payment.sale).toBeUndefined();
    });
    it('sale should be equal to empty Sale', () => {
        const payment = new Payment();
        payment.sale = new Sale();
        expect(payment.sale).toEqual(new Sale());
    });
});
