"use strict";
exports.__esModule = true;
function winRPS(enemyMoves) {
    var winMovesMap = new Map();
    var playedMoves = [];
    winMovesMap.set('rock', 'paper');
    winMovesMap.set('paper', 'scissors');
    winMovesMap.set('scissors', 'rock');
    for (var i = 0; i < enemyMoves.length; i += 1) {
        playedMoves.push(winMovesMap.get(enemyMoves[i]));
    }
    return playedMoves;
}
exports["default"] = winRPS;
var enemyMoves = [
    'rock', 'paper', 'scissors',
];
console.log(winRPS(enemyMoves));
