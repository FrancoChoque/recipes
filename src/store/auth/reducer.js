import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
  user: null,
};

export const login = createAction('LOGIN');
export const logout = createAction('LOGOUT');

export const authReducer = createReducer(initialState, {
  [login]: (state, action) => {
    state.user = action.payload;
  },
  [logout]: (state, action) => {
    state.user = null;
  },
});
