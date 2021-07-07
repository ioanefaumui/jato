// Slider control
let slideIndex = 1;
showSlides(slideIndex);

const plusSlides = (n) => {
  showSlides((slideIndex += n));
};

const currentSlide = (n) => {
  showSlides((slideIndex = n));
};

setInterval(() => {
  plusSlides(1);
}, 5000);

function showSlides(n) {
  let i = 0;
  let dots = document.getElementsByClassName("dot");
  let slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Team display
const teamButton = document.getElementById("team-button");
const teamSection = document.getElementById("team-section");

const handleTeam = () => {
  teamSection.classList.toggle("show-team");
};

teamButton.addEventListener("click", handleTeam);

// Burger menu
const headerMenu = document.getElementById("header-menu");
const menuButton = document.getElementById("menu-button");
menuButton.addEventListener("click", () => {
  headerMenu.classList.toggle("show-menu");
});
