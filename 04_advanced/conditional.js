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

// if(conditions.length == definations.length){

// for (let i = 0; i < conditions.length; i++) {
//   const condition = conditions[i];
//   const defination = definations[i];
//    console.log(`${condition} ---->   ${defination}`);
// }

// } //uncomment this to see the defination of all conditons


// +++++++++++++++++++++++++ part 2 ++++++++++++++++++++++++++++++++++++++

// else if 
const currentDate = new Date();
// currentDate.setMonth(6) // check the statement with this mathod | this is a practical learning
const month = currentDate.getMonth() + 1;

if (month === 1) {
  console.log("January");
} else if (month === 2) {
  console.log("February");
} else if (month === 3) {
  console.log("March");
} else if (month === 4) {
  console.log("April");
} else if (month === 5) {
  console.log("May");
} else if (month === 6) {
  console.log("June");
} else if (month === 7) {
  console.log("July");
} else if (month === 8) {
  console.log("August");
} else if (month === 9) {
  console.log("September");
} else if (month === 10) {
  console.log("October");
} else if (month === 11) {
  console.log("November");
} else if (month === 12) {
  console.log("December");
} else {
  console.log("Invalid month");
}

// else if() is use to check multiple value and print difference output for every condition | logic => if the if() statement not work then go to the else if() part will execute and atleast if the any condition not match else() will execute 


//switch case || this easy then else if

switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;
  case 7:
    console.log("July");
    break;
  case 8:
    console.log("August");
    break;
  case 9:
    console.log("September");
    break;
  case 10:
    console.log("October");
    break;
  case 11:
    console.log("November");
    break;
  case 12:
    console.log("December");
    break;
  default:
    console.log("Invalid month");
    break;
}

// logic => with using switch we dont have to write condition like (month === value) we have to define the key one time and write only the value in case switch is use for "==" or "===" condition and default work as else
// break => javascript switch case have some problem if any condition match and we dont write break all next code will execute except default value 


// ++++++++++++++++++++++++++++++ part 3 +++++++++++++++++++++++++++++++++++++++++

//javscript truthy and falsy values

// falsy Values =>  false, 0, -0, ""(empty string), BigInt(373808n), undefined, null

//truthy Values => true, "0", " "(space in string), "false", [](empty array), {}(empty object), function(){}




// nullish coalescing operator
// nullish coalescing operator is use to check the value is null or undefined
// nullish coalescing operator => ??

let age = undefined ?? 10; // "??" don't take null or undefined value if there have any valid value

console.log(age);


//ternary oprator | this is a shorthand for if else

// conditon ? true : false;

age > 18 ? console.log("you can Drive") : console.log("you can't drive");

age = 19

age > 18 ? console.log("you can Drive") : console.log("you can't drive");

