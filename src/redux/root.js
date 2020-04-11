import React from 'react';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './root-reducer';
import ReduxThunk from 'redux-thunk';

const middlewares = [ReduxThunk];

const createStoreWithMiddleWare = applyMiddleware(...middlewares)(createStore);

export const createCustomStore = (initialState) => createStoreWithMiddleWare(rootReducer, initialState);

function Root({ children, initialState = {}}) {
  const store = createCustomStore(initialState);

  return (
      <Provider store={store}>
        {children}
      </Provider> 
    );
}
  
export default Root;