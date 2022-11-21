var dayjs = require('dayjs');
var relativeTime = require('dayjs/plugin/relativeTime');
function getShipArrivalTime() { dayjs.extend(relativeTime); var remainingTime = dayjs().to(dayjs('2022-10-01')); console.log(remainingTime); }
getShipArrivalTime();
