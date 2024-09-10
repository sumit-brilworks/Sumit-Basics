// Create an array of numbers and sort them in ascending and descending order.

const arr = [2, 3, 1, 22, 44, 33, 54, 36, 787];
console.log(arr.sort());
// [
//     1,  2, 22,   3, 33,
//     36, 44, 54, 787
//   ]
// using the normal sort method will give wrong answer for sorting in numbers
// To sort the numbers using the sort method we have tp use the callback function

console.log(
  "Ascending order : ",
  arr.sort((a, b) => a - b)
);
// Ascending order :  [
//     1,  2,  3,  22, 33,
//     36, 44, 54, 787
//   ]

console.log(
  "Descending order : ",
  arr.sort((a, b) => b - a)
);
