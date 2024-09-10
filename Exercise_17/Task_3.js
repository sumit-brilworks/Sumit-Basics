// Use the arguments object to sum all the passed arguments in a function.

function getArgsWithoutRestOp() {
  console.log("List of arguments :", arguments); // arguments is a Array_like object
  let sum = 0;
  for (const item of arguments) {
    sum += item;
  }
  return sum;
}
console.log("Sum of all the arguments : ", getArgsWithoutRestOp(1, 2, 3, 4, 5));
