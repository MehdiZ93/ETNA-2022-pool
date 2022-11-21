var speed = 1;
var dist = parseInt(process.argv[2]);
var time;
time = Math.floor(dist / speed / 3600);
for (; time >= 0; time -= 1) {
    console.log(time);
}
