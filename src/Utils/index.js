import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../redux/root-reducer';
import { middlewares } from '../redux/store';

export const testStore = (initialState) => {
    const createStoreWithMiddleWare = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddleWare(rootReducer, initialState);
}