/*
 *** Created by NikNet 27.11.2019
*/
"use strict";


function countTimer(deadline) {
    let timerHours = document.querySelector('#timer-hours'),
        timerMinutes = document.querySelector('#timer-minutes'),
        timerSeconds = document.querySelector('#timer-seconds');

    function getTimeRemaining() {
        let dateStop = new Date(deadline).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) / 1000,
            seconds = Math.floor(timeRemaining % 60),
            minutes = Math.floor((timeRemaining / 60) % 60),
            hours = Math.floor((timeRemaining / 60 / 60) % 24);

        return {timeRemaining, hours, minutes, seconds};
    }

    function updateClock() {
        let timer = getTimeRemaining();

        timerHours.textContent = timer.hours < 10 ? "0" + timer.hours : timer.hours;
        timerMinutes.textContent = timer.minutes < 10 ? "0" + timer.minutes : timer.minutes;
        timerSeconds.textContent = timer.seconds < 10 ? "0" + timer.seconds : timer.seconds;

        let idInterval = setInterval(updateClock, 1000);
        if (timer.timeRemaining > 0) {
            setTimeout(updateClock, 1000);
        } else {
            clearInterval(idInterval);
            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';
        }
    }

    updateClock();

}

export default countTimer;