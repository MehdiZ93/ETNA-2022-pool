import { readFileSync } from 'fs';
import Recipe from './Recipe';

function displayRecipe(path: string) {
  const file = readFileSync(path, 'utf-8');
  const recipe: Recipe = JSON.parse(file);
  console.log(`==== ${recipe.name} ====`);
  for (let i = 0; i < recipe.ingredients.length; i += 1) {
    console.log(`- ${recipe.ingredients[i]}`);
  }
}

export default displayRecipe;
