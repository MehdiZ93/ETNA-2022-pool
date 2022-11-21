"use strict";
exports.__esModule = true;
function getSecretRegex() {
    var reg = /[a-zA-Z]{8,}[s]/m;
    return reg;
}
function getSecretWord(regex, text) {
    var res = text.match(regex);
    return res[0];
}
console.log(getSecretWord(getSecretRegex(), 'Zelda Ganondorf Aghanim Goddesses Eyra Blight Vah\'Medoh Medolie'));
exports["default"] = { getSecretRegex: getSecretRegex, getSecretWord: getSecretWord };
