import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer';
import Navigation from './Navigation';

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
);

export default App;
