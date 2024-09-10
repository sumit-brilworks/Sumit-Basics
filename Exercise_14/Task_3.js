// Use reduce to find the sum of all numbers in an array.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const totalOfNumbersInArray = arr.reduce((acc, num) => acc + num, 0);

console.log(
  "The total of all the numbers in the array is",
  totalOfNumbersInArray
);
