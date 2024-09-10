// Write two functions: one declared with function and one with a function expression, and observe hoisting behavior.

// function and variables are hoisted at the time of execution of the script

callMeFunc();
sayHello(); // function created through function expression -> this will give an error because we are accsessing the const or let variables before initialization due to the temporal dead zone.

function callMeFunc() {
  console.log("Function created through function keyword is calling");
}

const sayHello = function funcExp() {
  console.log("Function created through function Expression is calling");
};
