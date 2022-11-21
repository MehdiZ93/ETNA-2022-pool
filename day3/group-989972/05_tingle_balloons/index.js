var fullName = process.argv[2];
var firstLetters = fullName.split(' ');
console.log("".concat(firstLetters[0][0].toUpperCase(), ".").concat(firstLetters[firstLetters.length - 1][0].toUpperCase()));
