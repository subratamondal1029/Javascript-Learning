let myObj = {                       // object's key and values are always string
    name: "subrata",
    title: "mondal",
    "full name": "subrata Mondal",
    age:17,
    work: "web development"
}

console.log(myObj); // => { name: 'subrata', title: 'mondal', age: 17, work: 'web development' }

// access values with key 
// console.log("name is " + myObj.name) // => name is subrata
// console.log("title is " + myObj.title) // => title is mondal
// console.log("age is " + myObj.age) // => age is 17
// console.log("work is " + myObj.work) // => work is web development

// to access full name 
// console.log(myObj["full name"]); // we cant access this key with above code  because this is have a space  and "." mathod dont aprove space or string


//change the value
// myObj.name = "subrata1"
// myObj.title = "mondal1"
// myObj.age = 18
// myObj.work = "programer"

// console.log(myObj); // => { name: 'subrata1', title: 'mondal1', age: 18, work: 'programer' }

//we can also stop changing the values in object like this
// Object.freeze(myObj);
// myObj.name = "subrata2"
// console.log(myObj.name); // => subrata

// how to use a variable or symbol as a key in object
let mysymbol = Symbol("symbol")
let variable = "how are you"
let SymbObj = {
    [mysymbol] : "symbol Value",
    question : {variable}

}

// console.log(SymbObj); // => { [Symbol(symbol)]: 'symbol Value' }
// console.log(SymbObj["question"]); // => { variable: 'how are you' }

// we can also add a function in a object
// SymbObj.greting = function() {
//     console.log("hello world!");
// }

// console.log(SymbObj.greting()); // we have to use '()' to access the function


//+++++++++++++++++++++++++++++++++++++ part 3 ++++++++++++++++++++++++++++++++

//Object Object de-structuring
console.log(myObj.name);
//       ||(same)
const myName = myObj["full name"];
console.log(myName);
//       ||(same)
const { name: Objname } = myObj; // its use in react js
console.log(Objname);

// Lets talk about Json Object 
