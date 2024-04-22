// normal function 
// function addOne(num){
//     console.log(num + 1);
// }

// addOne(5)

// store a function on a variable
// const addOne = function(num){
//     console.log(num + 1);
// }
// addOne(5)

//Arrow function "() =>"
// const addOne = (num) =>{
//     console.log(num + 1);
// }
// addOne(5)

// all definations work same 

//lets talk about hoisting on function

// normal() //if i call below function (normal) its also work perfectly 
function normal() {
console.log("this is a normal function");
}

// normal() //if i call above function after declaration its work perfectly


// stored() //if i call below function (stored) its not work we cant call any stored function before declaration
const stored = function(){
console.log("this is a stored function");
}

// stored() //if i call above function after declaration its work perfectly


//if i just want to return a value from function in one line we can use this
// const returnValue = (value) => value //we can also use "(value)"

// console.log(returnValue(5));

//if i want to return a object we have to use "()"
// const returnValue = (value) => ({username : {value}}) 
// console.log(returnValue("subrata"));

// console.log(returnValue("subrata"));

//FIXME: Note :- This is only use for return a one line value | with "()" this we dont need to write "return" keyword But we write "{}" after "function()" or "=>" we have to write return keyword