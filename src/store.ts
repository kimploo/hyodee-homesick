import { configureStore } from '@reduxjs/toolkit';
import layoutReducer from './reducer/layout';

export const store = configureStore({
  reducer: {
    layout: layoutReducer,
  },
});
