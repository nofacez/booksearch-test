import React from 'react';
import { uniqueId } from 'lodash';

import routes from '../routes.js';

const BookSnippet = ({ coverId, title, author }) => {
  const coverSnippetUrl = routes.smallCoverRoute(coverId);
  return (
    <div className="book-snippet mb-30" key={uniqueId()}>
      <img src={coverSnippetUrl} alt="book cover" className="snippet-cover" />
      <h2 className="snippet-title">{title}</h2>
      <h3 className="snippet-author">{author}</h3>
    </div>
  );
};

export default BookSnippet;
