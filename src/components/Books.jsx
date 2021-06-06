/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';
import { uniqueId } from 'lodash';
import { BounceLoader } from 'react-spinners';
import BookSnippet from './BookSnippet.jsx';

const Books = () => {
  const { books, status } = useSelector((state) => state.booksList);
  const Spinner = () => (
    <div className="spinner-container">
      <div className="spinner">
        <span className="sr-only">Loading...</span>
        <BounceLoader size={50} />
      </div>
      <p className="spinner-text mt-35">Browsing the shelves...</p>
    </div>
  );
  const NotFound = () => (
    <div className="not-found">
      <p className="mt-35">We couldn&apos;t find anything</p>
      <p>That&apos;s what happens if you don&apos;t return books to the library</p>
    </div>
  );
  const NetworkIssue = () => (
    <div className="network-issue">
      <p className="mt-35">Oops</p>
      <p>We couldn&apos;t reach the Web :(</p>
    </div>
  );

  if (status === 'loading') {
    return <Spinner />;
  }

  if (status === 'noData') {
    return <NotFound />;
  }

  if (status === 'networkIssue') {
    return <NetworkIssue />;
  }

  return (
    <div className="section">
      <ul className="books-list">
        { books.map(({
          coverId, title, author, key,
        }) => (<BookSnippet coverId={coverId} title={title} author={author} id={key} key={uniqueId()} />))}
      </ul>
    </div>
  );
};

export default Books;
