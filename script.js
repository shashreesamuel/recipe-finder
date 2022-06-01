let containerInput = document.querySelector(".container__input");
let recipeName = document.querySelector('.recipe-name')
let recipeIngredients = document.querySelector('.recipe-ingredients')
let recipeMethod = document.querySelector('.recipe-method')

async function processInput() {
  if (containerInput.value == "") {
    console.log("You need to specify a recipe to search for");
  } else {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "recipesapi2.p.rapidapi.com",
        "X-RapidAPI-Key": "dde48e2d97mshd0defcb83855200p195594jsn3d9c733fe6c4",
      },
    };

    const data = await fetch(
      `https://recipesapi2.p.rapidapi.com/recipes/${containerInput.value}`,
      options
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
        // recipeName.textContent = data.name;
        // recipeMethod.innerHTML = data.instructions;
        // recipeIngredients.innerHTML = data.ingredients;
    }
}

processInput()
