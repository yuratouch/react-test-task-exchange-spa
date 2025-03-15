import { createSlice } from '@reduxjs/toolkit';
import { fetchCurrency } from './operations';

const rootSlice = createSlice({
  name: 'root',
  initialState: {
    baseCurrency: '',
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCurrency.fulfilled, (state, action) => {
        console.log('fetchCurrency.fulfilled');
        state.baseCurrency = action.payload;
      })
      .addCase(fetchCurrency.rejected, state => {
        state.baseCurrency = 'USD';
      });
  },
});

export default rootSlice.reducer;
