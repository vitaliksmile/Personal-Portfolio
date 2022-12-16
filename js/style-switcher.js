// toggle style switcher

const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});

// hide style switcher on scroll

window.addEventListener("scroll", () => {
  if (document.querySelector(".style-switcher").classList.toggle("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
  }
});

// THEME COLORS

const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
  alternateStyles.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}

// theme light and dark mode

const dayHight = document.querySelector(".day-night");
dayHight.addEventListener("click", () => {
  dayHight.querySelector("i").classList.toggle("fa-sun");
  dayHight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
});
window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    dayHight.querySelector("i").classList.add("fa-sun");
  } else {
    dayHight.querySelector("i").classList.add("fa-moon");
  }
});
