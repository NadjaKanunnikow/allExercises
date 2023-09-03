import { introduction } from "@/lib/data";
import { volumes } from "@/lib/data";
import Link from "next/link";

export default function Volumes() {
  const slug = volumes.find(({ slug }) => {
    slug === "the-fellowship-of-the-ring";
  });
  return (
    <>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Vomunes</h2>
      <ul>
        <li>
          <Link href="volumes/the-fellowship-of-the-rings">
            {slug.title}
            The Fellowship of the Ring
          </Link>
        </li>
        <li>
          <Link href="volumes/the-two-towers">The Two Towers</Link>
        </li>
        <li>
          <Link href="volumes/the-return-of-the-king">
            The Return of the King
          </Link>
        </li>
      </ul>
    </>
  );
}
