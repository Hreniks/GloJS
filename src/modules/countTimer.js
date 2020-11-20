function countTimer(deadline) {
    const timerHours = document.querySelector('#timer-hours');
    const timerMinutes = document.querySelector('#timer-minutes');
    const timerSeconds = document.querySelector('#timer-seconds');

    function getTimeRemaining() {
        const dateStop = new Date(deadline).getTime();
        const dateNow = new Date().getTime();
        const timeRemaining = (dateStop - dateNow) / 1000;
        const seconds = Math.floor(timeRemaining % 60);
        const minutes = Math.floor((timeRemaining / 60) % 60);
        const hours = Math.floor(timeRemaining / 60 / 60) % 24;

        return {
            timeRemaining,
            hours,
            minutes,
            seconds
        };
    }

    function updateClock() {
        const timer = getTimeRemaining();
        if (timer.timeRemaining > 0) {
            timerHours.textContent = timer.hours < 10 ? '0' + timer.hours : timer.hours;
            timerMinutes.textContent = timer.minutes < 10 ? '0' + timer.minutes : timer.minutes;
            timerSeconds.textContent = timer.seconds < 10 ? '0' + timer.seconds : timer.seconds;
        } else {
            clearInterval(updateClock);
            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';
        }

    }
    updateClock();
    setInterval(updateClock, 1000);
}

export default countTimer;