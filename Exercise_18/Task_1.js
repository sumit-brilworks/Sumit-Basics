// Create a function that uses the rest operator to accept an arbitrary number of arguments and returns their sum.

function sumAll(...args) {
  let sum = 0;
  for (const item of args) {
    sum += item;
  }
  return sum;
}
console.log("Sum of all the arguments : ", sumAll(1, 2, 3, 4, 5));
