const inputEl = document.getElementById('name-input');
const nameEl = document.getElementById('name-output');

const inputRange = ({ target: { value }}) => {
    nameEl.textContent = value || 'незнакомец';
}

inputEl.addEventListener('input', inputRange);