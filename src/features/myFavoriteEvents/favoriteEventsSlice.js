import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {createNewUsersFavoriteEvent, getFavsUserEvents } from './FavoriteEventAPI';

const initialState = {
  favsEventss: [],
  status: 'idle',
  error: null,
};

// create favsEvents method post
export const createFavoriteEvent = createAsyncThunk(
  'favsEvents/',
  async (values) => {
    const response = await createNewUsersFavoriteEvent(values);
    return response;
  }
);
export const setFavoriteEvents = createAsyncThunk('favsEventss/getFavoriteEvents', async () => {
  const response = await getFavsUserEvents();
  return response;
});


const favsEventsSlice = createSlice({
  name: 'FavoriteEvents',
  initialState,
  extraReducers: (builder) => {
    builder

      .addCase(setFavoriteEvents.pending, (state) => {
        const newState = { ...state };
        newState.status = 'loading';
        return newState;
      })
      .addCase(setFavoriteEvents.fulfilled, (state, action) => {
        const newState = { ...state };
        newState.status = 'succeeded';
        newState.favsEventss = action.payload;
        return newState;
      })
      .addCase(setFavoriteEvents.rejected, (state, action) => {
        const newState = { ...state };
        newState.status = 'failed';
        newState.error = action.payload;
      })
  },
});

export const selectFavoriteEvents = (state) => state.favs.favs;

export const setData = () => {};
export default favsEventsSlice.reducer;
