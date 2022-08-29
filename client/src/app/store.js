import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import tickersReducer from '../features/tickers/tickersReducer';

export const store = configureStore({
  reducer: {
    tickers: tickersReducer,
  },
});

setupListeners(store.dispatch);
