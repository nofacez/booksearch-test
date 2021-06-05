import { configureStore } from '@reduxjs/toolkit';
import booksReducer from '../slices/booksSlice.js';
import modalReducer from '../slices/modalSlice.js';

export default () => configureStore({
  reducer: {
    booksList: booksReducer,
    booksInfo: modalReducer,
  },
});
