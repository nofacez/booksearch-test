import { createSlice } from '@reduxjs/toolkit';

export const booksSlice = createSlice({
  name: 'booksList',
  initialState: {
    books: [],
    loading: false,
    arrayisEmpty: false,
  },
  reducers: {
    getBooks: (state, action) => {
      const { payload } = action;
      return { ...state, books: [...payload], arrayisEmpty: false };
    },
    setLoading: (state, action) => {
      const { payload } = action;
      return { ...state, loading: payload };
    },
    setEmpty: (state) => {
      const { arrayisEmpty } = state;
      return ({ ...state, arrayisEmpty: !arrayisEmpty });
    },
  },
});

export const { getBooks, setLoading, setEmpty } = booksSlice.actions;

export default booksSlice.reducer;
