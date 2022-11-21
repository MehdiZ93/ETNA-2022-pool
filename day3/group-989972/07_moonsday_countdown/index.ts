const speed : number = 1;
const dist : number = parseInt(process.argv[2], 10);
let time : number;

time = Math.floor(dist / speed / 3600);
for (;time >= 0; time -= 1) {
  console.log(time);
}
