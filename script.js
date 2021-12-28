console.log("fix");

// function display a corresponding image on click the carousel button

// onCarouselDotClick
// handleCarouselClick
function carouselSlide(n) {
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
let slideIndex = 0;

function transitionSlides() {
  let slides = document.getElementsByClassName("carouselImage");
  let dots = document.getElementsByClassName("carouselDot");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].style.backgroundColor = "white";
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].style.backgroundColor = "blue";
}

setInterval(transitionSlides, 2000);
