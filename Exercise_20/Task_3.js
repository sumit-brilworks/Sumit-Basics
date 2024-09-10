// Experiment with setTimeout to log a message after a delay and setInterval to log a message repeatedly every second.

const callSetTimeOut = (millis) => {
  setTimeout(() => {
    console.log("SetTimeout is called");
  }, millis);
};
const callSetInterval = (millis) => {
  setInterval(() => {
    console.log("setInterval is called");
  }, millis);
};

callSetTimeOut(2000);
callSetInterval(1000);
