import { volumes } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

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
      <Image
        src={slug.cover}
        alt="Cover of The Return of the King"
        width={140}
        height={230}
      ></Image>
      <Link href="../volumes">All Volumes</Link>
      <p>
        <Link href="../volumes/the-two-towers">previous</Link>
      </p>
    </>
  );
}
