//string to number
let str = "123";
let num = Number(str);
console.log(num); // Output: 123
console.log(typeof num); // Output: number

//number to string
let number = 456;
let string = String(number);
console.log(string); // Output: "456"
console.log(typeof string); // Output: string

//boolean to string
let bool = true;
let boolString = String(bool);
console.log(boolString); // Output: "true"
console.log(typeof boolString); // Output: string

//string to boolean
let strBool = "false";
let boolValue = (strBool.toLowerCase() === "true");
console.log(boolValue); // Output: false
console.log(typeof boolValue); // Output: boolean

//number to boolean
let numBool = 0;
let boolFromNum = Boolean(numBool);
console.log(boolFromNum); // Output: false
console.log(typeof boolFromNum); // Output: boolean 

//operations
//string concatenation
let str1 = "Hello, ";
let str2 = "World!";
let concatenatedString = str1 + str2;
console.log(concatenatedString); // Output: "Hello, World!"

//number addition
let num1 = 10;
let num2 = 20;
let sum = num1 + num2;
console.log(sum); // Output: 30

