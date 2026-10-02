import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X, FileText } from "lucide-react";
import navLinks from "../../data/navLinks";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isDark, setIsDark] = useState(true);

  // Sync theme state with DOM
  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // Scrollspy for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-colors duration-200 bg-[var(--glass-bg)] backdrop-blur-md border-b border-[var(--border)] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 group focus-visible:ring-2 focus-visible:ring-[var(--primary)] rounded-lg p-1"
          aria-label="Jeyakumar Renujan Home"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-orange-600 to-amber-500 flex items-center justify-center text-white font-extrabold text-sm shadow-md shadow-orange-500/20 group-hover:scale-105 transition duration-200">
            JR
          </div>
          <span className="font-extrabold text-lg sm:text-xl tracking-tight text-[var(--heading)] group-hover:text-[var(--primary)] transition duration-200">
            Jeyakumar <span className="text-[var(--primary)]">Renujan</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.id}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition duration-200 ${
                  isActive
                    ? "text-[var(--primary)] bg-[var(--accent)]"
                    : "text-[var(--heading)] hover:text-[var(--primary)] hover:bg-[var(--accent)]/50"
                }`}
              >
                {link.title}
              </a>
            );
          })}

          <div className="h-5 w-px bg-[var(--border)] mx-2" aria-hidden="true" />

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-[var(--heading)] hover:text-[var(--primary)] hover:bg-[var(--accent)] transition duration-200"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            type="button"
          >
            {isDark ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
          </button>

          {/* Quick CV Button */}
          <a
            href="/Jeyakumar_Renujan_CV.pdf"
            download
            className="ml-2 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)] shadow-sm hover:shadow-orange-500/20 transition duration-200"
          >
            <FileText className="w-3.5 h-3.5" />
            CV
          </a>
        </nav>

        {/* Mobile Actions: Theme Toggle + Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-[var(--heading)] hover:text-[var(--primary)] hover:bg-[var(--accent)] transition duration-200"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            type="button"
          >
            {isDark ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-lg text-[var(--heading)] hover:text-[var(--primary)] hover:bg-[var(--accent)] transition duration-200"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            type="button"
          >
            {menuOpen ? <X className="w-6 h-6 text-[var(--primary)]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="md:hidden bg-[var(--card)] border-b border-[var(--border)] px-4 py-5 shadow-xl transition-all animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-1.5" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={closeMenu}
                  className={`px-4 py-3 rounded-xl text-base font-semibold transition duration-200 ${
                    isActive
                      ? "text-[var(--primary)] bg-[var(--accent)]"
                      : "text-[var(--heading)] hover:text-[var(--primary)] hover:bg-[var(--accent)]/50"
                  }`}
                >
                  {link.title}
                </a>
              );
            })}
            <a
              href="/Jeyakumar_Renujan_CV.pdf"
              download
              onClick={closeMenu}
              className="mt-3 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)] transition duration-200"
            >
              <FileText className="w-4 h-4" />
              Download CV
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;