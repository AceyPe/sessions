var carouselBody = document.querySelector(".track");
var nextBtn = document.getElementById("next");
var backBtn = document.getElementById("prev");

const totalSlides = 3;
const slideWidth = 800;
var currentSlide = 0;

nextBtn.addEventListener("click", () => {
  if (currentSlide >= totalSlides - 1 ) {
    return;
  }
  currentSlide++;
  carouselBody.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
});

backBtn.addEventListener("click", () => {
  if (currentSlide <= 0) {
    return;
  }
  currentSlide--;
  carouselBody.style.transform = `translateX(${-currentSlide *slideWidth}px)`;
});