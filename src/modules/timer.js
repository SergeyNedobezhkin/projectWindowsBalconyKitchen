"use strict";
const timer = (deadline) => {
  const timerDays = document.querySelector(".timer-days");
  const timerHours = document.querySelector(".timer-hours");
  const timerMinutes = document.querySelector(".timer-minutes");
  const timerSeconds = document.querySelector(".timer-seconds");

  const timerDays2 = document.querySelector(".timer-days_2");
  const timerHours2 = document.querySelector(".timer-hours_2");
  const timerMinutes2 = document.querySelector(".timer-minutes_2");
  const timerSeconds2 = document.querySelector(".timer-seconds_2");
  let idInterval = 0;
  function getTimeRemaining() {
    const dateStop = new Date(deadline).getTime();
    const dateNow = new Date().getTime();
    const timeRemaining = (dateStop - dateNow) / 1000;
    const seconds = Math.floor(timeRemaining % 60);
    const minutes = Math.floor((timeRemaining / 60) % 60);
    const hours = Math.floor((timeRemaining / 60 / 60) % 24);
    const days = Math.floor(timeRemaining / 60 / 60 / 24);

    return { timeRemaining, days, hours, minutes, seconds };
  }
  function addZero(number) {
    if (String(number).length === 1) {
      return "0" + number;
    } else {
      return String(number);
    }
  }

  const updateClock = () => {
    const getTime = getTimeRemaining();

    if (getTime.timeRemaining > 0) {
      timerDays.textContent = addZero(getTime.days);
      timerHours.textContent = addZero(getTime.hours);
      timerMinutes.textContent = addZero(getTime.minutes);
      timerSeconds.textContent = addZero(getTime.seconds);

      timerDays2.textContent = addZero(getTime.days);
      timerHours2.textContent = addZero(getTime.hours);
      timerMinutes2.textContent = addZero(getTime.minutes);
      timerSeconds2.textContent = addZero(getTime.seconds);
    } else if (getTime.timeRemaining <= 0) {
      clearInterval(idInterval);
      timerDays.textContent = "00";
      timerHours.textContent = "00";
      timerMinutes.textContent = "00";
      timerSeconds.textContent = "00";

      timerDays2.textContent = "00";
      timerHours2.textContent = "00";
      timerMinutes2.textContent = "00";
      timerSeconds2.textContent = "00";
    }
  };
  updateClock();
  idInterval = setInterval(updateClock, 1000);
};
export default timer;
