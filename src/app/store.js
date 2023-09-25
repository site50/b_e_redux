import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { queryApi } from './services/queryApi';


export const store = configureStore({
  reducer: {
    [queryApi.reducerPath]: queryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(queryApi.middleware),
});

setupListeners(store.dispatch);
