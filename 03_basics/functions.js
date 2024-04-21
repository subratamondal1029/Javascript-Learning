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
// console.log(userLoginMassage()); //empty argument will return undefined

// ++++++++++++++++++++++++++++++++++++ part 2 ++++++++++++++++++++++++++++++++++++

//lets handle multiple arguments with one parameter
function calculateCartValue(...prices) {
  console.log(prices);

  //we can sum all the prices using loops
}

//with using prices
// calculateCartValue(100, 200, 300) // => 100

//with using ...prices
calculateCartValue(100, 200, 300) // => it will return an array [100, 200, 300]


//handle Object in function

const loginData = {
  username : "subratamondal1029",
  password : "subrataPass"
}

function handleObject(Obj){
  console.log(`Your Username is "${Obj.username}" and your Password is "${Obj.password}"`);
}

handleObject(loginData)

// handle Array in function

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getforthNum(Arr){
  console.log(Arr[3]);
}

getforthNum(numArr)