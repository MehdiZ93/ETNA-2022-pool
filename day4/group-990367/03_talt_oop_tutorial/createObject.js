"use strict";
exports.__esModule = true;
function createObject(name, description, hp) {
    return { name: name, description: description, hp: hp };
}
exports["default"] = createObject;
var enemy = createObject("Bad Bat", "It's a Bad Bat. If you don't do something before it swoops down on you...Well, just don't come running to me!", 20);
console.log("".concat(enemy.name, " : ").concat(enemy.hp, "hp"));
// Bad Bat: 20hp
console.log("".concat(enemy.name, " - ").concat(enemy.description));
// Bad Bat - It's a Bad Bat. If you don't do something before it swoops down on
