console.clear();

const main = document.querySelector('[data-js="main"]');

// Part 1: Creating a Select Input

const languages = {
  DE: "German",
  EN: "English",
  ES: "Spanish",
  FR: "French",
  IT: "Italian",
  NL: "Dutch",
  PT: "Portuguese",
  RU: "Russian",
  ZH: "Chinese",
};

const select = document.createElement("select");
select.name = "languages";
main.append(select);

// for (const myObjectElements in languages) {
//   if (myObjectElements === "English");
//   console.log("thats right");
// }
// --v-- write/change code here --v--
for (const myObjectElements in languages) {
  // CREATE ELEMENT OPTION:
  const newOption = document.createElement("option");
  // APPEND OPTION-ELEMENT:
  select.append(newOption);
  // CHANGE TEXT CONTENT:
  newOption.textContent = languages[myObjectElements];
}
// --^-- write/change code here --^--

// Part 2: Creating a Navigation Bar

const nav = {
  home: { href: "/home", text: "Home" },
  about: { href: "/about", text: "About" },
  contact: { href: "/contact", text: "Contact" },
};

const navElement = document.createElement("nav");
const ul = document.createElement("ul");
main.append(navElement);
navElement.append(ul);

// --v-- write/change code here --v--

// --^-- write/change code here --^--
