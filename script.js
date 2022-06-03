let containerInput = document.querySelector(".container__input");
let recipeName = document.querySelector(".recipe-name");
let recipeIngredients = document.querySelector(".recipe-ingredients");
let recipeMethod = document.querySelector(".recipe-method");

async function processInput() {
  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'recipify.p.rapidapi.com',
		'X-RapidAPI-Key': 'dde48e2d97mshd0defcb83855200p195594jsn3d9c733fe6c4'
	}
};

fetch('https://recipify.p.rapidapi.com/today-recipe', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
      // console.log(data)
    // data.map((val) => {
    //   //! Creating the tags
      // let recipeSet = document.createElement("div");
      // recipeSet.classList.add('recipes')
      // let recipeName = document.createElement("h1");
      // recipeName.classList.add('recipe-name')
      // let recipeIngredients = document.createElement("p");
      // recipeIngredients.classList.add("recipe-ingredients");
      // let recipeMethod = document.createElement("p");
      // recipeMethod.classList.add("recipe-method");

    //   /* 
    //   Adds the heading and paragraph tags to the div element
    //     <div>
    //     <h1></h1>
    //     <p></p>
    //     <p></p>
    //   </div>*/

    //   recipeSet.appendChild(recipeName);
    //   recipeSet.appendChild(recipeIngredients);
    //   recipeSet.appendChild(recipeMethod);
    //   recipeName.innerHTML = val.name;
    //   recipeMethod.innerHTML = val.description
    //   recipeIngredients.innerHTML = val.ingredients.map((n) => n.ingredient);

    //   // Adds the list of recipes within the div with id of recipes

    //   const recipes = document.getElementById("recipes");
    //   recipes.appendChild(recipeSet);
    // });
  }

processInput();
