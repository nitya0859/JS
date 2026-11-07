//primitive data types
let age = 30; // Number type representing the age of the user
const isActive = true; // Boolean type indicating if the account is active
let userName = "John Doe"; // String type representing the user's name
let city = null; // Null type representing the absence of a value
let state; // Undefined type representing a variable that has been declared but not initialized
let symbol = Symbol("unique"); // Symbol type representing a unique identifier

//non primitive data types
let user = { name: "John", age: 30 }; // Object type representing a user with properties
let numbers = [1, 2, 3, 4, 5]; // Array type representing a collection of numbers
function greet() { // Function type representing a reusable block of code
    console.log("Hello!");
}

let myfunction=function() {
    console.log("This is a function expression.");
}

console.log(typeof age); // Output: number
console.log(typeof isActive); // Output: boolean
console.log(typeof userName); // Output: string
console.log(typeof city); // Output: object (null is considered an object in JavaScript)
console.log(typeof state); // Output: undefined (state is declared but not initialized)
console.log(typeof symbol); // Output: symbol
console.log(typeof user); // Output: object
console.log(typeof numbers); // Output: object (arrays are a type of object in JavaScript)
console.log(typeof greet); // Output: function
console.log(typeof myfunction); // Output: function