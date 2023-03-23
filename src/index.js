import timer from "./modules/timer";
import { sliderСarousel } from "./modules/sliderСarousel";
import { slider } from "./modules/slider";
import smoothScroll from "./modules/smoothScroll";
import modalСall from "./modules/modalWindows";
import calc from "./modules/calc";
import check from "./modules/check";
import phoneInput from "./modules/phoneInput";
import sendForm from "./modules/sendForm";

timer("10 dec 2023");
sliderСarousel();
slider();
smoothScroll();
modalСall();
calc();
check();
phoneInput();
sendForm({ formTag: "form", someElem: [{ type: "input", id: "calc-total" }] });
