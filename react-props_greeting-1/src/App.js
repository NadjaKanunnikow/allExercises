import "./styles.css";

export default function App() {
  return (
    <h1>
      <Greeting name="Mareike" />
    </h1>
  );
}

function Greeting({ name }) {
  return <h1>Hello, {name === "Mareike" ? "Coach" : name}!</h1>;
}

// function Greeting({ name }) {
//   return <h1>Hello, {name === "Mareike" ? "Coach" : name}!</h1>;
// }
