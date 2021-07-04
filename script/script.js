// Slider control
const slide = document.getElementById("slide");

const leftButton = document.getElementById("slide-left");

const slideUrl = [
  "url('assets/img/slide1.webp') rgba(0, 0, 0, 0.6)",
  "url('assets/img/slide2.webp') rgba(0, 0, 0, 0.6)",
  "url('assets/img/slide3.webp') rgba(0, 0, 0, 0.6)",
];

const handleSlider = (e) => {
  e.stopPropagation();
  e.target.id === "slide-left"
    ? slide.style.background.replace(
        `url("./img/slide1.webp") rgba(0, 0, 0, 0.6), ${slideUrl[1]} `
      )
    : "";
};

leftButton.addEventListener("click", handleSlider);
