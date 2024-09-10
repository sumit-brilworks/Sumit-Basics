// Create a promise that resolves after 2 seconds and log a message when it’s done.

const mypromise = new Promise((res) =>
  setTimeout(() => res("It's Done"), 2000)
);
mypromise.then((msg) => {
  console.log(msg);
});
