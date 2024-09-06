// There are two methods to create an object using the Object (constrcutor function) or suing th Object literal ("{}")
// Create an object to represent a person with properties like name, age, and email.

const obj = new Object();
const obj2 = { name: "sumit", age: 19, email: "sumit@gmail.com" };

// Access and log the properties using both dot notation and bracket notation.
console.log("Name of the person is ", obj2["name"]);
obj2.name = "Sumit Mishra";

// Add a method to the object that returns a string with the person’s details.
obj2.getDetails = function () {
  return `Name : ${this.name} - Age: ${this.age} - Email : ${this.email}`;
};
console.log(obj2["getDetails"]());
