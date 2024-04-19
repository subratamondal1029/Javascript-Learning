// let myString = "Hello%20world";

// let mystring2 = myString.split("%20");

// mystring2.forEach((str, i) => {
//   console.log(str, i);
// });

let newStr = new String("hello world");
console.log(newStr.__proto__); // its only work in browser's console

newStr = "hello world";

let url = "http://localhost:8080/?subrata%20mondal";
// let [first, second] = url.split("?")[1].split("%20");
// let name = url.split("?")[1];

// console.log(name.replace("%20", " "));
// console.log(first, second);

// string Mathods

//toUpperCase
console.log(newStr.toUpperCase());

//toLowerCase
console.log(newStr.toLowerCase());

// trim
let newStr2 = "    hello world    ";

// without trim
console.log(newStr2);

// with trim
console.log(newStr2.trim());

//length
console.log(newStr.length);

// charAt
console.log(newStr.charAt(3)); // charAt(index) (index always start from 0)

//indexOf
console.log(newStr.indexOf("w"));

// lastindexOf
console.log(newStr.indexOf("l")); //this is the first index character
console.log(newStr.lastIndexOf("l")); //this is the index character

//inclues
console.log(newStr.includes("w"));

//replace
console.log(newStr.replace("world", "universe"));

// concat
console.log(newStr + newStr2); //its a old syntex and also its not a good idea if there have 10 or 20 string you have to use concat for better code.
let newStr3 = newStr.concat(newStr2);
console.log(newStr3);


//slice
console.log(newStr.slice(0, 6));  //slice dont take the last index character;
//lets use something new 
console.log(newStr.slice(0, newStr.indexOf(' '))) //same value as previous but with this you dont have to know the index Number

