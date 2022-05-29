import data from "./data.json" assert { type: "json" };
let searchButton = document.querySelector(".search-btn");
let inputField = document.querySelector(".input-field");
let result = document.querySelector(".result");

// if the value specified by the user matches the name of a value in the data array.

searchButton.addEventListener("click", () => {
  if (inputField.value == "") {
    alert("You need to specify the name of a recipe!!");
  }
  data.map((val) => {
    if (inputField.value == val.name) {
      result.innerHTML = val.name;
    }
  });
});


//TODO Adding an event listener to the search button

searchButton.addEventListener('click', () => {
  console.log("The button has been clicked")
})