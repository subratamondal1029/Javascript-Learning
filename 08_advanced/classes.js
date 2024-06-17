// class createUser{
//     constructor(username, email, pass){
//         this.username = username
//         this.email = email
//         this.pass = pass
//     }

//     showUsername(){
//         return `The userName is ${this.username}`;
//     }

//     encryptPass(){
//         return `${this.pass}abfdfd`
//     }
// }

// const user = new createUser("subrata", "subrata@email.com", "123")
// console.log(user);
// console.log(user.showUsername())
// console.log(user.encryptPass())

// Behind The Scene
function createUser(username, email, pass){
    this.username = username
    this.email = email
    this.pass = pass
}

createUser.prototype.showUsername = function(){
    return `The userName is ${this.username}`;
}

createUser.prototype.encryptPass = function(){
    return `${this.pass}abfdfd`
}

const user = new createUser("subrata", "subrata@email.com", "123")
console.log(user);
console.log(user.showUsername())
console.log(user.encryptPass())