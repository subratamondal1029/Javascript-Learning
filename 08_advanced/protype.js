// lets talk about protype in js
// javascript behaviour is prototypale behaviour and all the elements are connected with the object
// and prototype search for a mathod or a function to the grandparent upto null

const str = "subrata       "
// i want get the actuale the true length of the string i can also use .trim().length But if i needd to get the length in multiple sting we can also create a function for this in prototype we can just call this as a mathod
// its have multiple way to do this we can add this mathod to the String or to the Object because string is also connected with the object
String.prototype.trueLength = function (){
    console.log(`The orignal length ${this.trim().length}`)
}

// console.log(`Total Length ${str.length}`);
// str.trueLength()


// we can also share the value of object to another object
const user = {
    name: "subrata",
    isLogedIn: true,
    loginCount: 21
}

const owner = {
    ownerName: "Raja",
    isLogedIn: false,
    active: true
}

// owner.__proto__ = user
Object.setPrototypeOf(owner, user)
// console.log(owner.name, owner.loginCount);
// console.log(user.ownerName); //undefined