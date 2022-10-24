let counterValue = 0;
const incBtn = document.querySelector('button[data-action="increment"]');
const decBtn = document.querySelector('button[data-action="decrement"]');
const counter = document.querySelector('#value');
incBtn.addEventListener('click', () => {
  counterValue += 1;
  counter.textContent = counterValue;
});
decBtn.addEventListener('click', () => {
  counterValue -= 1;
  counter.textContent = counterValue;
});
