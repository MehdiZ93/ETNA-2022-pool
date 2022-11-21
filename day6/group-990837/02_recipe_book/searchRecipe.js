"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
function searchRecipe(name, path) {
    var file = (0, fs_1.readFileSync)(path, 'utf-8');
    var recipes = JSON.parse(file);
    for (var i = 0; i < recipes.length; i += 1) {
        if (recipes[i].name === name) {
            console.log("=== ".concat(recipes[i].name, " ==="));
            for (var j = 0; j < recipes[i].ingredients.length; j += 1) {
                console.log("- ".concat(recipes[i].ingredients[j]));
            }
            return;
        }
    }
    console.log('No match.');
}
searchRecipe('Salmon Risotto', './recipes.json');
exports["default"] = searchRecipe;
