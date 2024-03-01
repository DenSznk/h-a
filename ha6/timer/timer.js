const startTimerButton = document.querySelector(".timer_start");
const stopTimerButton = document.querySelector(".timer_stop");
const timeoutMessage = document.querySelector(".timeout");
const hoursInput = document.querySelector(".timer__input--hours");
const minutesInput = document.querySelector(".timer__input--minutes");
const secondsInput = document.querySelector(".timer__input--seconds");
const hoursElement = document.querySelector(".timer__time--hours");
const minutesElement = document.querySelector(".timer__time--minutes");
const secondsElement = document.querySelector(".timer__time--seconds");
let intervalIDTimer;

hoursInput.addEventListener("input", handleInputHours);
minutesInput.addEventListener("input", handleInputMinutesSeconds);
secondsInput.addEventListener("input", handleInputMinutesSeconds);
startTimerButton.addEventListener("click", startTimer);
stopTimerButton.addEventListener("click", stopTimer);

// input validation
// 1: prevent the user from entering text
// 2 do not exceed the allowed range
function handleInputHours(event) {
  const input = event.target;
  const value = parseInt(input.value);
  if (isNaN(value) || value < 0 || value > 23) {
    input.value = "";
  }
}

function handleInputMinutesSeconds(event) {
  const input = event.target;
  const value = parseInt(input.value);
  if (isNaN(value) || value < 0 || value > 59) {
    input.value = "";
  }
}

function timeFormat(time) {
  if (time < 10) {
    return `0${time}`;
  }
  return time;
}

//here the values for inputs are set;
//if the field is empty, then for it to work correctly I substitute 0
//and calculate the number of seconds
function totalTimeInSeconds(hours, minutes, seconds) {
  if (hours === "") hours = 0;
  if (minutes === "") minutes = 0;
  if (seconds === "") seconds = 0;
  const formattedTime = parseInt(seconds) + parseInt(minutes) * 60 + parseInt(hours) * 3600;
  // console.log(formattedTime)
  return formattedTime;
}

function startTimer() {
  const hours = hoursInput.value;
  const minutes = minutesInput.value;
  const seconds = secondsInput.value;
  timeoutMessage.style.display = "none";

  let totalSeconds = totalTimeInSeconds(hours, minutes, seconds);
  //blocking the start button click if the inputs are empty
  if (totalSeconds === 0) {
    return
  }
  // console.log(hours)/
  if (!intervalIDTimer) {
    intervalIDTimer = setInterval(() => {
      totalSeconds--;
      const updatedHours = Math.floor(totalSeconds / 3600);
      const remainingSeconds = totalSeconds % 3600;
      const updatedMinutes = Math.floor(remainingSeconds / 60);
      const updatedSeconds = remainingSeconds % 60;

      hoursElement.textContent = timeFormat(updatedHours);
      minutesElement.textContent = timeFormat(updatedMinutes);
      secondsElement.textContent = timeFormat(updatedSeconds);

      if (totalSeconds === 0) {
        clearInterval(intervalIDTimer);
        intervalIDTimer = null;
        console.log("Stop timer");
        showStopMessage();
      }
    }, 1000);
  }
}

function stopTimer() {
  clearInterval(intervalIDTimer);
  intervalIDTimer = null;
  hoursInput.value = "";
  minutesInput.value = "";
  secondsInput.value = "";
  hoursElement.textContent = "00";
  minutesElement.textContent = "00";
  secondsElement.textContent = "00";
}

function showStopMessage() {
  timeoutMessage.style.display = "block";
  hoursInput.value = "";
  minutesInput.value = "";
  secondsInput.value = "";
}
