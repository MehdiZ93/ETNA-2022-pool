var interest = 0.04;
var deposit = parseInt(process.argv[2], 10);
var duration = parseInt(process.argv[3], 10);
var benefit = 0;
for (var i = 0; i < duration; i += 1) {
    benefit += (deposit + benefit) * interest;
}
if (duration > 1) {
    console.log("You will earn ".concat(benefit.toFixed(2), " rupees after ").concat(duration, " days."));
}
else {
    console.log("You will earn ".concat(benefit.toFixed(2), " rupees after ").concat(duration, " day."));
}
