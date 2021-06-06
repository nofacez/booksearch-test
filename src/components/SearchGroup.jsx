/* eslint-disable camelcase */
/* eslint-disable consistent-return */
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { getBooks, setStatus } from '../slices/booksSlice.js';
import routes from '../routes.js';
import '../images/search-group-bg.jpg';

const SearchGroup = () => {
  const [value, setValue] = useState('');
  const isFirstRender = useRef(true);
  const dispatch = useDispatch();
  const { CancelToken } = axios;
  const source = CancelToken.source();
  const { status } = useSelector((state) => state.booksList);

  const getBooksList = async (bookTitle) => {
    try {
      dispatch(setStatus('loading'));
      const response = await axios.get(routes.searchRoute(bookTitle),
        {
          cancelToken: source.token,
        });
      const bookslist = response.data.docs;
      if (bookslist.length === 0) {
        dispatch(setStatus('noData'));
      } else {
        const filteredBooksList = bookslist.map((book) => {
          const {
            title, cover_i, author_name, publish_year, publisher, isbn, key,
          } = book;
          return {
            title,
            coverId: cover_i,
            author: author_name,
            date: publish_year,
            publisher,
            isbn,
            key,
          };
        });
        dispatch(getBooks(filteredBooksList));
        dispatch(setStatus('normal'));
      }
    } catch (e) {
      console.error(e);
      dispatch(setStatus('networkIssue'));
    }
  };

  useEffect(() => {
    if (isFirstRender.current || value.length === 0) {
      isFirstRender.current = false;
    } else {
      const timeout = setTimeout(() => {
        getBooksList(value);
      }, 1000);
      return () => {
        source.cancel('The request has been cancelled');
        clearTimeout(timeout);
      };
    }
  }, [value]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getBooksList(value);
  };

  return (
    <div className="section">
      <div className="search-group">
        <form className="d-flex" onSubmit={handleSubmit}>
          <input type="text" className="search-input" value={value} onChange={handleChange} placeholder="Enter a book title..." required />
          <button type="submit" aria-label="search" className="search-button" disabled={status === 'loading'} />
        </form>
      </div>
    </div>
  );
};

export default SearchGroup;
