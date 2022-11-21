const fullName : string = process.argv[2];
const firstLetters = fullName.split(' ');
console.log(`${firstLetters[0][0].toUpperCase()}.${firstLetters[firstLetters.length - 1][0].toUpperCase()}`);
