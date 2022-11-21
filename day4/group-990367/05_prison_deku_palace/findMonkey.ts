export default function findMonkey(prison: any) {
  for (let i = 0; i < prison.length; i += 1) {
    for (let j = 0; j < prison[i].prisoners.length; j += 1) {
      if (prison[i].prisoners[j].species === 'Monkey') {
        if (prison[i].is_guarded) {
          console.log(`The monkey is in the cell number ${prison[i].number}. The cell is guarded.`);
        } else {
          console.log(`The monkey is in the cell number ${prison[i].number}. The cell is not guarded.`);
        }
        return;
      }
    }
  }
  console.log('The monkey isn\'t here.');
}
