import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tickers: [],
};

export const tickersSlice = createSlice({
  name: 'tickers',
  initialState,
  reducers: {
    getQuotes(state,action) {
      return {
        ...state,
        tickers: [action.payload],
      };
    },
  },
});

export const { getQuotes } = tickersSlice.actions;

export default tickersSlice.reducer;
