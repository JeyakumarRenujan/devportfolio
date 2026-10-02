import { useState, useEffect } from "react";
import { Menu, X, FileText } from "lucide-react";
import navLinks from "../../data/navLinks";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

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
    <header className="fixed top-0 left-0 w-full z-50 transition-colors duration-200 bg-[var(--glass-bg)] backdrop-blur-2xl border-b border-[var(--glass-border)] shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        {/* Brand / Logo - iOS App Icon style */}
        <a
          href="#home"
          className="flex items-center gap-2.5 group focus-visible:ring-2 focus-visible:ring-[var(--primary)] rounded-full p-1"
          aria-label="Jeyakumar Renujan Home"
        >
          <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-[#FF9500] to-[#FFB340] flex items-center justify-center text-white font-extrabold text-xs sm:text-sm shadow-md shadow-orange-500/25 group-hover:scale-105 active:scale-95 transition duration-200">
            JR
          </div>
          <span className="font-extrabold text-base sm:text-lg tracking-tight text-[var(--heading)] group-hover:text-[var(--primary)] transition duration-200">
            Jeyakumar <span className="text-[var(--primary)]">Renujan</span>
          </span>
        </a>

        {/* Desktop Menu - iOS Segmented Control style */}
        <nav
          className="hidden md:flex items-center gap-1 bg-[var(--card-solid)]/40 backdrop-blur-md p-1.5 rounded-full border border-[var(--border)] shadow-inner"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.id}
                href={link.href}
                className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold tracking-tight transition-all duration-200 active:scale-95 ${
                  isActive
                    ? "bg-[var(--primary)] text-white shadow-md shadow-orange-500/30"
                    : "text-[var(--heading)] hover:text-[var(--primary)] hover:bg-[var(--card)]/50"
                }`}
              >
                {link.title}
              </a>
            );
          })}
        </nav>

        {/* Desktop Actions: Quick CV Button */}
        <div className="flex items-center gap-2">
          {/* CV Button - iOS pill */}
          <a
            href="/Jeyakumar_Renujan_CV.pdf"
            download
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-bold tracking-tight bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)] shadow-sm shadow-orange-500/25 active:scale-95 transition-all duration-200"
          >
            <FileText className="w-3.5 h-3.5" />
            CV
          </a>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-9 h-9 rounded-full flex items-center justify-center bg-[var(--card-solid)]/40 border border-[var(--border)] text-[var(--heading)] hover:text-[var(--primary)] active:scale-90 transition duration-200"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            type="button"
          >
            {menuOpen ? <X className="w-4 h-4 text-[var(--primary)]" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer - iOS Card Popover style */}
      {menuOpen && (
        <div className="md:hidden bg-[var(--card)] backdrop-blur-2xl border-b border-[var(--border)] px-4 py-4 shadow-2xl transition-all duration-200 animate-in fade-in slide-in-from-top-2">
          <nav className="flex flex-col gap-1" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={closeMenu}
                  className={`px-4 py-2.5 rounded-2xl text-sm font-semibold tracking-tight transition duration-200 active:scale-98 ${
                    isActive
                      ? "bg-[var(--primary)] text-white font-bold"
                      : "text-[var(--heading)] hover:bg-[var(--accent)]/50"
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
              className="mt-2 flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl text-sm font-bold bg-[var(--primary)] text-white shadow-md active:scale-98 transition duration-200"
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