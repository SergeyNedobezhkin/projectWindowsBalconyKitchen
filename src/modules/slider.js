"use strict";
import Swiper, { Navigation, Pagination } from "swiper";
const slider = () => {
  const swiperSlider = new Swiper(".swiperSlider", {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    navigation: {
      nextEl: ".services__arrow--right",
      prevEl: ".services__arrow--left",
    },
    breakpoints: {
      560: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
    },
  });
};
export { slider };
