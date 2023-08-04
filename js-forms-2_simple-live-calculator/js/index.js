console.clear();

const firstInput = document.querySelector('[data-js="firstValue"]');
const secondInput = document.querySelector('[data-js="secondValue"]');
const result = document.querySelector('[data-js="result"]');

const firstInputAsNumber = Number.parseInt(firstInput.value, 10);
const secondInputAsNumber = Number.parseInt(secondInput.value, 10);

firstInput.addEventListener("input", () => {
  result = firstInputAsNumber + secondInputAsNumber;
});

secondInput.addEventListener("input", () => {});
