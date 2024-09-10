// Create a function that accepts a variable number of arguments and logs each one.
function multipleArgs(...args) {
  args.forEach((item) => {
    console.log("Logging each arguemnts : ", item);
  });
}

multipleArgs("sumit", "nayan", "John");
