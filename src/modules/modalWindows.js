"use strict";
import { animate } from "./helpers";
const modalСall = () => {
    const modalOverlay = document.querySelector('.overlay');

    const orderingСall = () => {
        const modalHeader = document.querySelector('.header-modal');
        const discountBtn = document.querySelectorAll('.utp-button');
        const modalBtnCall = document.querySelectorAll('.button');
        const modalCloseHeader = document.querySelector('.header-modal__close');

        modalBtnCall.forEach(btn => {
            btn.addEventListener('click', () => {
                animate({
                    duration: 400,
                    timing(timeFraction) {
                        return timeFraction;
                    },
                    draw(progress) {
                        modalHeader.style.left = (50 * progress) + '%';
                        modalHeader.style.top = (50 * progress) + '%';
                    }
                });
                modalOverlay.style.display = 'block';
                modalHeader.style.display = 'block';
            });
        });
        discountBtn.forEach(btn => {
            btn.addEventListener('click', () => {
                animate({
                    duration: 400,
                    timing(timeFraction) {
                        return timeFraction;
                    },
                    draw(progress) {
                        modalHeader.style.left = (50 * progress) + '%';
                        modalHeader.style.top = (50 * progress) + '%';
                    }
                });
                modalOverlay.style.display = 'block';
                modalHeader.style.display = 'block';
            });
        });


        modalOverlay.addEventListener('click', (e) => {
            if (e.target.closest('.overlay')) {
                modalOverlay.style.display = 'none';
                modalHeader.style.display = 'none';
            }
        });
        modalCloseHeader.addEventListener('click', () => {
            modalOverlay.style.display = 'none';
            modalHeader.style.display = 'none';
        });
    };
    orderingСall();

    const callingTheMeasurer = () => {
        const modalServices = document.querySelector('.services-modal');
        const serviceBtn = document.querySelectorAll('.service-button');
        const modalCloseServices = document.querySelector('.services-modal__close');
        
        serviceBtn.forEach(btn => {
            btn.addEventListener('click', () => {
                animate({
                    duration: 400,
                    timing(timeFraction) {
                        return timeFraction;
                    },
                    draw(progress) {
                        modalServices.style.left = (50 * progress) + '%';
                        modalServices.style.top = (50 * progress) + '%';
                    }
                });
                modalOverlay.style.display = 'block';
                modalServices.style.display = 'block';
            });
        });

        modalOverlay.addEventListener('click', (e) => {
            if (e.target.closest('.overlay')) {
                modalOverlay.style.display = 'none';
                modalServices.style.display = 'none';
            }
        });
        modalCloseServices.addEventListener('click', () => {
            modalOverlay.style.display = 'none';
            modalServices.style.display = 'none';
        });
    };
    callingTheMeasurer();

};
export default modalСall;
