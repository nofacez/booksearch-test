/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';
import BookSnippet from './BookSnippet.jsx';

const Books = () => {
  const Spinner = () => (
    <span className="sr-only">Loading...</span>
  );
  const { books, loading } = useSelector((state) => state.booksList);

  if (loading) {
    return <Spinner />;
  }

  console.log('books', books);

  return (
    <div className="container">
      <div className="books-list">
        { books.map(({ coverId, title, author }) => <BookSnippet coverId={coverId} title={title} author={author} />)}
      </div>
    </div>
  );
};

export default Books;
