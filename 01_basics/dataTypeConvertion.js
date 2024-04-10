let score = 'true';

console.log(typeof score);

let scoreInNumber = Number(score);
console.log(scoreInNumber);
console.log(typeof scoreInNumber);


// Number Convertion 

// "33" => 33;
// "33abc" => NaN;
// true => 1;
// false => 0;
// null => 0; 



let isLogedIn = "subrata";

let booleanIsLog = Boolean(isLogedIn)
console.log(booleanIsLog);
console.log(typeof booleanIsLog);

//boolean conversions

//1 => true,
// 0 => false,
// "" => false,
// "subrata" => true,

let Numbers = 33;
let stringNumbers = String(Numbers);
console.log(stringNumbers);
console.log(typeof stringNumbers);

// String conversions 
// anything can convert to a string with => String();