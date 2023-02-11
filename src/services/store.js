import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../features/auth/authSlice'
import loginmodalSlice from '../features/SignUpModal/loginmodalSlice';
import usersSlice from '../features/users/usersSlice';
import eventSlice from '../features/events/eventSlice';


const store = configureStore({
  reducer: {
    events: eventSlice,
    auth: authReducer,
    users: usersSlice,
    loginmodal: loginmodalSlice,
  },
});

export default store;
