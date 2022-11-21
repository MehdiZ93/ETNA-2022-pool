"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
function displayRecipe(path) {
    var file = (0, fs_1.readFileSync)(path, 'utf-8');
    var recipe = JSON.parse(file);
    console.log("=== ".concat(recipe.name, " ==="));
    for (var i = 0; i < recipe.ingredients.length; i += 1) {
        console.log("- ".concat(recipe.ingredients[i]));
    }
}
displayRecipe('./recipe.json');
