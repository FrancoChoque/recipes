import { getRecipeService, getRecipesService } from 'services/api/recipes';
import { startLoading, stopLoading } from 'store/ui/reducer';
import { recipes, recommended } from './reducer';

export const getRecentlyViewed = () => (dispatch) => {
  dispatch(startLoading());
  getRecipesService().then((res) => {
    dispatch(res.data);
    dispatch(stopLoading());
  });
};

export const getRecommended = () => (dispatch) => {
  dispatch(startLoading());
  getRecipesService().then((res) => {
    dispatch(res.data);
    dispatch(stopLoading());
  });
};

export const getNewest = () => (dispatch) => {
  dispatch(startLoading());
  getRecipesService().then((res) => {
    dispatch(res.data);
    dispatch(stopLoading());
  });
};

export const getRecipes = () => async (dispatch) => {
  dispatch(startLoading());
  try {
    const recipesRes = await getRecipesService();
    const recipePromiseRes = await Promise.all(
      recipesRes.data.recipes.map((each) => getRecipeService(each.id)),
    );
    const recipesFinal = recipePromiseRes.map((each) => each.data);
    dispatch(recipes(recipesFinal));
    dispatch(recommended(recipesFinal.slice(0, 2)));
    dispatch(stopLoading());
  } catch (error) {
    console.dir(error);
    dispatch(stopLoading());
  }
};
