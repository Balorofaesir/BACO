import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

const loginModalSlice = createSlice({
  name: 'loginModal',
  initialState,
  reducers: {
    openModal: (state) => {
      const newState = { ...state };
      newState.isOpen = true;
      return newState;
    },
    closeModal: (state) => {
      const newState = { ...state };
      newState.isOpen = false;
      return newState;
    },
  },
});

export const { openModal, closeModal } = loginModalSlice.actions;

export default loginModalSlice.reducer;
