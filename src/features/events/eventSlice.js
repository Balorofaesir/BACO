import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {getEvents, getEspecificEvent } from './eventAPI';

const initialState = {
  events: [],
  status: 'idle',
  error: null,
};

export const setEvents = createAsyncThunk('events/getEvents', async () => {
  const response = await getEvents();
  return response;
});

export const getEvent = createAsyncThunk(
  'events/getEvent',
  async (id) => {
    const response = await getEspecificEvent(id);
    return response;
  }
);
const eventSlice = createSlice({
  name: 'events',
  initialState,
  extraReducers: (builder) => {
    builder

      .addCase(setEvents.pending, (state) => {
        const newState = { ...state };
        newState.status = 'loading';
        return newState;
      })
      .addCase(setEvents.fulfilled, (state, action) => {
        const newState = { ...state };
        newState.status = 'succeeded';
        newState.events = action.payload;
        return newState;
      })
      .addCase(setEvents.rejected, (state, action) => {
        const newState = { ...state };
        newState.status = 'failed';
        newState.error = action.payload;
      })
      .addCase(getEvent.pending, (state) => {
        const newState = { ...state };
        newState.loading = true;
        return newState;
      })
      .addCase(getEvent.fulfilled, (state, action) => {
        const newState = { ...state };
        newState.loading = false;
        newState.event = action.payload;
        return newState;
      })
      .addCase(getEvent.rejected, (state, action) => {
        const newState = { ...state };
        newState.loading = false;
        newState.error = action.payload;
      });
  },
});

export const selectEvent = (state) => state.events.events;

export const setData = () => {};
export default eventSlice.reducer;
