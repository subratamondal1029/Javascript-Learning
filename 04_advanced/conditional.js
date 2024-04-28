//If => this is use to check coditions of code | if always check true value

// if(true){
//     console.log("the Value is true");
// } //=> the Value is true


// if(false){
//     console.log("the Value is true");
// } //=> 

//short hand for if statement
// if (true) console.log("the Value Is true"); // thats only when we want to execute one line of code


// to check the value false
// if (true) {
//     console.log("The Value Is True");
// }else{
//     console.log("The Value Is False");
// } // => The Value Is True


// if (false) {
//     console.log("The Value Is True");
// }else{
//     console.log("The Value Is False");
// } // => The Value Is False


//multiple value check in if()

const isLogedIn = true
const isPaid = true
const isExpired = false

// if (isLogedIn && isPaid) {
//     console.log("you can read");
// }else{
//     console.log("you Cant read");
// } // => you can read


// if (isLogedIn && isPaid && isExpired) {
//     console.log("you can read");
// }else{
//     console.log("you Can't read");
// } // => you Can't read

// "&&" => and

let logedInWithGoogle = true
let logedInWithEmail = false

// if (isLogedIn && logedInWithEmail || logedInWithGoogle) {
//     console.log("user Loged In");
// }else{
//     console.log("User Can't Log in");
// } // => user Loged In

// "||" => or

//we can also use [<, >, ==, ===, >=, <=, !=]

const conditions = ["<", '>', '==', '===', ">=", '<=', '!=']
const definations = ["Less Then", "Greater Then", "equal '=' is for define value '==' use to check quality", "strict equal | it check the data type also", "Is the Value is greater then or equal", "is the value is less then or equal", "not equal"]

if(conditions.length == definations.length){

for (let i = 0; i < conditions.length; i++) {
  const condition = conditions[i];
  const defination = definations[i];
   console.log(`${condition} ---->   ${defination}`);
}

}
