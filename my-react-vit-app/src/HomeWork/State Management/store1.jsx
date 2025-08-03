import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';

const store1 = configureStore({
  reducer: {
    users: userReducer,
  },
});

export default store1;
