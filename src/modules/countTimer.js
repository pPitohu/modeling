'use strict';
function countTimer() {
    const timerHours = document.getElementById('timer-hours'),
        timerMinutes = document.getElementById('timer-minutes'),
        timerSeconds = document.getElementById('timer-seconds');

    let deadline, tomorrow, month, year;
    let date = new Date();
    tomorrow = date.getDate() + 1;
    month = date.getMonth() + 1;
    year = date.getFullYear();
    deadline = `${month}.${tomorrow}.${year}`;

    const getTimeRemaining = () => {
        const dateStop = new Date(deadline).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) / 1000,
            seconds = Math.floor(timeRemaining % 60),
            minutes = Math.floor((timeRemaining / 60) % 60),
            hours = Math.floor(timeRemaining / 3600);

        return {
            seconds,
            minutes,
            hours,
            timeRemaining,
        };
    };

    const updateClock = () => {
        const timer = getTimeRemaining();
        if (timer.timeRemaining <= 0) {
            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';
            return false;
        } else if (timer.timeRemaining > 0) {
            for (let key in timer) {
                if (timer[key] < 10) {
                    timer[key] = '0' + timer[key];
                }
            }
            timerHours.textContent = timer.hours;
            timerMinutes.textContent = timer.minutes;
            timerSeconds.textContent = timer.seconds;
        }
    };
    let idInterval;
    if (updateClock() !== false) {
        idInterval = setInterval(updateClock, 1000);
    } else {
        clearInterval(idInterval);
    }
}

export default countTimer;
