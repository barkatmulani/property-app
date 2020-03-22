import ACTION from './results.const';

export const setResults = list => ({
    type: ACTION.SET_RESULTS,
    payload: list
});