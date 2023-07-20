console.clear();

const form = document.querySelector('[data-js="form"]');

/* form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);
}); */

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElement = event.target.elements;

  const ageAsNumber = Number.parseInt(formElement.age.value, 10);
  const badnessAsNumber = Number.parseInt(formElement.badness.value, 10);

  console.log(formElement.age);
  console.log(formElement.age.value);
  console.log(ageAsNumber + badnessAsNumber);
});
