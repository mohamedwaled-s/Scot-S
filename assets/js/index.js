var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  spaceBetween: 30,
});

var swiper_who = new Swiper(".mySwiper_who", {});

var swiper_filled = new Swiper(".mySwiper_filled", {
  breakpoints: {
    770: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    320: {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerView: 1.3,
    },
  },
});

var swiper_dropping = new Swiper(".mySwiper_dropping", {
  breakpoints: {
    770: {
      slidesPerView: 3,
      spaceBetween: 10,
      slidesPerView: 2.5,
    },
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
      slidesPerView: 1.3,
    },
  },
});

var burgerMenu = document.getElementById("burger-menu");
var overlay = document.getElementById("menu");
burgerMenu.addEventListener("click", function () {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});
