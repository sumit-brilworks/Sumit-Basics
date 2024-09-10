// Use filter to create a new array with only the even numbers from an existing array.

const arr = [2, 3, 1, 22, 44, 33, 54, 36, 787];

const newArr = arr.filter((num) => num % 2 == 0);
console.log("The array of even numbers is", newArr);
