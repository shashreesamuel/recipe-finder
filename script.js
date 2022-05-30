import data from "./data.json" assert { type: "json" };
let inputField = document.querySelector(".input-field");
let result = document.querySelector(".result");
let errorMessage = document.querySelector(".error-message");
let searchButton = document.querySelector(".search-btn");
let unorderedList = document.querySelector("ul");
let closeBtn = document.querySelector(".close-btn");
// if the value specified by the user matches the name of a value in the data array.

searchButton.addEventListener("click", () => {
  if (inputField.value == "") {
    alert("You need to specify the name of a recipe!!");
  }
  data.map((val) => {
    if (inputField.value == val.name) {
      result.innerHTML = val.name;
    } else {
      errorMessage.innerHTML = `There is no recipe with the name of "${inputField.value}"`;
      setTimeout(function () {
        errorMessage.innerHTML = "";
      }, 5000);
    }
  });
});

function removeItem() {
  unorderedList.removeChild(result);
}

// ? Remove Item Function

closeBtn.addEventListener("click", () => {
  removeItem();
});

// ? Add Item Function
