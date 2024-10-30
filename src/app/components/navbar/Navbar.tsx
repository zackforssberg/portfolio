"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuHeight, setMenuHeight] = useState<number | undefined>(undefined);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (menuRef.current) {
      setMenuHeight(menuRef.current.scrollHeight);
    }
  }, []);

  return (
    <nav className="bg-zinc-500 p-4">
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

        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-white">
            Home
          </Link>
          <Link href="" className="text-white">
            About (coming soon)
          </Link>
          <Link href="" className="text-white">
            Contact (coming soon)
          </Link>
        </div>
      </div>

      <div
        ref={menuRef}
        style={{
          maxHeight: isOpen ? `${menuHeight}px` : "0px",
        }}
        className={`transition-all duration-500 ease-in-out overflow-hidden md:hidden`}
      >
        <div className="flex flex-col space-y-4 mt-4">
          <Link href="/" className="text-white">
            Home
          </Link>
          <Link href="" className="text-white">
            About (coming soon)
          </Link>
          <Link href="" className="text-white">
            Contact (coming soon)
          </Link>
        </div>
      </div>
    </nav>
  );
}
