// function display a corresponding image on click the carousel button

// onCarouselDotClick
// handleCarouselClick
function onCarouselDotClick(n) {
  let slides = document.getElementsByClassName("carouselImage");
  let dots = document.getElementsByClassName("carouselDot");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].style.backgroundColor = "white";
  }

  slides[n].style.display = "block";
  dots[n].style.backgroundColor = "blue";
}

let imageSlideIndex = 0;
let testimonialSlideIndex = 0;

function imageTransitionSlides() {
  let slides = document.getElementsByClassName("carouselImage");
  let dots = document.getElementsByClassName("carouselDot");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].style.backgroundColor = "white";
  }

  imageSlideIndex++;
  if (imageSlideIndex > slides.length) {
    imageSlideIndex = 1;
  }
  slides[imageSlideIndex - 1].style.display = "block";
  dots[imageSlideIndex - 1].style.backgroundColor = "blue";
}

function testimonialTransitionSlides() {
  let slides = document.getElementsByClassName("testimonialCarousel");
  let dots = document.getElementsByClassName("testimoniaCarouselDot");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].style.backgroundColor = "white";
  }

  testimonialSlideIndex++;
  if (testimonialSlideIndex > slides.length) {
    testimonialSlideIndex = 1;
  }
  slides[testimonialSlideIndex - 1].style.display = "block";
  dots[testimonialSlideIndex - 1].style.backgroundColor = "blue";
}

setInterval(imageTransitionSlides, 2000);
setInterval(testimonialTransitionSlides, 2000);
