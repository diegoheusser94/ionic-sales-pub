import { Item } from './item';

describe('model/Item', () => {
    it('id should be undefined', () => {
        const item = new Item();
        expect(item.id).toBeUndefined();
    });
});
