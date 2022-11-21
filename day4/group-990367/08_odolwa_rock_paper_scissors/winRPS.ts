export default function winRPS(enemyMoves: any[]) {
  const winMovesMap = new Map();
  const playedMoves = [];

  winMovesMap.set('rock', 'paper');
  winMovesMap.set('paper', 'scissors');
  winMovesMap.set('scissors', 'rock');
  for (let i = 0; i < enemyMoves.length; i += 1) {
    for (let j = 0; j < enemyMoves[i].count; j += 1) {
      playedMoves.push(winMovesMap.get(enemyMoves[i].move));
    }
  }
  return playedMoves;
}
