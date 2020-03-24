import { createStore, applyMiddleware } from 'redux';
import rootReducer from './root-reducer';
import ReduxThunk from 'redux-thunk'

export const middlewares = [ReduxThunk];

export const createStoreWithMiddleWare = applyMiddleware(...middlewares)(createStore);

const store = createStoreWithMiddleWare(rootReducer);

export default store;