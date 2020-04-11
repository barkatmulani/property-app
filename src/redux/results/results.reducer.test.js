import types from './results.const';
import results from './results.reducer';

describe('Results Reducer', () => {
    it('Should return default state', () => {
        const newState = results(undefined, {});
        expect(newState).toEqual([]);
    });

    it('Should return new state if receiving type', () => {
        const list = [{}, {}, {}];
        const newState = results({undefined}, {
            type: types.SET_RESULTS,
            payload: list
        });
        expect(newState).toEqual(list);
    });
});