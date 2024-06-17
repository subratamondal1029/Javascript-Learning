// Opps concepts 
// in javascript everything is an Object is we see in prototype we can see that
// let see

// this and new (kerword) making an constructor function
function newUser(username, islogin, loginCount){
    this.username = username
    this.islogin = islogin
    this.loginCount = loginCount

    return this //By Default an constructor function do this we dont have return 
}

const user1 = new newUser('subarta', true, 21)
const user2 = new newUser('raja', false, 12)
console.log(user1);
console.log(user2);
// with one user we got perfect values But when we make more the one user its overWrite the previous values to solve this we can use new
// new => new keyword make a new empty object and add all property of this(current context) inclues function and return it