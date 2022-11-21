"use strict";
exports.__esModule = true;
function winRPS(enemyMoves) {
    var winMovesMap = new Map();
    var playedMoves = [];
    winMovesMap.set('rock', 'paper');
    winMovesMap.set('paper', 'scissors');
    winMovesMap.set('scissors', 'rock');
    for (var i = 0; i < enemyMoves.length; i += 1) {
        for (var j = 0; j < enemyMoves[i].count; j += 1) {
            playedMoves.push(winMovesMap.get(enemyMoves[i].move));
        }
    }
    return playedMoves;
}
exports["default"] = winRPS;
var enemyMoves = [{
        move: 'paper',
        count: 2
    },
    {
        move: 'scissors',
        count: 1
    },
    {
        move: 'paper',
        count: 1
    },
    {
        move: 'rock',
        count: 2
    }];
console.log(winRPS(enemyMoves));
