let myDate = new Date()

console.log(myDate);
//          ||(same)
console.log(myDate.toJSON());

console.log(myDate.toString()); //=> Wed Apr 17 2024 08:30:59 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); // => Wed Apr 17 2024
console.log(myDate.toLocaleString()); // => 17/4/2024, 8:30:59 am
console.log(myDate.toTimeString()); // => 08:33:13 GMT+0530 (India Standard Time)

//now lets get hours and minutes and seconds from date
let hours = myDate.getHours()
let minutes = myDate.getMinutes()
let seconds = myDate.getSeconds()
let milliseconds = myDate.getMilliseconds()
let today = myDate.getDay(); // it will give day in 0 to 6 | 0 is sunday
let month = myDate.getMonth() // it will give month in 0 to 11 | to get correct month add 1 (+1)
let year = myDate.getFullYear() // it will give year 
let time = myDate.getTime() // it will give the time from January 1, 1970 in milliseconds

console.log(`The hour is ${hours}, minutes is ${minutes}, seconds is ${seconds} milliseconds is ${milliseconds}`);
console.log(`tooday is ${today}`);
console.log(`month is ${month}`);
console.log(`year is ${year}`);
console.log(`time is ${time}`);