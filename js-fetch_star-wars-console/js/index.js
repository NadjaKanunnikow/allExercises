import { renderElement } from "./utils.js";

console.clear();
// console.log(renderElement);

const url = "https://swapi.dev/api/people";

async function fetchData() {
  try {
    const response = await fetch("https://swapi.dev/api/people");
    if (!response.ok) {
      console.error("Bad Response");
    } else {
      console.log("Great, it worked!");
      const starWarsData = await response.json();
      const starWarsElement = renderElement(element);
      starWarsElement.textContent = starWarsData.starWarsElement;
    }
  } catch (error) {
    console.error(error);
  }
}
fetchData();
