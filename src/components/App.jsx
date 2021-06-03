import React from 'react';
import SearchGroup from './SearchGroup.jsx';
import Books from './Books.jsx';

const App = () => (
  <div className="app">
    <header className="header"> Header </header>
    <main className="main">
      <SearchGroup />
      <Books />
    </main>
  </div>
);

export default App;
