import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  const handleLinkClick = (url) => {
    closeNavbar();
    router.push(url);
  };

  return (
    <nav className=" p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white">
          <p className="text-lg font-bold uppercase">the Insurrection </p>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="/">
            <p className="text-white cursor-pointer" onClick={closeNavbar}>
              Home
            </p>
          </Link>
          <Link href="/about">
            <p className="text-white cursor-pointer" onClick={closeNavbar}>
              About
            </p>
          </Link>
          <Link href="/cast">
            <p className="text-white cursor-pointer" onClick={closeNavbar}>
              Cast
            </p>
          </Link>
        </div>
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleNavbar}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2">
          <p
            className="block text-white py-2 cursor-pointer"
            onClick={() => handleLinkClick("/")}
          >
            Home
          </p>
          <p
            className="block text-white py-2 cursor-pointer"
            onClick={() => handleLinkClick("/about")}
          >
            About
          </p>
          <p
            className="block text-white py-2 cursor-pointer"
            onClick={() => handleLinkClick("/cast")}
          >
            Cast
          </p>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
