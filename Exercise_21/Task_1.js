function Timer() {
  this.status = false;
  this.intervalId = null;
  this.timer = 0;
}

Timer.prototype.startTimer = function () {
  if (this.status) return alert("Timer is already started");
  this.status = true;
  this.intervalId = setInterval(() => {
    this.timer++;
    document.getElementById("timer").innerHTML = "Timer at " + a.timer;
    console.log(this.timer);
  }, 1000);
};
Timer.prototype.stopTimer = function () {
  if (!this.status) return alert("Timer is already stopped");
  this.status = false;
  clearInterval(this.intervalId);
};

let a = new Timer();
document.getElementById("start").addEventListener("click", function (e) {
  e.preventDefault();

  a.startTimer();
});
document.getElementById("stop").addEventListener("click", function (e) {
  e.preventDefault();
  a.stopTimer();
});
document.getElementById("duration").addEventListener("click", function (e) {
  e.preventDefault();
  alert("The timer is at " + a.timer);
});
document.getElementById("reset").addEventListener("click", function (e) {
  e.preventDefault();
  a.timer = 0;
  document.getElementById("timer").innerHTML = "Timer at " + a.timer;
  this.status = true;
  a.stopTimer();
});
