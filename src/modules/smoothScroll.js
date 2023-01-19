"use strict";
const smoothScroll = () => {
  const goTopBtn = document.querySelector(".smooth-scroll");

  // Скролл по стрелке
  goTopBtn.style.display = "none";
  function trackScroll() {
    const offSet = window.pageYOffset;

    if (offSet > 620) {
      goTopBtn.style.display = "block";
    } else {
      goTopBtn.style.display = "none";
    }
  }

  function goTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -30);
      setTimeout(goTop, 0);
    }
  }

  goTopBtn.addEventListener("click", goTop);
  window.addEventListener("scroll", trackScroll);
};
export default smoothScroll;
