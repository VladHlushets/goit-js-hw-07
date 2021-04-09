const categoriesEl = document.querySelectorAll('.item');
// console.log(categoriesEl);

const numberOfCategories = categoriesEl.length;
console.log(`'В списке ${categoriesEl.length} категории.'`);


categoriesEl.forEach(element => {

const titleText = element.firstElementChild.textContent;
// console.log(titleText);
const amountOfElements = element.lastElementChild.children.length;
console.log(`Категория: ${titleText}\nКоличество элементов: ${amountOfElements}`)

})