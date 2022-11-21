const interest : number = 0.04;
const deposit : number = parseInt(process.argv[2], 10);
const duration : number = parseInt(process.argv[3], 10);
let benefit : number = 0;

for (let i = 0; i < duration; i += 1) {
  benefit += (deposit + benefit) * interest;
}
if (duration > 1) {
  console.log(`You will earn ${benefit.toFixed(2)} rupees after ${duration} days.`);
} else {
  console.log(`You will earn ${benefit.toFixed(2)} rupees after ${duration} day.`);
}
