import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex gap-2 text-xl font-semibold m-2">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
