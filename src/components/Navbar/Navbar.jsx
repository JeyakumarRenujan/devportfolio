import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      bg-[var(--bg)]
      border-b
      border-[var(--accent)]
      shadow-md
    "
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <a
          href="#home"
          className="
          text-3xl
          font-bold
          text-[var(--primary)]
          hover:text-[var(--secondary)]
          transition
        "
        >
          Portfolio
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium text-[var(--heading)]">

          <li><a href="#home" className="hover:text-[var(--primary)]">Home</a></li>

          <li><a href="#about" className="hover:text-[var(--primary)]">About</a></li>

          <li><a href="#skills" className="hover:text-[var(--primary)]">Skills</a></li>

          <li><a href="#projects" className="hover:text-[var(--primary)]">Projects</a></li>

          <li><a href="#experience" className="hover:text-[var(--primary)]">Experience</a></li>

          <li><a href="#education" className="hover:text-[var(--primary)]">Education</a></li>

          <li><a href="#contact" className="hover:text-[var(--primary)]">Contact</a></li>

        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="
          md:hidden
          text-2xl
          text-[var(--primary)]
        "
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <div
          className="
          md:hidden
          bg-[var(--card)]
          border-t
          border-[var(--accent)]
          shadow-lg
        "
        >

          <ul className="flex flex-col text-center py-4">

            <li className="py-3">
              <a href="#home" onClick={closeMenu}>Home</a>
            </li>

            <li className="py-3">
              <a href="#about" onClick={closeMenu}>About</a>
            </li>

            <li className="py-3">
              <a href="#skills" onClick={closeMenu}>Skills</a>
            </li>

            <li className="py-3">
              <a href="#projects" onClick={closeMenu}>Projects</a>
            </li>

            <li className="py-3">
              <a href="#experience" onClick={closeMenu}>Experience</a>
            </li>

            <li className="py-3">
              <a href="#education" onClick={closeMenu}>Education</a>
            </li>

            <li className="py-3">
              <a href="#contact" onClick={closeMenu}>Contact</a>
            </li>

          </ul>

        </div>

      )}

    </nav>
  );
}

export default Navbar;