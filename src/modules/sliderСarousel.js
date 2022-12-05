"use strict";

import Swiper, { Navigation, Pagination } from 'swiper';



const sliderСarousel = () => {

    const swiper = new Swiper('.companies-swiper', {
        modules: [Navigation, Pagination],
        slidesPerView: 3,
        navigation: {
            nextEl: ".benefits__arrow--right",
            prevEl: ".benefits__arrow--left",
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
        },

    });
};


export {sliderСarousel};
