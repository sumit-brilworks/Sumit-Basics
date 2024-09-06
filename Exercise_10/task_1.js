// Create a function that takes two numbers as parameters and returns their sum.
const addTwoNum = function (a, b) {
  return a + b;
};
console.log(addTwoNum(5, 6));

// Write a function that checks if a number is even or odd.
function isEven(num) {
  return num % 2 == 0;
}
console.log("The given number 4 is", isEven(4) ? "Even" : "Odd");

// Experiment with function expressions and arrow functions.
// funcExp(); // gives reference error due to temporal dead zone in let and const variables
const funcExp = function () {
  console.log("Function Expression is called");
};
const arrFunc = () => {
  console.log("Arrow function is called");
};
funcExp();
arrFunc();
// The difference between the arrow function and the function expression is :
// 1. Hoisting : now function expression is assigned to the const variable calling the functio before declaration raises an error
// 2. this keyword access : The arrow fucntion doesn't have the this keyword access but inside the fucntion expression this keyword refers to the global object
