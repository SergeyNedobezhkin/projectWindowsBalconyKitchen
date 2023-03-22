"use strict";
const check = () => {
  const checked = () => {
    const formName = document.querySelectorAll('[name="fio"]');
    const formPhone = document.querySelectorAll('[name="phone"]');

    const addName = (event) => {
      event.target.value = event.target.value.replace(/[^а-яё\ ]/gi, "");
    };

    const addPhone = (event) => {
      event.target.value = event.target.value.replace(/[^0-9()+-]/gi, "");
    };

    formName.forEach((item) => {
      item.addEventListener("input", addName);
    });

    formPhone.forEach((item) => {
      item.addEventListener("input", addPhone);
    });
  };
  checked();
};
export default check;
