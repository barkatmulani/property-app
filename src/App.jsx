import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/main';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider> 
  );
}

export default App;
