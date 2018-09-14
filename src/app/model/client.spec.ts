import { Client } from './client';

describe('model/Client', () => {
    it('id should be undefined', () => {
        const client = new Client();
        expect(client.id).toBeUndefined();
    });
    it('id should be equal to 1', () => {
        const client = new Client();
        client.id = 1;
        expect(client.id).toEqual(1);
    });
    it('name should be undefined', () => {
        const client = new Client();
        expect(client.name).toBeUndefined();
    });
    it('name should be equal to empty string', () => {
        const client = new Client();
        client.name = '';
        expect(client.name).toEqual('');
    });
    it('payments should be undefined', () => {
        const client = new Client();
        expect(client.payments).toBeUndefined();
    });
    it('payments should be equal to empty array', () => {
        const client = new Client();
        client.payments = [];
        expect(client.payments).toEqual([]);
    });
});
