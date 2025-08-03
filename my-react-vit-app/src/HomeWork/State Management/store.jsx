import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import userReducer from './userSlice';
import taskReducer from './taskSlice';

const store = configureStore({
  reducer: {
    // counter: counterReducer,
    // users: userReducer,
        tasks: taskReducer,

  },
});

export default store;
