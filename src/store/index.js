// store/index.js
import { configureStore } from '@reduxjs/toolkit';
import {persistStore} from 'redux-persist';
import { persistedReducer } from './reducer';

const store = configureStore({
  reducer: persistedReducer,
  // Add middleware or other configurations if needed
});

export const persistor = persistStore(store)

export default store;

