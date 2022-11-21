export default function printEnemies(array : string[]) {
  const enemiesArray = ['evil', 'cruel', 'bad', 'mean', 'rotten'];

  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < enemiesArray.length; j += 1) {
      if (array[i].toLowerCase().includes(enemiesArray[j])) {
        console.log(array[i].toLowerCase().replace(' ', '_'));
      }
    }
  }
}
