"use-strict";

const theme = document.querySelector("#theme-chnge-btn");
const search = document.querySelector("#input-bar");
const imgContainer = document.querySelector(".img-container");
const inputs = document.querySelector(".inp-section");
const static = document.querySelector(".static");
const h4 = document.querySelector("h4");
const h3 = document.querySelector("h3");
const p = document.querySelectorAll("p");
let total = document.querySelector("#tot");
const deleteBtn = document.querySelector("#delete");
const contentArea = document.querySelector(".inp1");

total = 0;
let paragraph;

contentArea.textContent = "";
h3.textContent = `${total} Items left `;

// taking inputs from user
function app() {
  document.body.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      let value = search.value;
      if (value === "") {
        alert("Write Something");
        return;
      }
      search.value = "";
      content = document.createElement("p");
      paragraph = content;
      content.classList.add("check");
      content.innerHTML = ` ${value}`;
      contentArea.prepend(content);
      total++;
      h3.innerHTML = `${total} Items left `;
    }
  });
}
app();

// delete functionality
contentArea.addEventListener("click", function (e) {
  e.target.remove();
  total--;
  h3.innerHTML = `${total} Items left `;
  search.value = "";
});



// theme functionality
const themeChanger = function () {
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
      h4.style.color = "#636e72";
      imgContainer.style.backgroundImage =
        'url("/images/bg-desktop-light.jpg")';
    }
  });
};
themeChanger();
