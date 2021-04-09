const counterEl = document.getElementById('value');
console.log(counterEl);

const decrBtnEl = document.querySelector('[data-action="decrement"]');
const incrBtnEl = document.querySelector('[data-action="increment"]');

let counterValue = 0;
const decrement = () => {
    counterValue -= 1;
    counterEl.textContent = counterValue;
}

const increment = () => {
    counterValue += 1;
    counterEl.textContent = counterValue;
}

decrBtnEl.addEventListener('click', () => decrement());
incrBtnEl.addEventListener('click', () => increment());

console.log(decrBtnEl.dataset.action);
