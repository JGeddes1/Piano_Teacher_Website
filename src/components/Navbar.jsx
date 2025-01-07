import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const [isLessonsOpen, setIsLessonsOpen] = useState(false); // Dropdown state

  useEffect(() => {
    const handleScroll = () => {
      // Set "isScrolled" to true if the user scrolls more than 50px
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Attach a scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 p-4 transition-all duration-300 ${
        isScrolled ? "bg-color-navy shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center h-20">
        {/* Logo */}
        <div className="text-black text-2xl font-bold h-full">
          <a href="/" className="h-full">
            <img
              src="src/assets/musicnote.jpg"
              alt="Logo"
              className="h-full w-auto object-contain"
            />
          </a>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="text-color-gold md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Menu Items */}
        <ul
          className={`md:flex space-x-6 transition-all duration-300 ${
            isScrolled ? "bg-color-navy shadow-lg" : "bg-transparent"
          } ${isOpen ? "block" : "hidden"} 
          md:block absolute md:relative w-full md:w-auto top-28 md:top-auto left-0 md:left-auto z-50`}
        >
          <li>
            <a
              href="/"
              className="text-white block p-4 hover:text-color-gold transition"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-white block p-4 hover:text-color-gold transition"
            >
              About
            </a>
          </li>

          {/* Lessons Dropdown */}
          <li className="relative">
            <button
              onClick={() => setIsLessonsOpen(!isLessonsOpen)}
              className="text-white block p-4 hover:text-color-gold transition focus:outline-none md:cursor-pointer"
            >
              Lessons
            </button>
            <ul
              className={`absolute left-0 mt-1 md:mt-2 md:absolute bg-color-navy md:shadow-lg rounded-lg overflow-hidden transition-all duration-300 ${
                isLessonsOpen ? "block" : "hidden"
              }`}
            >
              <li>
                <a
                  href="/OnlineLesson.jsx"
                  className="block px-4 py-2 text-white hover:bg-color-gold hover:text-color-navy transition"
                >
                  Online Lessons
                </a>
              </li>
              <li>
                <a
                  href="/in-person-lessons"
                  className="block px-4 py-2 text-white hover:bg-color-gold hover:text-color-navy transition"
                >
                  In-Person Lessons
                </a>
              </li>
            </ul>
          </li>

          <li>
            <a
              href="#contact"
              className="text-white block p-4 hover:text-color-gold transition"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
