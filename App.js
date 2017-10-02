import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer';
import Nav from './Navigation';

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <Nav />
  </Provider>
);

export default App;
