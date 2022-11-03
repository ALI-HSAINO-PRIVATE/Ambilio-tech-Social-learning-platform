let navButton = document.querySelector(".nav-bar > i");
let navBarOptions = document.querySelector(".nav-bar ul");
navButton.addEventListener("click", () => {
  navBarOptions.classList.toggle("collapse");
});
let userControlButton = document.querySelector(
  ".main-contents > i.user-control-i"
);
