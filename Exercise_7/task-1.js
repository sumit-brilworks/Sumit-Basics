// Declare variables of different types: string, number, boolean, null, undefined.
const stringVar = "Hello";
const numVar = 100;
const booleanVar = true;
const nullVar = null;
const undefinedVar = undefined;

// Use typeof to check the type of each variable.
console.log(typeof stringVar); // string
console.log(typeof numVar); // number
console.log(typeof booleanVar); // boolean
console.log(typeof nullVar); // null
console.log(typeof undefinedVar); // undefined

// Experiment with changing the type of a variable (e.g., from a number to a string).
const a = "100";
const num = Number(a);
console.log(typeof a);
console.log(typeof num);

console.log(Boolean([])); // An empty array is a truthy value so it returns true
console.log({} == {}); // Non-primitive data types returns different references so even if inside the value is same the objects are different
