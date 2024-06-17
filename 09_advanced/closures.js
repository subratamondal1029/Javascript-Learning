// Lexical scoping
// In laxical scoping we can access the parent function variable but cunt access the child function's variable
// function outer() {
//   const name = "subrata";

//   function inner() {
//     console.log(name);
//   }

//   inner();
// }

// outer();

// clousers
// ass per the exicution of javascript after end of the function exicution its delete that exicution context but if we return the inner function that take the outer function's variable the return value will be the inner function and the laxical scope also


function outer() {
    const name = "subrata";
  
   return function inner() {
      console.log(name);
    }
  
  }
  
  const innerFunc = outer();
  innerFunc()
  