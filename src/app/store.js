/* eslint-disable */
import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../feature/post/postSlice';
import usersReducer from '../feature/users/usersSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
});
