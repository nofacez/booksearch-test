/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';
import { uniqueId } from 'lodash';
import { BounceLoader } from 'react-spinners';
import { useTranslation } from 'react-i18next';
import BookSnippet from './BookSnippet.jsx';

const Books = () => {
  const { books, status } = useSelector((state) => state.booksList);
  const { t } = useTranslation();
  const Spinner = () => (
    <div className="spinner-container">
      <div className="spinner">
        <span className="sr-only">{ t('spinnerSr') }</span>
        <BounceLoader size={50} />
      </div>
      <p className="spinner-text mt-35">{ t('spinnerText') }</p>
    </div>
  );
  const NotFound = () => (
    <div className="not-found">
      <p className="mt-35">{ t('notFound1') }</p>
      <p>{ t('notFound2') }</p>
    </div>
  );
  const NetworkIssue = () => (
    <div className="network-issue">
      <p className="mt-35">{ t('networkIssue1') }</p>
      <p>{ t('networkIssue2') }</p>
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
    <div className="section books-section">
      <ul className="books-list">
        { books.map(({
          coverId, title, author, key,
        }) => (<BookSnippet coverId={coverId} title={title} author={author} id={key} key={uniqueId()} />))}
      </ul>
    </div>
  );
};

export default Books;
