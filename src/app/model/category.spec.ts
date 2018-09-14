import { Category } from './category';

describe('model/Category', () => {
    it('id should be undefined', () => {
        const category = new Category();
        expect(category.id).toBeUndefined();
    });
});
