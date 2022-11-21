import { readFileSync } from 'fs';

const axios = require('axios');

async function getGrandmaRecipes(recipeBookPath: string, grandmaIngredientsPath: string) {
  const file = readFileSync(recipeBookPath, 'utf-8');
  const recipes = JSON.parse(file);
  const result: string[] = [];
  return new Promise((resolve) => {
    axios.get(grandmaIngredientsPath).then((resp) => {
      for (let i = 0; i < recipes.length; i += 1) {
        for (let j = 0; j < resp.data.length; j += 1) {
          for (let k = 0; k < recipes[i].ingredients.length; k += 1) {
            if (recipes[i].ingredients[k] === resp.data[j].name) {
              result.push(recipes[i]);
            }
          }
        }
      }
      resolve(result);
    });
  });
}

export default getGrandmaRecipes;
