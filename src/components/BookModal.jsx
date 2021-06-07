import React from 'react';
import ReactModal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { find } from 'lodash';

import { closeModal } from '../slices/modalSlice.js';
import routes from '../routes.js';

const BookModal = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { books } = useSelector((state) => state.booksList);
  const { isOpened, bookId } = useSelector((state) => state.booksInfo);

  const handleClose = () => {
    dispatch(closeModal());
  };

  const currentBook = find(books, { key: bookId });
  const getfirstDate = () => (currentBook.date ? Math.min(...currentBook.date) : t('modal.noInfo'));
  const getPublisher = () => (currentBook.publisher ? `${currentBook.publisher[0]}...` : t('modal.noInfo'));
  const getAuthor = () => (currentBook.author ? currentBook.author.join(' ').trim() : t('modal.noInfo'));
  const getIsbn = () => (currentBook.isbn ? currentBook.isbn.slice(0, 4).join(', ') : t('modal.noInfo'));
  const getCover = () => (currentBook.coverId ? <img src={routes.mediumCoverRoute(currentBook.coverId)} alt="medium book cover" /> : <h1 className="no-cover-lg">?</h1>);
  return (
    isOpened && (
    <ReactModal
      isOpen={isOpened}
      onRequestClose={handleClose}
      className="book-modal"
      overlayClassName="overlay"
      ariaHideApp={false}
    >
      <button type="button" aria-label="close modal" onClick={handleClose} className="modal-close-top" />
      {getCover()}
      <h1 className="modal-book-title mb-10">{ currentBook.title }</h1>
      <h3 className="mb-10">{ getAuthor() }</h3>
      <p>
        { t('modal.published') }
        {getfirstDate()}
      </p>
      <p>
        { t('modal.publisher') }
        {getPublisher()}
      </p>
      <p className="mb-10">
        { t('modal.isbn') }
        {getIsbn()}
      </p>
      <button type="button" onClick={handleClose} className="modal-close">{ t('buttons.close') }</button>
    </ReactModal>
    )
  );
};

export default BookModal;
