/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';
import { BounceLoader } from 'react-spinners';
import BookSnippet from './BookSnippet.jsx';

const Books = () => {
  const Spinner = () => (
    <div className="spinner-container">
      <div className="spinner">
        <span className="sr-only">Loading...</span>
        <BounceLoader size={50} />
      </div>
      <p className="spinner-text">Browsing the shelves...</p>
    </div>
  );
  const { books, loading } = useSelector((state) => state.booksList);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="section">
      <ul className="books-list">
        { books.map(({
          coverId, title, author, key,
        }) => (<BookSnippet coverId={coverId} title={title} author={author} id={key} />))}
      </ul>
    </div>
  );
};

export default Books;
