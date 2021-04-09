const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const ingredientsEl = document.getElementById('ingredients');

const createIngredientsList = (ingredient) => {
    const itemIngredients = document.createElement('li');
    itemIngredients.textContent = ingredient;

    return itemIngredients;
};

const ingredientsList = ingredients.map(element => createIngredientsList(element));
// console.log(ingredientsList);
ingredientsEl.append(...ingredientsList);