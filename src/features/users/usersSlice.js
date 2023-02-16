import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import sendUser, {
  setUser,
  confirmUser,
  modifyUser,
} from './usersAPI';

const initialState = {
  User: [],
  loading: false,
  error: null,
};

export const createUser = createAsyncThunk(
  'User/createUser',
  async (values) => {
    const response = await sendUser(values);

    return response;
  }
);

export const getUser = createAsyncThunk(
  'User/getUser',
  async (id) => {
    const response = await setUser(id);

    return response;
  }
);
export const modUser = createAsyncThunk(
  'User/modUser',
  async (values) => {
   const { id, data } = values
    const response = await modifyUser(id, data)
    return response
  }

)

export const makeUser = createAsyncThunk(
  'User/setUser',
  async (values) => {
    const response = await confirmUser(values);

    return response;
  }
);

const UserSlice = createSlice({
  name: 'User',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(makeUser.pending, (state) => {
        const newState = { ...state };
        newState.loading = true;
        return newState;
      })
      .addCase(makeUser.fulfilled, (state, action) => {
        const newState = { ...state };
        newState.loading = false;
        newState.User = action.payload;
        return newState;
      })
      .addCase(makeUser.rejected, (state, action) => {
        const newState = { ...state };
        newState.loading = false;
        newState.error = action.payload;
      })
      .addCase(getUser.pending, (state) => {
        const newState = { ...state };
        newState.loading = true;
        return newState;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        const newState = { ...state };
        newState.loading = false;
        newState.User = action.payload;
        return newState;
      })
      .addCase(getUser.rejected, (state, action) => {
        const newState = { ...state };
        newState.loading = false;
        newState.error = action.payload;
      })
      .addCase(createUser.pending, (state) => {
        const newState = { ...state };
        newState.loading = true;
        return newState;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        const newState = { ...state };
        newState.loading = false;
        newState.User = action.payload;
        return newState;
      })
      .addCase(createUser.rejected, (state, action) => {
        const newState = { ...state };
        newState.loading = false;
        newState.error = action.payload;
      })
      .addCase(modUser.pending, (state) => {
        const newState = { ...state };
        newState.loading = true;
        return newState;
      })
      .addCase(modUser.fulfilled, (state, action) => {
        const newState = { ...state };
        newState.loading = false;
        newState.User = action.payload;
        return newState;
      })
      .addCase(modUser.rejected, (state, action) => {
        const newState = { ...state };
        newState.loading = false;
        newState.error = action.payload;
      });

  },
});

/* export const { makeUser } = UserSlice.actions; */

export const selectUser = (state) => state.User;

export default UserSlice.reducer;
