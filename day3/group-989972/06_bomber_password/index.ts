const cries : Map<string, string> = new Map();
const howMuch : number = parseInt(process.argv[2], 10);
const animal : string = process.argv[3];
let password : string = '';

cries.set('dogs', 'bark');
cries.set('cows', 'moo');
cries.set('cats', 'meow');
for (let i = 0; i < howMuch; i += 1) {
  password += cries.get(animal);
  if (i + 1 < howMuch) {
    password += ' ';
  }
}
console.log(`${password}!`);
