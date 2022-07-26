const nextbtn = document.querySelector(".next");
const prevbtn = document.querySelector(".prev");

let slides = 0;

/***************************FIRST METHOD*********************************************** */
// const currentSlide = document.querySelector(".img");
// nextbtn.addEventListener("click", function () {
//   slides++;
//   if (slides <= 5) currentSlide.src = `img${slides}.jpg`;
//   else {
//     slides = 1;
//     currentSlide.src = `img${slides}.jpg`;
//   }
// });

// prevbtn.addEventListener("click", function () {
//   slides--;
//   if (slides >= 1) currentSlide.src = `img${slides}.jpg`;
//   else {
//     slides = 5;
//     currentSlide.src = `img${slides}.jpg`;
//   }
// });

/*****************************************************SECOND METHOD************************************** */
const slide = document.querySelectorAll(".carousel-item");
const slidesNumber = slide.length;

const hideSlides = function () {
  slide.forEach((x) => {
    x.classList.remove("active");
  });
  slide[slides].classList.add("active");
};

const moveforward = function () {
  if (slides === slidesNumber - 1) {
    slides = 0;
  } else {
    slides++;
  }
  hideSlides();
};

const movebackward = function () {
  if (slides === 0) slides = slidesNumber - 1;
  else slides--;
  hideSlides();
};

nextbtn.addEventListener("click", moveforward);
prevbtn.addEventListener("click", movebackward);
