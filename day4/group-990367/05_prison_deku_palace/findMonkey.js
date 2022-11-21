"use strict";
exports.__esModule = true;
function findMonkey(prison) {
    for (var i = 0; i < prison.length; i += 1) {
        for (var j = 0; j < prison[i].prisoners.length; j += 1) {
            if (prison[i].prisoners[j].species === 'Monkey') {
                if (prison[i].is_guarded) {
                    console.log("The monkey is in the cell number ".concat(prison[i].number, ". The cell is guarded."));
                }
                else {
                    console.log("The monkey is in the cell number ".concat(prison[i].number, ". The cell is not guarded."));
                }
                return;
            }
        }
    }
    console.log('The monkey isn\'t here.');
}
exports["default"] = findMonkey;
var prison = [
    {
        number: 1,
        is_guarded: true,
        prisoners: [
            {
                species: 'Deku Baba',
                days_left: 20,
                crime: 'Attacking a merchant'
            },
            {
                species: 'Deku Baba',
                days_left: 20,
                crime: 'Attacking a merchant'
            },
        ]
    },
    {
        number: 2,
        is_guarded: false,
        prisoners: []
    },
    {
        number: 3,
        is_guarded: false,
        prisoners: [
            {
                species: 'monkey',
                days_left: 999999,
                crime: 'Kidnapping the princess'
            },
        ]
    },
];
findMonkey(prison);
