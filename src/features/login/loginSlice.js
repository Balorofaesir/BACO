import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import sendLogin, { validateUser } from './loginAPI';

const initialState = {
  login: [],
  status: 'idle',
  error: null,
};

export const createLogin = createAsyncThunk(
  'login/createLogin',
  async (values) => {
    const response = await sendLogin(values);

    return response;
  }
);

export const activateUser = createAsyncThunk(
  'signup/validateUser',
  async (token) => {
    const response = await validateUser(token);

    return response;
  }
);

const loginSlice = createSlice({
  name: 'login',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(createLogin.pending, (state) => {
        const newState = { ...state };
        newState.status = 'loading';
        newState.error = false;
        return newState;
      })
      .addCase(createLogin.fulfilled, (state, action) => {
        const newState = { ...state };
        newState.status = 'succeeded';
        newState.login = action.payload;
        return newState;
      })
      .addCase(createLogin.rejected, (state, action) => {
        const newState = { ...state };
        newState.status = 'failed';
        newState.error = action.payload;
        return newState;
      })
      .addCase(activateUser.pending, (state) => {
        const newState = { ...state };
        newState.status = 'loading';
        return newState;
      })
      .addCase(activateUser.fulfilled, (state, action) => {
        const newState = { ...state };
        newState.status = 'succeeded';
        newState.login = action.payload;
        return newState;
      })
      .addCase(activateUser.rejected, (state, action) => {
        const newState = { ...state };
        newState.status = 'failed';
        newState.error = action.payload;
        return newState;
      });
  },
});

export const selectLogin = (state) => state.login.login;
export const selectToken = (state) => state.login.login.token;
export const selectStatus = (state) => state.login.status;

export default loginSlice.reducer;
