const colors = [
  "#343434",
  "#7FB5B5",
  "#633A34",
  "#354D73",
  "#F3A505",
  "#2A6478",
  "#CC0605",
  "#497E76",
  "#D36E70",
  "#FF2301",
  "#4C514A",
  "#2E3A23",
  "#5D9B9B",
  "#474A51",
  "#EFA94A",
  "#4D5645",
  "#606E8C",
  "#A5A5A5",
];

// <<<<<<<<<<<TASK 1 >>>>>>>>>>>>>>>>
// colors.forEach((color) => {
//   // CREATE DIV_ELEMENTS:
//   const divElement = document.createElement("div");
//   //ADD CSS-CLASS:
//   divElement.classList.add("color-box");
//   //APPEND DIV_ELEMENTS TO XXX
//   document.body.append(divElement);
//   //FUNCTION THAT ASSIGN THE BACKGROUND_COLOR FROM THE ARRAY:
//   divElement.style.backgroundColor = color;
// });

// <<<<<<<<<<<TASK 2 >>>>>>>>>>>>>>>>
function renderColorBox(color) {
  // CREATE DIV_ELEMENTS:
  const divElement = document.createElement("div");
  //ADD CSS-CLASS:
  divElement.classList.add("color-box");
  //APPEND DIV_ELEMENTS TO XXX
  document.body.append(divElement);
  //ASSIGN THE BACKGROUND_COLOR FROM THE ARRAY:
  divElement.style.backgroundColor = color;
}

// colors.forEach((color) => {
//   renderColorBox(color);
// });

colors.forEach(renderColorBox);
