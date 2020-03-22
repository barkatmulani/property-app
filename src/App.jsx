import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'redux';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/main';

class App {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

export default App;
