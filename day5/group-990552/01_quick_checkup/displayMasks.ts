const getMasks = require('./resource');

function displayMasks() {
  let display = '';

  for (let i = 0; i < getMasks().length; i += 1) {
    display += `${getMasks()[i]}`;
    if (i < getMasks().length - 1) {
      display += ', ';
    }
  }
  console.log(display);
}

export default displayMasks;
