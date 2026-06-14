function Navbar() {
  return (
    <nav
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        backdrop-blur-md
        bg-[var(--bg)]
        border-b
        border-[var(--accent)]
        shadow-lg
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
            duration-300
          "
        >
          Portfolio
        </a>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-[var(--heading)]">

          <li>
            <a
              href="#home"
              className="hover:text-[var(--secondary)] transition duration-300"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="hover:text-[var(--secondary)] transition duration-300"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="hover:text-[var(--secondary)] transition duration-300"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="hover:text-[var(--secondary)] transition duration-300"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#experience"
              className="hover:text-[var(--secondary)] transition duration-300"
            >
              Experience
            </a>
          </li>

          <li>
            <a
              href="#education"
              className="hover:text-[var(--secondary)] transition duration-300"
            >
              Education
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-[var(--secondary)] transition duration-300"
            >
              Contact
            </a>
          </li>

        </ul>

      </div>
    </nav>
  );
}

export default Navbar;