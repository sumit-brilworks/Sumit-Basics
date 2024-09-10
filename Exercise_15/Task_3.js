// Use the spread operator to pass multiple arguments to a function.

const myFunc = function (...args) {
  args.forEach((item, index) => {
    console.log(`The ${index + 1} argument is ${item}`);
  });
};

myFunc(
  "sumit",
  "nayan",
  19,
  20,
  "Software developer Intern",
  "MERN Stack Developer"
);
