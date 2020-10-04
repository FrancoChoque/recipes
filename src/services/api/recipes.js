import axios from 'axios';

const SPOON_API_KEY = '7da0f490d3f643c6b7f4e287d9f4fa75';
const SPOON_API = 'https://api.spoonacular.com/recipes';

export const getRecipesService = () =>
  axios.get(`${SPOON_API}/random?number=3&apiKey=${SPOON_API_KEY}`);

export const getRecipeService = (id) =>
  axios.get(`${SPOON_API}/${id}/information?apiKey=${SPOON_API_KEY}`);
