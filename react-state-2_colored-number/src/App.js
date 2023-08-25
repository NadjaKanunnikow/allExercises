import React, { useState } from "react";
import "./styles.css";
import Counter from "./components/Counter";
import ColoredNumber from "./components/ColoredNumber";

export default function App() {
  const [count, setCount] = useState(0);
  // function handleCount(number) ={
  return (
    <>
      <Counter count={count} setCount={setCount} />
      <ColoredNumber />
    </>
  );
}

// export default function App() {
//   const [counter, setCounter] = useState(0);
//   return <Counter counter={counter} setCounter={setCounter} />;
// }
