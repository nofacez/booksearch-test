import React from 'react';
import ReactModal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';
import { find } from 'lodash';

import { closeModal } from '../slices/modalSlice.js';
import routes from '../routes.js';

const BookModal = () => {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.booksList);
  const { isOpened, bookId } = useSelector((state) => state.booksInfo);

  const handleClose = () => {
    dispatch(closeModal());
  };

  const currentBook = find(books, { key: bookId });
  const getfirstDate = () => Math.min(...currentBook.date);

  return (
    isOpened && (
    <ReactModal
      isOpen={isOpened}
      onRequestClose={handleClose}
      className="book-modal"
      ariaHideApp={false}
      style={
        {
          overlay: {
            position: 'fixed',
            display: 'flex',
            justifyContent: 'center',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
        }
      }
    >
      { currentBook.coverId ? <img src={routes.mediumCoverRoute(currentBook.coverId)} alt="medium book cover" /> : <h1 className="no-cover-lg">?</h1>}
      <h1 className="modal-book-title mb-10">{ currentBook.title }</h1>
      <h3 className="mb-10">{ currentBook.author.join(' ').trim() }</h3>
      <p>
        First published:
        {' '}
        {getfirstDate()}
      </p>
      <p>
        Publisher:
        {' '}
        {currentBook.publisher[0]}
        ...
      </p>
      <p className="mb-10">
        ISBN:
        {' '}
        {currentBook.isbn.slice(0, 4).join(', ')}
      </p>
      <button type="button" onClick={handleClose}>Close</button>
    </ReactModal>
    )
  );
};

export default BookModal;
