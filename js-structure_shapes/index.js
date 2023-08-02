console.clear();

import { getRandomColor } from "./utils/randomColor.js";

import Circle from "./components/Circle/Circle.js";
import Pentagon from "./components/Pentagon/Pentagon.js";
import Square from "./components/Square/Square.js";

const root = document.getElementById("root");

const circleElement = Circle();
root.append(circleElement);

const pentagonElement = Pentagon();
root.append(pentagonElement);

const squareElement = Square();
root.append(squareElement);

// root.append(circle, square, pentagon);
