import { configureStore } from '@reduxjs/toolkit';
import layoutReducer from './reducer/layout';
import weddingInfoReducer from './reducer/weddingInfo';

export const store = configureStore({
  reducer: {
    layout: layoutReducer,
    weddingInfo: weddingInfoReducer,
  },
});
