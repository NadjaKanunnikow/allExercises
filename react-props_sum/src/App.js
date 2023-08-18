import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Sum valueA={5} valueB={5} />
    </div>
  );
}

function Sum({ valueA, valueB }) {
  const sum = valueA + valueB;

  return (
    <div>
      <h1>
        {valueA} + {valueB} = {sum}
      </h1>
    </div>
  );
}
