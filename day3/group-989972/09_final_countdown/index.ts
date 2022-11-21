const message : string = process.argv[3];
const totalTime : number = parseInt(process.argv[2], 10);
let minutes : number = Math.floor(totalTime / 60);
let seconds : number = totalTime % 60;

for (; minutes > 0; minutes -= 1) {
  for (; seconds >= 0; seconds -= 1) {
    console.log(`${minutes}'${seconds}`);
  }
  seconds = 59;
}
for (; seconds > 0; seconds -= 1) {
  if (seconds > 10) {
    console.log(seconds);
  } else {
    console.log(`${seconds}...`);
  }
}
console.log(`${message.toUpperCase()}!`);
