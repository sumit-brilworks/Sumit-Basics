let object = {
  intervalId: null,
  status: false,
  timer: 0,
};
console.log(object);
Object.setPrototypeOf(object, {
  startTimer: () => {
    if (object.status) return alert("Timer is already started");
    object.status = true;
    object.intervalId = setInterval(function () {
      document.getElementById("timer").innerHTML = "Timer at " + object.timer;
      ++object.timer;
    }, 1000);
  },
  stopTimer: () => {
    if (!object.status) return alert("Timer is already stopped");
    clearInterval(object.intervalId);
    object.status = false;
  },
});

document.getElementById("start").addEventListener("click", function (e) {
  e.preventDefault();

  object.startTimer();
});
document.getElementById("stop").addEventListener("click", function (e) {
  e.preventDefault();
  object.stopTimer();
});
document.getElementById("duration").addEventListener("click", function (e) {
  e.preventDefault();
  alert("The timer is at " + (object.timer - 1));
});
document.getElementById("reset").addEventListener("click", function (e) {
  e.preventDefault();
  object.timer = 0;
  document.getElementById("timer").innerHTML = "Timer at " + object.timer;
  object.status = true;
  object.stopTimer();
});
