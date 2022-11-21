"use strict";
exports.__esModule = true;
function printArray(array) {
    console.log('List of destinations:');
    for (var i = 0; i < array.length; i += 1) {
        console.log("".concat(i + 1, " - ").concat(array[i]));
    }
}
exports["default"] = printArray;
printArray(['Swamp', 'Mountain', 'Ocean', 'Canyon']);
printArray(['One', 'Two', 'Three']);
