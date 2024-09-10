// Use async and await to handle the promise in an asynchronous function.
const wait = (milliseconds) => {
  return new Promise((res) => setTimeout(() => res("It's Done"), milliseconds));
};

(async () => {
  const res = await wait(2000);
  console.log(res);
})();
