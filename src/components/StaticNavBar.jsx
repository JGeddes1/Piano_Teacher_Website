import React, { useState } from "react";

const StaticNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-color-navy h-28 z-50 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center h-full">
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
          className={`md:flex space-x-6 ${
            isOpen ? "block" : "hidden"
          } md:block absolute md:relative bg-color-navy w-full md:w-auto top-20 md:top-auto left-0 md:left-auto z-50`}
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
          <li>
            <a
              href="#gallery"
              className="text-white block p-4 hover:text-color-gold transition"
            >
              Projects
            </a>
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

export default StaticNavbar;
