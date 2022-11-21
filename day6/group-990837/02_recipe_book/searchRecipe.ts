import { readFileSync } from 'fs';
import Recipe from './Recipe';

function searchRecipe(name: string, path: string) {
  const file = readFileSync(path, 'utf-8');
  const recipes: Recipe[] = JSON.parse(file);
  for (let i = 0; i < recipes.length; i += 1) {
    if (recipes[i].name === name) {
      console.log(`==== ${recipes[i].name} ====`);
      for (let j = 0; j < recipes[i].ingredients.length; j += 1) {
        console.log(`- ${recipes[i].ingredients[j]}`);
      }
      return;
    }
  }
  console.log('No match.');
}

export default searchRecipe;
