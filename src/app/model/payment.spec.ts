import { Payment } from './payment';

describe('model/Payment', () => {
    it('id should be undefined', () => {
        const payment = new Payment();
        expect(payment.id).toBeUndefined();
    });
});
