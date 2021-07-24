import { configureStore } from '@reduxjs/toolkit';
import layoutReducer from './reducer/layout';
import weddingInfoReducer from './reducer/weddingInfo';
import contactButtonReducer from './reducer/contactButton';

export const store = configureStore({
  reducer: {
    layout: layoutReducer,
    weddingInfo: weddingInfoReducer,
    contactButton: contactButtonReducer,
  },
});
