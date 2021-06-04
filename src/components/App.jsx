import React from 'react';
import { Provider } from 'react-redux';
import getStore from '../app/store.js';
import Main from './Main.jsx';
import Header from './Header.jsx';

const App = () => {
  const store = getStore();
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <Main />
      </div>
    </Provider>
  );
};

export default App;
