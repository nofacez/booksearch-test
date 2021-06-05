/* eslint-disable camelcase */
/* eslint-disable consistent-return */
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import { getBooks, setLoading } from '../slices/booksSlice.js';
import routes from '../routes.js';

const SearchGroup = () => {
  const [value, setValue] = useState('');
  const isFirstRender = useRef(true);
  const dispatch = useDispatch();
  const { CancelToken } = axios;
  const source = CancelToken.source();

  const getBooksList = async (bookTitle) => {
    try {
      const response = await axios.get(routes.searchRoute(bookTitle),
        {
          cancelToken: source.token,
          maxContentLength: 1000,
        });
      const bookslist = response.data.docs;
      const filtered = bookslist.map((book) => {
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
      console.log(filtered);
      dispatch(getBooks(filtered));
      dispatch(setLoading(false));
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (isFirstRender.current || value.length === 0) {
      isFirstRender.current = false;
    } else {
      const timeoutSearch = setTimeout(() => {
        dispatch(setLoading(true));
        getBooksList(value);
      }, 1000);
      return () => {
        source.cancel('The request has been cancelled');
        clearTimeout(timeoutSearch);
        dispatch(setLoading(false));
      };
    }
  }, [value]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="section">
      <div className="search-group">
        <form className="d-flex">
          <input type="text" className="search-input" value={value} onChange={handleChange} required placeholder="Enter a book title..." />
          <button type="submit" className="search-button">Send</button>
        </form>
      </div>
    </div>

  );
};

export default SearchGroup;
