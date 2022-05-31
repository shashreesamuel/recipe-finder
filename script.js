let containerInput = document.querySelector(".container__input");
let recipeName = document.querySelector('.recipe-name')
let recipeIngrdients = document.querySelector('.recipe-ingredients')
let recipeMethod = document.querySelector('.recipe-method')

async function processInput() {
  if (containerInput.value == "") {
    console.log("You need to specify a recipe to search for");
  } else {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "recipe-by-api-ninjas.p.rapidapi.com",
        "X-RapidAPI-Key": "dde48e2d97mshd0defcb83855200p195594jsn3d9c733fe6c4",
      },
    };

    const data = await fetch(
      `https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query=${containerInput.value}&offset=1`,
      options
    )
      .then((response) => response.json())
      .catch(err => console.error(err));

      data.map(({title, ingredients, instructions}) => {
        recipeName.innerHTML = title;
        recipeMethod.innerHTML = instructions
        recipeIngrdients.innerHTML = ingredients;
      })
    }
}

processInput()
