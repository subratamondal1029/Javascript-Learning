//this on object
const myObj = {
    username: "subrata",
    Password : "SubrataPass",

    WelcomeMassage: function(){
        // console.log(`${this.username} , Welcome to my website`);
        // console.log(this,  "Is refer to current context");
    }

    
}

myObj.WelcomeMassage()

//this in outside of any scope
console.log(this); // it will give {} in node environment  / if i get this value in browser it will return some window value


//this on various function

//basic function
function addNum(num){
    console.log(num + 1);
    // console.log(this); // its give various value if i get this from basic function
}

addNum(9)


// arrow function

const addTwo = (num) => {
console.log(num + 2);
let number = num;
console.log(this.number); // it will return undefined
console.log(this);
}
addTwo(10) // this will return {} in an arrow function


