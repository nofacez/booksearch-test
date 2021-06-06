import { createSlice } from '@reduxjs/toolkit';

export const booksSlice = createSlice({
  name: 'booksList',
  initialState: {
    books: [],
    status: null,
  },
  reducers: {
    getBooks: (state, action) => {
      const { payload } = action;
      return { ...state, books: [...payload] };
    },
    setStatus: (state, action) => {
      const { payload } = action;
      return { ...state, status: payload };
    },
  },
});

export const { getBooks, setStatus } = booksSlice.actions;

export default booksSlice.reducer;
