import { useState, useEffect } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition duration-300 bg-[#0b1d49]`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="text-white text-xl font-bold"
          >
            UNACH
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/#home"
              className="text-white hover:text-accent transition"
            >
              Home
            </Link>
            <Link
              to="/#about"
              className="text-white hover:text-accent transition"
            >
              Acerca de
            </Link>
            <Link
              to="/#features"
              className="text-white hover:text-accent transition"
            >
              Introducción
            </Link>
            <Link
              to="/#stats"
              className="text-white hover:text-accent transition"
            >
              Análisis
            </Link>
          </nav>
          <div className="md:hidden">
            <button
              className="text-white focus:outline-none"
              aria-label="Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
