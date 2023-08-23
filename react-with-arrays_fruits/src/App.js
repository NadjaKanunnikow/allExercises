import Card from "./components/Card";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const fruits = [
    { id: uuidv4(), name: "🍌banana", color: "yellow" },
    { id: uuidv4(), name: "🍎apple", color: "red" },
    { id: uuidv4(), name: "🍓strawberry", color: "red" },
    { id: uuidv4(), name: "🍑peach", color: "orange" },
    { id: uuidv4(), name: "🫐blueberry", color: "blue" },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => {
        return (
          <p key={fruit.id}>
            <Card id={fruit.id} name={fruit.name} color={fruit.color} />
          </p>
        );
      })}
    </div>
  );
}
