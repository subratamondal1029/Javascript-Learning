let array = [1, 2, 3, 4, 5];
console.log("Origial Array", array);

//Array Mathods

//push()
array.push(6); // it will add a new element in end of the array
console.log("Push Mathod", array);

//pop()
array.pop();  // it will remove a element from end of the array
console.log("Pop Mathod", array);
console.log("Origial Array", array);

//shift()
array.shift(); // it will remove a element from start of the array
console.log("Shift Mathod", array);
console.log("Origial Array", array);

//unshift()
array.unshift(1); // it will add a new element in start of the array
console.log("Unshift Mathod", array);
console.log("Origial Array", array);

//slice()
let slicearr = array.slice(1, 3); // it will return new array with defiend index element | it does not take the last index element that you defined | it can't change the original array
console.log("Slice Mathod", slicearr);
console.log("Origial Array", array);

//splice()
let splicearr = array.splice(1, 3); // it will return new array with defiend index element | it does take the last index element that you defined | it can change the original array
console.log("Splice Mathod", splicearr);
console.log("Origial Array", array);