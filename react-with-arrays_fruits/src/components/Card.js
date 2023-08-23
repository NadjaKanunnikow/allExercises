import "./Card.css";

export default function Card({ id, name, color }) {
  return (
    <>
      <p id={id}></p>
      <p style={{ backgroundColor: color }} className="card">
        {name}
      </p>
    </>
  );
}
