const navBar = document.querySelector("nav");
const greenBtn = document.querySelector(".black-btn");

const scrollDown = 400;

const colorNav = () => {
  if (window.scrollY >= scrollDown) {
    navBar.classList.add("scroll-nav");
    greenBtn.classList.remove("black-btn");
    greenBtn.classList.add("green-btn");
  } else {
    navBar.classList.remove("scroll-nav");
    greenBtn.classList.remove("green-btn");
    greenBtn.classList.add("black-btn");
  }
};

window.addEventListener("scroll", colorNav);
