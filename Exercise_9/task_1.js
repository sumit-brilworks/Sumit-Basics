// Create an array of numbers and log its length.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Length of the array is -", arr.length);

// Access individual elements of the array and modify them.
console.log("the fifth element is", arr[4]);
arr[4] = 99;
console.log("the updated fifth element is", arr[4]);

// Add and remove elements using push, pop, shift, and unshift
const fruits = ["apple", "orange", "mango"];
console.log("Original array : ", fruits);
fruits.push("pineapple");
console.log("After adding element in the array : ", fruits);
console.log(fruits.pop());
console.log("After removing element in the array : ", fruits);
fruits.shift(); // removes the element from the start of the array
console.log("After shifting out the element in the array : ", fruits);
fruits.unshift("dragonfruit"); // Adds the element from the start of the array
console.log(
  "After unshifting the element from the beginning of the array : ",
  fruits
);
