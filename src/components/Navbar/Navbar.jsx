function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/10 border-b border-white/20 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-cyan-400">
          Portfolio
        </h1>

        <ul className="hidden md:flex gap-8 text-white">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;