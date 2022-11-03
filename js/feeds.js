let navButton = document.querySelector(".nav-bar > i");
let navBarOptions = document.querySelector(".nav-bar ul");
navButton.addEventListener("click", () => {
  navBarOptions.classList.toggle("collapse");
});
let userControlButton = document.querySelector(
  ".main-contents > i.user-control-i"
);
let userControlOption = document.querySelector(".main-contents .user-control");
let hiddenUserControlOption = true;
userControlButton.addEventListener("click", () => {
  if (hiddenUserControlOption) {
    userControlOption.classList.remove("hidden");
    userControlButton.style.left = "19%";
  } else {
    userControlOption.classList.add("hidden");
    userControlButton.style.left = "0px";
  }
  hiddenUserControlOption = !hiddenUserControlOption;
});

let recommendedButton = document.querySelector(
  ".main-contents > i.recommended-i"
);
let recommendedOption = document.querySelector(".main-contents .recommended");
let hiddenRecommendedOption = true;
recommendedButton.addEventListener("click", () => {
  if (hiddenRecommendedOption) {
    recommendedOption.classList.remove("hidden");
    recommendedButton.style.right = "19%";
  } else {
    recommendedOption.classList.add("hidden");
    recommendedButton.style.right = "0px";
  }
  hiddenRecommendedOption = !hiddenRecommendedOption;
});
