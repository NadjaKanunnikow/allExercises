import { volumes } from "@/lib/data";
import Link from "next/link";

export default function TheReturnOfTheKing() {
  const slug = volumes.find(({ slug }) => slug === "the-return-of-the-king");
  return (
    <>
      <h1>{slug.title}</h1>
      <p>{slug.description}</p>
      <ul>
        {slug.books.map((book) => {
          return (
            <li key={book.title}>
              {book.ordinal}: {book.title}
            </li>
          );
        })}
      </ul>
      <Link href="../volumes">All Volumes</Link>
    </>
  );
}
