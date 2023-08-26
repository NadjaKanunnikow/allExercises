import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  function handleAddClick() {
    setCount(count + 1);
  }
  function handleMinusClick() {
    setCount(count - 1);
  }
  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            handleMinusClick();
            console.log("🤔");
          }}
        >
          -
        </button>
        <button
          type="button"
          onClick={() => {
            handleAddClick();
            console.log("🤔");
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
