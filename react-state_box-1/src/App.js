import { useState } from "react";
import "./styles.css";

export default function App() {
  const [isActive, setIsActive] = useState(false);
  // let isActive = false;

  function handleClick() {
    setIsActive(!isActive);

    // isActive = !isActive;
    // Check that the value changes correctly.
    console.log(isActive);
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>
        {`${isActive ? "Activate" : "Deactivate"}`}
      </button>
    </main>
  );
}
