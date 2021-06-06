/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';
import { uniqueId } from 'lodash';
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
  const NotFound = () => (
    <div className="not-found">
      <p>We couldn&apos;t find anything</p>
      <p>That&apos;s what happens if you don&apos;t return books to library</p>
    </div>
  );
  const { books, loading, arrayisEmpty } = useSelector((state) => state.booksList);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="section">
      { arrayisEmpty
        ? <NotFound />
        : (
          <ul className="books-list">
            { books.map(({
              coverId, title, author, key,
            }) => (<BookSnippet coverId={coverId} title={title} author={author} id={key} key={uniqueId()} />))}
          </ul>
        )}
    </div>
  );
};

export default Books;
