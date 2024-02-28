const stopwatchStartButton = document.querySelector(".stopwatch__control--start");
const stopwatchStopButton = document.querySelector(".stopwatch__control--stop");
const stopwatchResetButton = document.querySelector(".stopwatch__control--reset");
const stopwatchHours = document.querySelector(".stopwatch__time--hours");
const stopwatchMinutes = document.querySelector(".stopwatch__time--minutes");
const stopwatchSeconds = document.querySelector(".stopwatch__time--seconds");
let hours = 0;
let minutes = 0;
let seconds = 0;
// variable to store our intervalID
// documentation here https://developer.mozilla.org/en-US/docs/Web/API/setInterval#examples
let intervalID;
stopwatchStartButton.addEventListener("click", startStopwatch);
stopwatchStopButton.addEventListener("click", stopStopwatch);
stopwatchResetButton.addEventListener("click", resetStopwatch);

function startStopwatch() {
  // check if an interval has already been set up
  if (!intervalID) {
    intervalID = setInterval(() => {
      seconds++;
      if (seconds === 60) {
        minutes++;
        seconds = 0;
      }
      if (minutes === 60) {
        hours++;
        minutes = 0;
      }
      if (hours === 24) {
        hours = 0;
        minutes = 0;
        seconds = 0;
      }
      updateStopwatch();
    }, 1000);
  }
}

function stopStopwatch() {
  clearInterval(intervalID);
  // release our intervalID from the variable
  intervalID = null;
}

function resetStopwatch() {
  clearInterval(intervalID);
  hours = 0;
  minutes = 0;
  seconds = 0;
  // release our intervalID from the variable
  intervalID = null;
  updateStopwatch();
}

function timeFormat(time) {
  if (time < 10) {
    return `0${time}`;
  }
  return time;
}

function updateStopwatch() {
  stopwatchHours.textContent = timeFormat(hours);
  stopwatchMinutes.textContent = timeFormat(minutes);
  stopwatchSeconds.textContent = timeFormat(seconds);
}
