const root = document.getElementById("root");

export function renderElement(element) {
  const element = document.createElement("p");
  root.appendChild(element); // Append the Element to the page
}

// renderElement();

// async function getJoke() {
//   jokeSection.innerHTML = "";

//   try {
//     const response = await fetch(
//       "https://example-apis.vercel.app/api/bad-jokes/random"
//     );
//     if (!response.ok) {
//       console.error("Bad Response");
//     } else {
//       //console.log("Great! It worked.");
//       const jokeData = await response.json();
//       const joke = Joke();
//       joke.textContent = jokeData.joke;
//       jokeSection.append(joke);
//     }
//   } catch (error) {
//     console.error(error);
//   }
// }

// getJoke();

// const url = "https://swapi.dev/api/people";

// async function fetchData() {
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       console.error("Bad Response");
//     } else {
//       console.log("Great! It worked.");
//       const urlData = await response.json();
//     //   document.body.append(urlData);
//     }
//   } catch (error) {
//     console.error(error);
//   }
// }

// fetchData();

// console.log(renderElement);
