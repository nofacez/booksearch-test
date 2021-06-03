/* eslint-disable consistent-return */
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import routes from '../routes.js';

const SearchGroup = () => {
  const [title, setTitle] = useState('');
  const isFirstRender = useRef(true);

  const getBooksList = async (bookTitle) => {
    try {
      const response = await axios.get(routes.searchRoute(bookTitle));
      console.log(response);
      return response;
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      const timeoutSearch = setTimeout(() => {
        getBooksList(title);
      }, 1000);
      return () => clearTimeout(timeoutSearch);
    }
  }, [title]);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div className="search-group">
      <form className="d-flex">
        <input type="text" className="search-input" value={title} onChange={handleChange} required />
        <button type="submit" className="search-button">Send</button>
      </form>
    </div>
  );
};

export default SearchGroup;
