var songOfTime = 'RADRAD';
var userSong = process.argv[2];
if (userSong === undefined || songOfTime.length !== userSong.length) {
    console.log('That doesn\'t feel right.');
    process.exit();
}
for (var i = 0; i < userSong.length; i += 1) {
    if (songOfTime.includes(userSong[i].toUpperCase())) {
        songOfTime = songOfTime.replace(userSong[i].toUpperCase(), '');
    }
}
if (songOfTime.length === 0) {
    console.log('Playing the Song of Time...');
}
else {
    console.log('That doesn\'t feel right.');
}
