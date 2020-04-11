import types from './savedProperties.const';
import savedProperties from './savedProperties.reducer';

describe('Saved Properties Reducer', () => {
    it('Should return default state', () => {
        const newState = savedProperties(undefined, {});
        expect(newState).toEqual([]);
    });

    it('Should return new state if receiving type', () => {
        const list = [{}, {}, {}];
        const newState = savedProperties(undefined, {
            type: types.SET_SAVED_PROPERTIES,
            payload: list
        });
        expect(newState).toEqual(list);
    });
    
    it('Should return new state upon adding new property', () => {
        const property = {};
        const newState = savedProperties(undefined, {
            type: types.ADD_SAVED_PROPERTY,
            payload: property
        });
        expect(newState).toEqual([property]);
    });

    it('Should return new state upon removing a property', () => {
        const preState = [{ price: '111', price: '222' }];
        const propertyToRemove = { price: '111' };
        const newState = savedProperties(preState, {
            type: types.REMOVE_SAVED_PROPERTY,
            payload: propertyToRemove
        });
        const expState = [{ price: '222' }];
        expect(newState).toEqual(expState);
    });
});