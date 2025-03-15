import { getUserInfo } from '/src/service/opencagedataApi';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCurrency = createAsyncThunk(
  'currency/setBaseCurrency',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    console.log('state', state);
    const { baseCurrency } = state.currency;

    if (baseCurrency) {
      return baseCurrency;
    }

    const locationData = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        position => {
          const location = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
          resolve(location);
        },
        error => reject(error),
      );
    });

    console.log('locationData', locationData);

    const response = await getUserInfo(locationData);
    console.log('response', response);
    return response.results[0].annotations.currency.iso_code;
  },
);
