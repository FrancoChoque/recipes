import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/reducer';
import { uiReducer } from './ui/reducer';
import { recipesReducer } from './recipes/reducer';

const getStore = () =>
  configureStore({
    reducer: {
      authReducer,
      uiReducer,
      recipesReducer,
    },
  });

export default getStore;
