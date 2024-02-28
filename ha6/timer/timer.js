 const startTimerButton = document.querySelector('.timer_start');
 const stopTimerButton = document.querySelector('.timer_stop');
 const timeoutMessage = document.querySelector('.timer__timeout span');
 let intervalID;



function validateMinSek(time) {
    if (0 > time < 59 ) {

    }
}

function validateHours(time) {
    if (0 > time < 23 ) {

    }
}

 function timeFormat(time) {
    if (time < 10) {
      return `0${time}`;
    }
    return time;
  }

function getTotalTime(hours, minutes, seconds) {
    const totalTime = seconds + (minutes * 60) +(hours * 3600)
    return totalTime
}

function startTimer() {

}

function stopTimer() {
    intervalID = none;
}

function showStopMessage () {
    timeoutMessage.style.display = 'block'
}