import ACTION from './savedProperties.const';

export const setSavedProperties = list => ({
    type: ACTION.SET_SAVED_PROPERTIES,
    payload: list
});

export const addSavedProperty = property => ({
    type: ACTION.ADD_SAVED_PROPERTY,
    payload: property
});

export const removeSavedProperty = property => ({
    type: ACTION.REMOVE_SAVED_PROPERTY,
    payload: property
});