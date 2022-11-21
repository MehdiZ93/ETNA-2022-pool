"use strict";
exports.__esModule = true;
var axios = require('axios');
function getSecretIngredients(path) {
    var data = [];
    axios.get(path).then(function (resp) {
        for (var i = 0; i < resp.data.length; i += 1) {
            console.log("- ".concat(resp.data[i].name));
        }
    });
}
getSecretIngredients('https://pastebin.com/raw/tHgDw2YB');
exports["default"] = getSecretIngredients;
