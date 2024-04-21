// console.log("s");
// console.log("u");
// console.log("b");
// console.log("r");
// console.log("a");
// console.log("t");
// console.log("a");

// if we want to print this for five times we need to use function

// function printMyName(number){
//     console.log("this is " + number);
//     console.log("s");
//     console.log("u");
//     console.log("b");
//     console.log("r");
//     console.log("a");
//     console.log("t");
//     console.log("a");
// }

// printMyName("first")
// printMyName("second")
// printMyName("third")
// printMyName("forth")

//how to store function return data
function sumOfTwo(number1, number2) {
  console.log("printing sum of two Numbers...");
  return number1 + number2;

  // console.log("printing sum of two Numbers"); //this is not work beacause we write the code after returning the value
}

let result = sumOfTwo(2, 4);
console.log(result);


function userLoginMassage(username = "sam"){ // userLoginMassage() argument is empty username value will be "sam"
    if (!username) {
        return "please Enter your username";
    }
        return `${username} just logged in`
    
}

console.log(userLoginMassage("subrata"));
// console.log(userLoginMassage());
