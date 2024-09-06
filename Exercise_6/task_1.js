// Create a JavaScript file and declare variables using let, var, and const.
var var1; // var variables allows redeclaration of variables
let var2; // let variables do not allow redeclaration
const var3 = "some text"; // in javascript we cannot declare the const variables it needs to be initialized

// Assign different values to the variables and log them to the console.
var age = 19;
let message = "hello world";
const name = "sumit mishra";
console.log(age);
console.log(message);
console.log(name);

// Experiment with reassigning variables and observe how const behaves.
const address = "some text";
address = "added new address"; // This will give TypeError because the const variables are constants and cannot be changed
