"use strict";
const calc = () => {
  const calcBlock = document.querySelector("#calc");
  const calcType = document.querySelector("#calc-type");
  const calcTypeMaterial = document.querySelector("#calc-type-material");
  const calcInputSquare = document.querySelector("#calc-input");
  const calcTotal = document.querySelector("#calc-total");

  const countCalc = () => {
    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
    const calcTypeMaterialValue =
      +calcTypeMaterial.options[calcTypeMaterial.selectedIndex].value;
    calcTotal.value =
      calcInputSquare.value * calcTypeValue * calcTypeMaterialValue;
  };

  calcBlock.addEventListener("input", (e) => {
    if (
      e.target === calcType ||
      e.target === calcTypeMaterial ||
      e.target === calcInputSquare
    ) {
      countCalc();
    }
  });
};
export default calc;
