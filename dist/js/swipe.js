var swiperProducts = new Swiper(".swiper-container-products", {
  navigation: {
    nextEl: ".swiper-button-next-products",
    prevEl: ".swiper-button-prev-products",
  },
  spaceBetween: 50,
});
var swiperLaptops = new Swiper(".swiper-container-laptops", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
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
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  nested: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination-phones",
    clickable: true,
  },
});

var swiperTablets = new Swiper(".swiper-container-tablets", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
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
