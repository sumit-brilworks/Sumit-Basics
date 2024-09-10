// Iterate over the entries of a Map and log the key-value pairs.

const map = new Map([
  ["name", "sumit mishra"],
  ["age", 19],
  ["designation", "SDE"],
]);

console.log(map);

for (let i of map.entries()) {
  console.log("Key :", i[0], " - ", "Values : ", i[1]);
}
