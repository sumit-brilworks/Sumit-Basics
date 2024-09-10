// Create a copy of an object and modify one of its properties without affecting the original object.

// Deep copy : This will create a new object and creates entirely new instances of the references of the original object

const innerObj1 = {
  name: "sumit",
  age: 19,
};
const obj1 = {
  designation: "Software developer",
  otherDetails: innerObj1,
};

const copiedObj1 = JSON.parse(JSON.stringify(obj1));
console.log("Before Original Object", obj1);
copiedObj1.otherDetails.name = "Gopal";
console.log("Original Object", obj1);
console.log("Copied Object", copiedObj1);

// Shallow copy : If we use the spread operator to create a copy of the original object then only primitive values will only get deep copied the referencing properties will get override and affect the original array
// const innerObj = {
//   name: "sumit",
//   age: 19,
// };
// const obj = {
//   designation: "Software developer",
//   otherDetails: innerObj,
// };

// console.log("Original Object", obj);
// let copiedArr = { ...obj };
// copiedArr.otherDetails.age = 20;

// console.log("Original Object", obj);
// console.log("Copied Object", copiedArr);
