console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  const formElement = event.target.elements;
  formElement.tos.checked === false ? showTosError() : hideTosError();
  formElement.tos.checked === false ? null : alert("Form submitted");
  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  // alert("Form submitted");
});
