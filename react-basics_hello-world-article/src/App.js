import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <HelloWorldArticle />
    </div>
  );
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>My feelings about react?</h1>
      <p>I am thrilled!</p>
    </article>
  );
}
