//+++++++++++++++++++++++++++++++++Number+++++++++++++++++++++++++++++++++++++++

let score = 200;
const scoreValue = new Number(score);
console.log(scoreValue); 

// Mathods
// ​​
// toFixed: function toFixed()
// ​​
// toLocaleString: function toLocaleString()
// ​​
// toPrecision: function toPrecision()
// ​​
// toString: function toString()


//toString
console.log(score.toString()); // => convert to string

//toFixed
let newScore = 200.2224;
console.log(newScore.toFixed()); // => 200 //it will convert to string to get number use bellow code
console.log(newScore.toFixed(2)); // => 200.22 
console.log(Number(newScore.toFixed())); 

//toprecision
console.log(newScore.toPrecision(4)); // => 200.2 // it will take 4 number from the starting //it will convert to string to get number use bellow code
console.log(Number(newScore.toPrecision(4)));

//tolocalestring
let money = 228264632;
console.log(money.toLocaleString("en-In")); // => 22,82,64,632 
console.log(money.toLocaleString("en-Us")); // => 228,264,632  | this is default value

//parseInt
let Numstring = "24444"
console.log(parseInt(Numstring)); // => its converted to number (24444)

//+++++++++++++++++++++++++++++++++ Math +++++++++++++++++++++++++++++++++++++++

console.log("Math Start from here...");

//abs
console.log(Math.abs(-30)); // it will convert negative to positive

//round
console.log(Math.round(2.4)); //=>2 //it will convert to round value
console.log(Math.round(2.6)); //=>3 //it will convert to round value

//ceil => (ceil is work like round But it only take the top value)
console.log(Math.ceil(2.4)); // => 3 

//floor => (floor is work like round and ceil But it only take the lower value value)
console.log(Math.floor(2.4)); // => 2
console.log(Math.floor(2.9)); // => 2 its only take before "." value

//random
console.log(Math.random()); // => its only return value between 0 and 1;
console.log(Math.random() * 10); // => its only return value between 0 and 9;

// sometimes we need to get value between 1 to somthing to get that we add 1 (+1)
console.log(Math.random() +1);

// sometimes we need to take intizer value and to get that we can use round(), floor(), and ceil() But we mostly use floor() in this case;
console.log(Math.floor((Math.random() * 10) +1)); //this is best its only take value before "."
console.log(Math.ceil((Math.random() * 10) +1)); // with this that value will be take the highest value its give problem sometimes
console.log(Math.round((Math.random() * 10) +1)); // with this that value will be rounded

//sometimes we need to get value between two numbers
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min)); // => its only return value between 10 and 20;