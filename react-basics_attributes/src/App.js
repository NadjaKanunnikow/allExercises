import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Article />
    </div>
  );
}

function Article() {
  return (
    <article className="article">
      <h2 className="article_title">React!</h2>
      <label htmlFor="name">Name:</label>
      <input id="name"></input>
      <a className="article_link" href="https://de.wikipedia.org/wiki/React">
        React
      </a>
    </article>
  );
}
