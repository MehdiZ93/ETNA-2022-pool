"use strict";
exports.__esModule = true;
function searchSong(sheetbook, song) {
    var findSongs = [];
    for (var i = 0; i < sheetbook.length; i += 1) {
        if (sheetbook[i].sheet.toLowerCase().startsWith(song.toLowerCase())) {
            findSongs.push(sheetbook[i]);
        }
    }
    return findSongs;
}
exports["default"] = searchSong;
var sheetbook = [
    {
        name: 'Song of Time',
        sheet: 'RADRAD'
    },
    {
        name: 'Song of Double Time',
        sheet: 'RRAADD'
    },
    {
        name: 'Inverted Song of Time',
        sheet: 'dardar'
    },
    {
        name: 'Song of Soaring',
        sheet: 'DLUDLU'
    },
    {
        name: 'Sonata of Awakening',
        sheet: 'ULULARA'
    },
];
var song = 'D';
console.log(searchSong(sheetbook, song));
