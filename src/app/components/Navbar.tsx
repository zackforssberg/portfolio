"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuHeight, setMenuHeight] = useState<number | undefined>(undefined);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (menuRef.current) {
      setMenuHeight(menuRef.current.scrollHeight);
    }
  }, []);

  // Function to determine if link is active
  const isActiveLink = (href: string) => {
    return pathname === href;
  };

  return (
    <>
      <nav className="bg-navbarcolor p-4 md:p-8 lg:p-12">
        <div className="flex items-center justify-between">
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

          <div className="hidden md:flex space-x-7 text-xl">
            <Link
              href="/"
              className={`text-white hover:underline underline-offset-8 ${
                isActiveLink("/") ? "underline" : ""
              }`}
            >
              Home
            </Link>
            <Link
              href="/projects"
              className={`text-white hover:underline underline-offset-8 ${
                isActiveLink("/projects") ? "underline" : ""
              }`}
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className={`text-white hover:underline underline-offset-8 ${
                isActiveLink("/contact") ? "underline" : ""
              }`}
            >
              Contact
            </Link>
          </div>
        </div>

        <div
          ref={menuRef}
          style={{
            maxHeight: isOpen ? `${menuHeight}px` : "0px",
          }}
          className={`transition-all duration-500 ease-in-out overflow-hidden md:hidden absolute left-0 w-full bg-navbarcolor`}
        >
          <div className="flex flex-col space-y-4 mt-4 ml-4 pb-3">
            <Link
              href="/"
              className={`text-white ${
                isActiveLink("/") ? "underline underline-offset-8" : ""
              }`}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/projects"
              className={`text-white ${
                isActiveLink("/projects") ? "underline underline-offset-8" : ""
              }`}
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className={`text-white ${
                isActiveLink("/contact") ? "underline underline-offset-8" : ""
              }`}
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
          <hr className="mt-auto" />
        </div>
      </nav>
      <hr className="hidden md:flex md:ml-8 md:mr-8 lg:ml-12 lg:mr-12" />
    </>
  );
}
