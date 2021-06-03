import { createSlice } from '@reduxjs/toolkit';

export const booksSlice = createSlice({
  name: 'booksList',
  initialState: {
    books: [],
    loading: false,
  },
  reducers: {
    getBooks: (state, action) => {
      const { payload } = action;
      return { ...state, books: [...payload] };
    },
    setLoading: (state, action) => {
      const { payload } = action;
      return { ...state, loading: payload };
    },
  },
});

export const { getBooks, setLoading } = booksSlice.actions;

export default booksSlice.reducer;
