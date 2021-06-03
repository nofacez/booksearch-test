import { configureStore } from '@reduxjs/toolkit';
import booksReducer from '../slices/booksSlice.js';

export default () => configureStore({
  reducer: {
    booksList: booksReducer,
  },
});
