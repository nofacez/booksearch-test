import React from 'react';
import { Provider } from 'react-redux';
import getStore from '../app/store.js';
import Main from './Main.jsx';
import Header from './Header.jsx';
import BookModal from './BookModal.jsx';
import Footer from './Footer.jsx';

const App = () => {
  const store = getStore();
  return (
    <div className="app">
      <Provider store={store}>
        <Header />
        <Main />
        <Footer />
        <BookModal />
      </Provider>
    </div>

  );
};

export default App;
