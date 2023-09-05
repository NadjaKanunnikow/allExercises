import { volumes } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function TheTwoTowers() {
  const slug = volumes.find(({ slug }) => slug === "the-two-towers");
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
        alt="Cover of The Two Towers"
        width={140}
        height={230}
      ></Image>
      <Link href="../volumes">All Volumes</Link>
      <p>
        <Link href="../volumes/the-fellowship-of-the-rings">previous</Link>
      </p>
      <p>
        <Link href="../volumes/the-return-of-the-king">next</Link>
      </p>
    </>
  );
}
