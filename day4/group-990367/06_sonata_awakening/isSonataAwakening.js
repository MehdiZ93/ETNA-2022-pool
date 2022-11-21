"use strict";
exports.__esModule = true;
function isSonataAwakening(sheet, sonata) {
    return (sheet.toLowerCase() === sonata.join('').toLowerCase());
}
exports["default"] = isSonataAwakening;
var sheet = 'AXAXLYL';
var sonata = ['A', 'X', 'A', 'X', 'r', 'Y', 'L'];
console.log(isSonataAwakening(sheet, sonata));
