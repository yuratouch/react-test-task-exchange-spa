import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './rootSlice';

const currencyPersistConfig = {
  key: 'currency',
  storage,
};

const currencyPersistedReducer = persistReducer(
  currencyPersistConfig,
  rootReducer,
);

export const store = configureStore({
  reducer: {
    currency: currencyPersistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

export const persistor = persistStore(store);

// const store = configureStore({
//   reducer: rootReducer,
// });
// export default store;
