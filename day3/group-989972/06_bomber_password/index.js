var cries = new Map();
var howMuch = parseInt(process.argv[2]);
var animal = process.argv[3];
var password = '';
cries.set('dogs', 'bark');
cries.set('cows', 'moo');
cries.set('cats', 'meow');
for (var i = 0; i < howMuch; i += 1) {
    password += cries.get(animal);
    if (i + 1 < howMuch) {
        password += ' ';
    }
}
console.log("".concat(password, "!"));
