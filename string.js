//concatenating strings
let str1 = "Hello";
let str2 = "World";
let result = str1 + " " + str2;
console.log(result); // Output: Hello World

let name="CodeWithHarry";
let repo="JavaScript";
let message=`Welcome to ${name}'s ${repo} repository!`;
console.log(message); // Output: Welcome to CodeWithHarry's JavaScript repository!

//string methods
let str = "Hello, World!";
console.log(str.length); // Output: 13
console.log(str.toUpperCase()); // Output: HELLO, WORLD!
console.log(str.toLowerCase()); // Output: hello, world!
console.log(str.indexOf("World")); // Output: 7
console.log(str.slice(0, 5)); // Output: Hello
console.log(str.replace("World", "JavaScript")); // Output: Hello, JavaScript!
console.log(str.split(", ")); // Output: [ 'Hello', 'World!' ]
console.log(str.trim()); // Output: Hello, World! (removes whitespace from both ends of the string)
console.log(str.charAt(0)); // Output: H (returns the character at the specified index)
console.log(str.includes("Hello")); // Output: true (checks if the string contains the specified substring)
console.log(str.substring(0, 5)); // Output: Hello (returns a portion of the string from index 0 to 5)
