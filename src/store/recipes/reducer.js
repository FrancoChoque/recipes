import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
  recentlyViewed: [],
  newRecipes: [],
  recipes: [],
};

export const favorites = createAction('FAVORITES');
export const recentlyViewed = createAction('RECENTLY_VIEWED');
export const newRecipes = createAction('NEW_RECIPES');
export const recipes = createAction('RECIPES');

export const recipesReducer = createReducer(initialState, {
  [favorites]: (state, action) => {
    state.favorites = action.payload;
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
});
