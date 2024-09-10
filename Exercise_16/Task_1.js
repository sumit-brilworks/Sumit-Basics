// Create a Set with a list of unique numbers and demonstrate adding, deleting, and checking for values

const mySet = new Set(["sumit", 19, 10, 19, "sumit", "brilworks"]);

console.log("The set looks like this", mySet);

// Adding items to the set
mySet.add("fruits");

console.log("After adding items the set looks like this", mySet);

// Iterate in the set
mySet.forEach((item) => {
  console.log(item);
});

// checking the value exists in the set
if (mySet.has("fruits")) {
  console.log("Yes fruits exists in the set");
}

console.log("Before removing the fruits from the set", mySet);
mySet.delete("fruits");
console.log("After removing the fruits from the set", mySet);
