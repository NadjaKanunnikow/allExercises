import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Smiley isHappy />
    </div>
  );
}
function Smiley({ isHappy }) {
  return <div>{isHappy ? "🤩" : "😔"}</div>;
}
