import Link from "next/link";
import { Search } from "./Search";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white py-8 px-6 flex justify-between shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px]">
      <Link href="/">
        <h1 className="text-3xl">This is a random header</h1>
      </Link>

      <Search />

      <nav className="flex items-center">
        <ul className=" text-lg flex gap-4">
          <Link href="/">
            <li>About</li>
          </Link>
          <Link href="/">
            <li>Contact</li>
          </Link>
          <Link href="/">
            <li>Service</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
