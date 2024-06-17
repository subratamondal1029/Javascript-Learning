// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const discriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(discriptor);

const obj = {
    name: "subrata",
    username: 'subrata1029',
    pass: "12345",

    create: function(){
        console.log('not created');
    }
}

console.log(Object.getOwnPropertyDescriptor(obj, "pass"));

Object.defineProperty(obj, "pass", {
    enumerable: false // with enumerable false we can't access pass in loop
})

console.log(Object.getOwnPropertyDescriptor(obj, "pass"));

for (const [key, value] of Object.entries(obj)) {
    if (typeof value !== "function") {
        console.log(`${key}: ${value}`);
    }
}