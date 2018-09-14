import { Client } from './client';

describe('model/Client', () => {
    it('id should be undefined', () => {
        const client = new Client();
        expect(client.id).toBeUndefined();
    });
});
