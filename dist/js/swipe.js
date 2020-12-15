var swiperProducts = new Swiper(".swiper-container-products", {
  navigation: {
    nextEl: ".swiper-button-next-products",
    prevEl: ".swiper-button-prev-products",
  },
  spaceBetween: 50,
});
var swiperLaptops = new Swiper(".swiper-container-laptops", {
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
  breakpoints: {
    480: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 20,
    },
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,
  nested: true,
  pagination: {
    el: ".swiper-pagination-laptops",
    clickable: true,
  },
});

var swiperPhones = new Swiper(".swiper-container-phones", {
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
  breakpoints: {
    480: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 20,
    },
  },
  loop: true,
  nested: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination-phones",
    clickable: true,
  },
});

var swiperTablets = new Swiper(".swiper-container-tablets", {
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
  breakpoints: {
    480: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 20,
    },
  },
  loop: true,
  nested: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination-tablets",
    clickable: true,
  },
});

var swiperBrand = new Swiper(".swiper-container-brand", {
  slidesPerView: 2,
  spaceBetween: 5,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
