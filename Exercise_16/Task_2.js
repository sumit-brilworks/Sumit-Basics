// Create a Map to store key-value pairs and demonstrate adding, retrieving, and deleting entries.

const map = new Map([
  ["name", "sumit mishra"],
  ["age", 19],
]);
// map constructor to add values at the time of object creation

console.log("The map looks like this", map);

// Adding items to the map
map.set("designation", "SDE");

console.log("After adding items themap looks like this", map);

// Get entries array using .entries method
console.log("The entries array looks like this", map.entries());

// checking the value exists in the map
if (map.has("designation")) {
  console.log("Yes designation exists in the map");
}

console.log("Before removing the designation from the map", map);
map.delete("designation");
console.log("After removing the designation from the map", map);
