"use strict";
exports.__esModule = true;
function printEnemies(array) {
    var enemiesArray = ['evil', 'cruel', 'bad', 'mean', 'rotten'];
    for (var i = 0; i < array.length; i += 1) {
        for (var j = 0; j < enemiesArray.length; j += 1) {
            if (array[i].toLowerCase().includes(enemiesArray[j])) {
                console.log(array[i].toLowerCase().replace(' ', '_'));
            }
        }
    }
}
exports["default"] = printEnemies;
printEnemies(['EVIL Seed', 'Nice Bat', 'BAD BAT', 'Rotten Tree', 'fairy_tree']);
printEnemies(['Cruel Deku', 'Regular Deku', 'evil rat', 'ROTTEN BARK']);
