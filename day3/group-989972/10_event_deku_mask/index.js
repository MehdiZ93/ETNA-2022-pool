var jumpPower = parseInt(process.argv[3], 10);
var firePower = parseInt(process.argv[5], 10);
var displayTab = new Array(jumpPower);
for (var i = 0; i <= jumpPower || i <= firePower; i += 1) {
    console.log("=== #".concat(i + 1, " ==="));
    // Draw jump
    if (i < jumpPower) {
        for (var j = 0; j < i; j += 1) {
            displayTab[j] = '     ';
        }
        displayTab[i] = ' __';
        if (i === 0 || i === jumpPower) {
            displayTab[i + 1] = '/ o\\/ ';
        }
        else {
            displayTab[i + 1] = '/ ~\\/ ';
        }
        displayTab[i + 2] = '\\__/\\ ';
    }
    for (var l = i + 3; l < displayTab.length; l += 1) {
        displayTab[l] = '';
    }
    // End of jump
    // Draw shoot
    for (var m = 0; m < i && m < firePower; m += 1) {
        displayTab[0] += ' ';
        displayTab[1] += ' ';
        displayTab[2] += ' ';
    }
    if (i < firePower) {
        displayTab[0] += ' _   ';
        displayTab[1] += '/ \\ ';
        displayTab[2] += '\\_/ ';
    }
    else if (i === firePower) {
        displayTab[0] += 'pop!';
    }
    // End of shoot
    for (var k = 0; k < displayTab.length; k += 1) {
        console.log(displayTab[k]);
    }
}
