// import Link from "next/link";

// const Navbar = () => {
//   return (
//     <nav>
//       <ul className="flex gap-2 text-xl font-semibold m-2">
//         <li>
//           <Link href="/">Home</Link>
//         </li>
//         <li>
//           <Link href="/about">About</Link>
//         </li>
//         <li>
//           <Link href="/contact">Contact</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  // State to handle the menu open/close
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-400 p-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        {/* <div className="text-white text-lg font-bold">
          <Link href="/">MyLogo</Link>
        </div> */}

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Links (Hidden on mobile, shown on desktop) */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-white">
            Home
          </Link>
          <Link href="/about" className="text-white">
            About
          </Link>
          <Link href="/contact" className="text-white">
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile Menu (Shown when hamburger is clicked) */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="flex flex-col space-y-4 mt-4">
          <Link href="/" className="text-white">
            Home
          </Link>
          <Link href="/about" className="text-white">
            About
          </Link>
          <Link href="/contact" className="text-white">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
