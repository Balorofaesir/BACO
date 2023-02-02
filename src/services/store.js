import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../features/auth/authSlice'
import loginmodalSlice from '../features/SignUpModal/loginmodalSlice';
import usersSlice from '../features/users/usersSlice';
import loginSlice from '../features/login/loginSlice'


const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersSlice,
    loginmodal: loginmodalSlice,
    login: loginSlice,
  },
});

export default store;
