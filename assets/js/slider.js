const slideContainer = document.querySelector(".viewport");
const slides = document.querySelectorAll(".brand-item");
const slide = document.querySelector(".partner");

let currentSlide = 1;

//const firstClone = slides[0].cloneNode(true);
//const lastClone = slides[slides.length - 1].cloneNode(true);

// slide.append(firstClone);
// slide.prepend(lastClone);

const slideWidth = slides[currentSlide].clientWidth;
//console.log(slideWidth);

const startSlide = () => {
  setInterval(() => {
    currentSlide++;
    slide.style.transform = `translateX(${-200 * currentSlide}px)`;
    slide.style.transitionDuration = "0.7s";
    if (currentSlide === slides.length - 1) {
      slide.style.transform = `translateX(${-200 * currentSlide}px)`;
      slide.style.transitionDuration = "0.7s";
      currentSlide = 1;
    }
  }, 3000);
};

// slide.addEventListener('transitionend', () => {

// })

//startSlide();

document.addEventListener("DOMContentLoaded", () => {
  const product = document.querySelectorAll(".product-set");
  const btnNext = document.querySelector(".arrowright");
  const btnPrev = document.querySelector(".arrowright");
  let index = 0;

  // for (let i = 1; i < product.length; i++) {
  //   product[i].style.display = "none";
  // }

  btnPrev.addEventListener("click", () => {
    if (index > 0) {
      index--;
      console.log(product[index]);
      product[index + 1].style.display = "none";
      product[index].style.display = "block";
    } else {
      return;
    }
    console.log(index);
  });

  btnNext.addEventListener("click", () => {
    if (index < product.length) {
      index++;
      console.log(product[index]);
      product[index - 1].style.display = "none";
      product[index].style.display = "block";
    } else {
      return;
    }
    console.log(index);
  });
});
