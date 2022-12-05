const ratings = document.querySelectorAll(".f");
const button = document.querySelector("button");
const section = document.querySelector("section");
const selection = document.querySelector(".c");
const main = document.querySelector("main");

let no = "";
let isSelected = false;

button.addEventListener("click", () => {
  if (isSelected) {
    section.classList.add("show");
    main.classList.add("hide");
    selection.textContent = `You selected ${no} out of 5`;
  }
});

ratings.forEach((rating) => {
  rating.addEventListener("click", () => {
    clearSelection();

    rating.id = "g";
    isSelected = true;
    no = rating.textContent;
  });
});

const clearSelection = () => {
  ratings.forEach((rating) => {
    rating.id = "";
  });
};
