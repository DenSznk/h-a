const startTimerButton = document.querySelector('.timer_start');
const stopTimerButton = document.querySelector('.timer_stop');
const timeoutMessage = document.querySelector('.timer__timeout span');
const hoursInput = document.querySelector('.timer__input--hours');
const minutesInput = document.querySelector('.timer__input--minutes');
const secondsInput = document.querySelector('.timer__input--seconds');
let intervalIDTimer;

function handleInputHours(event) {
    const input = event.target;
    const value = parseInt(input.value);
    if (isNaN(value) || value < 0 || value > 23) {
        input.value = '00';
    }
}

function handleInputMinutesSeconds(event) {
    const input = event.target;
    const value = parseInt(input.value);
    if (isNaN(value) || value < 0 || value > 59) {
        input.value = '';
    }
}
hoursInput.addEventListener('input', handleInputHours);
minutesInput.addEventListener('input', handleInputMinutesSeconds);
secondsInput.addEventListener('input', handleInputMinutesSeconds);
startTimerButton.addEventListener('click', startTimer)

function timeFormat(time) {
  if (time < 10) {
    return `0${time}`;
  }
  return time;
}

function getTotalTime(hours = 0, minutes = 0, seconds = 0) {
    const totalTime = seconds + (minutes * 60) +(hours * 3600)
    return totalTime
}

function startTimer() {
    const hours = parseInt(hoursInput.value);
    const minutes = parseInt(minutesInput.value);
    const seconds = parseInt(secondsInput.value);

    let totalSeconds = getTotalTime(hours, minutes, seconds);
    intervalIDTimer = setInterval(() => {
        totalSeconds--;

        const updatedHours = Math.floor(totalSeconds / 3600);
        const remainingSeconds = totalSeconds % 3600;
        const updatedMinutes = Math.floor(remainingSeconds / 60);
        const updatedSeconds = remainingSeconds % 60;

        // hoursInput.value = timeFormat(updatedHours);
        // minutesInput.value = timeFormat(updatedMinutes);
        // secondsInput.value = timeFormat(updatedSeconds);

        if (totalSeconds === 0) {
            clearInterval(intervalIDTimer);
            showStopMessage();
        }
    }, 1000);
}

function stopTimer() {
    intervalIDTimer = null;
}

function showStopMessage () {
    timeoutMessage.style.display = 'block'
}