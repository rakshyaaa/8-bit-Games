let imageSlideIndex = 0;
let testimonialSlideIndex = 0;

imageTransitionSlides();
testimonialTransitionSlides();

function onGameCategoryItemClick(n, gametype) {
  let gt = gametype;
  let gameItems = document.getElementsByClassName("gameItem");

  for (let i = 0; i < gameItems.length; i++) {
    let gameItemType = gameItems[i].getAttribute("data-game-type");

    if (gameItemType === gt) {
      gameItems[i].style.display = "block";
    } else {
      gameItems[i].style.display = "none";
      // document.getElementById("gameComingSoon").style.display = "block";
    }
  }

  let categoryItems = document.getElementsByClassName("categoriesItem");
  for (let i = 0; i < categoryItems.length; i++) {
    categoryItems[i].style.backgroundColor = "#f2f6ff";
    categoryItems[i].style.color = "black";
  }
  categoryItems[n].style.backgroundColor = "#3366cc";
  categoryItems[n].style.color = "#ffffff";
}

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

  setTimeout(imageTransitionSlides, 2000);
}

function testimonialTransitionSlides() {
  let slides = document.getElementsByClassName("testimonialCarousel");
  let dots = document.getElementsByClassName("testimoniaCarouselDot");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].style.backgroundColor = "#f2f6ff";
  }

  testimonialSlideIndex++;
  if (testimonialSlideIndex > slides.length) {
    testimonialSlideIndex = 1;
  }
  slides[testimonialSlideIndex - 1].style.display = "block";
  dots[testimonialSlideIndex - 1].style.backgroundColor = "blue";
  setTimeout(testimonialTransitionSlides, 2000);
}

function onGameItemImageClick(imageSource, gameType, gameName) {
  document
    .getElementById("gamePopUpImageSource")
    .setAttribute("src", imageSource);
  document.getElementById("gamePopUpName").innerHTML = gameName;
  document.getElementById("gamePopUpType").innerHTML = gameType;
  document.getElementById("gameOverlay").style.display = "block";
}

function onGameOverlayClick() {
  document.getElementById("gameOverlay").style.display = "none";
}

window.addEventListener("click", (e) => {
  console.log(e.target);
  // console.log("clicked");
  if (e.target === gameOverlay) {
    document.getElementById("gameOverlay").style.display = "none";
  }
});

function onButtonNewsletterSubscribeClick() {
  document.getElementById("newsletterBlockInside").style.display = "none";
  document.getElementById("thankyouBlock").style.display = "block";
}
