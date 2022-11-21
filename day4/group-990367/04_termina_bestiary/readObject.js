"use strict";
exports.__esModule = true;
exports.readObject = void 0;
function readObject(monster) {
    console.log("".concat(monster.name, " (").concat(monster.hp, "hp): ").concat(monster.description));
}
exports.readObject = readObject;
var monster = {
    name: "Deku Baba",
    hp: 10,
    description: "Don't tell me you don't know about the Deku Baba! Cut it down when it has extended its body and Deku Nuts or Sticks will come out."
};
readObject(monster);
