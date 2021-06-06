import React from 'react';
import { useDispatch } from 'react-redux';

import routes from '../routes.js';
import { openModal } from '../slices/modalSlice.js';

const BookSnippet = ({
  coverId, title, author, id,
}) => {
  const coverSnippetUrl = routes.smallCoverRoute(coverId);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(openModal({ id }));
  };

  return (
    <li className="book-snippet mb-30">
      <button type="button" onClick={handleClick}>
        { coverId ? <img src={coverSnippetUrl} alt="book cover" className="snippet-cover" /> : <h1 className="no-cover">?</h1>}
        <h2 className="snippet-title">{title}</h2>
        <h3 className="snippet-author">{author}</h3>
      </button>
    </li>
  );
};

export default BookSnippet;
