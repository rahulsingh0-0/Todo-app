"use-strict";

const theme = document.querySelector("#theme-chnge-btn");
const search = document.querySelector("#input-bar");
const imgContainer = document.querySelector(".img-container");
const inputs = document.querySelector(".inp-section");
const static = document.querySelector(".static");
const h4 = document.querySelector("h4");

theme.addEventListener("click", function (e) {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    imgContainer.style.backgroundImage = 'url("/images/bg-desktop-dark.jpg")';
    theme.src = "/images/icon-sun.svg";
    search.style.backgroundColor = "rgb(15, 11, 22)";
    inputs.style.backgroundColor = "rgb(15, 11, 22)";
    static.style.backgroundColor = "rgb(15, 11, 22)";
    h4.style.color = "#4b6584";
  } else {
    document.body.classList.add("light-theme");
    theme.src = "/images/icon-moon.svg";
    search.style.backgroundColor = "white";
    inputs.style.backgroundColor = "white";
    static.style.backgroundColor = "white";
    h4.style.color = "white";
    imgContainer.style.backgroundImage = 'url("/images/bg-desktop-light.jpg")';
  }
});
