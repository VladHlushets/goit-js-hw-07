const fontSizeControlEl = document.getElementById('font-size-control');
const textEl = document.getElementById('text');

function inputRange(event) {
    textEl.style.fontSize = event.currentTarget.value + 'px';
}

fontSizeControlEl.addEventListener('input', inputRange);
