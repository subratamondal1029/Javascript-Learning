//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;
const string = "hello world";
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

// console.log(id === anotherId);

const bigNumber = 3456543576654356754n;

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
  name: "hitesh",
  age: 22,
};

const myFunction = function () {
  console.log("Hello world");
};

myFunction();

console.log("number == " + typeof score);
console.log("decimal number == " + typeof scoreValue);
console.log("String == " + typeof string);
console.log("boolean == " + typeof isLoggedIn);
console.log("null == " + typeof outsideTemp);
console.log("undefined == " + typeof userEmail);
console.log("symbol == " + typeof id, typeof anotherId);
console.log("bigint == " + typeof bigNumber);
console.log("array == " + typeof heros);
console.log("object == " + typeof myObj);
console.log("function == " + typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3
