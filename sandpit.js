#!/usr/bin/env node

const now = new Date();

let year;
if(typeof(window) == 'undefined') {
  year = parseInt(process.argv[2]);
  if(!year) {
    year = now.getFullYear();
  }
}

if(typeof(year) == 'undefined') {
  year = now.getFullYear();
}

const christmasDay = new Date(year, 11, 25);
const christmasDayDay = christmasDay.getDay();

let advent = new Date(christmasDay);
if(0 == christmasDayDay) { // Sunday
  console.log('sunday');
  advent.setDate(-3); // November 27th
} else {
  console.log('not sunday');
  advent.setDate(4 - christmasDayDay);
}

console.log(christmasDay.toString());
console.log(advent.toString())

const timeToGo = ((advent - now) / 1000) / 86400;
const daysToGo = parseInt(timeToGo);
let remainder = (timeToGo - daysToGo) * 24;
const hoursToGo = parseInt(remainder);
remainder = (remainder - hoursToGo) * 60;
const minutesToGo = parseInt(remainder);
remainder = (remainder - minutesToGo) * 60;
const secondsToGo = parseInt(remainder);

console.log(daysToGo, hoursToGo, minutesToGo, secondsToGo);
