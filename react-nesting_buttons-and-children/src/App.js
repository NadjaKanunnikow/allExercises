import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>subscribe</Button>
      <Button>notify</Button>
      <Button>submit</Button>
      <Button>follow</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
