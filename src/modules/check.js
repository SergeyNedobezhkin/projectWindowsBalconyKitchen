"use strict";
const check = () => {
  const checked = () => {
    const formName = document.querySelectorAll('[name="fio"]');
    const addName = (event) => {
      event.target.value = event.target.value.replace(/[^а-яё\ ]/gi, "");
    };

    formName.forEach((item) => {
      item.addEventListener("input", addName);
    });
  };
  checked();
};
export default check;
