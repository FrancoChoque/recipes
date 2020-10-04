import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
  recommended: [],
  recentlyViewed: [],
  newRecipes: [],
  recipes: [],
};

export const recommended = createAction('RECOMMENDED');
export const recentlyViewed = createAction('RECENTLY_VIEWED');
export const newRecipes = createAction('NEW_RECIPES');
export const recipes = createAction('RECIPES');
export const recipe = createAction('RECIPES');

export const recipesReducer = createReducer(initialState, {
  [recommended]: (state, action) => {
    state.recommended = action.payload;
  },
  [recentlyViewed]: (state, action) => {
    state.recentlyViewed = action.payload;
  },
  [newRecipes]: (state, action) => {
    state.newRecipes = action.payload;
  },
  [recipes]: (state, action) => {
    state.recipes = action.payload;
  },
  [recipe]: (state, action) => {
    state.recipes = action.payload;
  },
});
