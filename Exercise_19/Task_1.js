// Write a function that intentionally throws an error and use try and catch to handle it.
const sayHello = function () {
  console.log("This function will throw an error");
  throw new Error("This is an intentionally thrown error");
};

try {
  sayHello();
} catch (error) {
  console.log("The Error message is :", error.message);
}
