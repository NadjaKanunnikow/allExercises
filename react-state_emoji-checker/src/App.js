import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [code, setCode] = useState("");
  // let code = "?";
  const validCode = "🐡🐠🐋";

  function handleClick(event) {
    setCode(code + event.target.textContent);
  }

  return (
    <div className="container">
      <div className="button-container">
        <button type="button" onClick={handleClick}>
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button type="button" onClick={handleClick}>
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button type="button" onClick={handleClick}>
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>{" "}
      </div>

      <button
        type="button"
        onClick={() => {
          setCode("");
        }}
      >
        Reset
      </button>
      <p>Enterded code: {code === "" ? "No code entered so far" : code}</p>
      {code === validCode && <p>Valid code!</p>}
    </div>
  );
}
