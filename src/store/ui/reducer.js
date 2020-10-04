import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
};

export const startLoading = createAction('START_LOADING');
export const stopLoading = createAction('STOP_LOADING');

export const uiReducer = createReducer(initialState, {
  [startLoading]: (state, action) => {
    state.isLoading = true;
  },
  [stopLoading]: (state, action) => {
    state.isLoading = false;
  },
});
