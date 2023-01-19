"use strict";

import Swiper, { Navigation, Pagination } from "swiper";
const sliderСarousel = () => {
  const swiper = new Swiper(".swiper", {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    navigation: {
      nextEl: ".benefits__arrow--right",
      prevEl: ".benefits__arrow--left",
    },
    breakpoints: {
      576: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  });
};
export { sliderСarousel };
