import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'bookInfo',
  initialState: {
    isOpened: false,
    bookId: null,
  },
  reducers: {
    openModal: (state, action) => ({ isOpened: true, bookId: action.payload.id }),
    closeModal: () => ({ isOpened: false, bookId: null }),
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
