var size = parseInt(process.argv[2], 10);
var missingFairies = Math.ceil((348 - size) / 3);
if (missingFairies < 10) {
    console.log("The Great Fairy is missing ".concat(missingFairies, " Stray Fairies.\nIt's not too bad yet, it shouldn't take too much time to heal her."));
}
else if (missingFairies >= 10 && missingFairies < 40) {
    console.log("The Great Fairy is missing ".concat(missingFairies, " Stray Fairies.\nWhoever did this to her was clearly playing some mischievous prank!"));
}
else if (missingFairies >= 40 && missingFairies < 100) {
    console.log("The Great Fairy is missing ".concat(missingFairies, " Stray Fairies.\nShe has been greatly damaged. We must save her as soon as possible!"));
}
else {
    console.log("The Great Fairy is missing ".concat(missingFairies, " Stray Fairies.\nWhat happened to her!? It's just awful!"));
}
