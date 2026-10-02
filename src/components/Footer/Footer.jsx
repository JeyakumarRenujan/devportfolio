import { ArrowUp, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import navLinks from "../../data/navLinks";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[var(--card)] backdrop-blur-2xl border-t border-[var(--border)] py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Brand & Subtitle */}
          <div className="space-y-1">
            <a
              href="#home"
              className="text-xl sm:text-2xl font-extrabold tracking-tight text-[var(--heading)] hover:text-[var(--primary)] transition duration-200 inline-block"
            >
              Jeyakumar <span className="text-[var(--primary)]">Renujan</span>
            </a>
            <p className="text-xs sm:text-sm text-[var(--text-muted)]">
              AI/ML & Full-Stack Developer • BSc Eng Undergrad at University of Jaffna
            </p>
          </div>

          {/* Social Icons & Back to Top (iOS Round Action Buttons) */}
          <div className="flex items-center gap-2.5">
            <a
              href="https://github.com/JeyakumarRenujan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-[var(--card-solid)]/60 border border-[var(--border)] text-[var(--heading)] hover:text-[var(--primary)] hover:border-[var(--primary)] active:scale-90 transition duration-200"
            >
              <FaGithub className="w-4 h-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/jeyakumarrenujan03"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-[var(--card-solid)]/60 border border-[var(--border)] text-[var(--heading)] hover:text-[var(--primary)] hover:border-[var(--primary)] active:scale-90 transition duration-200"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>

            <a
              href="mailto:renujanrenu5@gmail.com"
              aria-label="Send Email"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-[var(--card-solid)]/60 border border-[var(--border)] text-[var(--heading)] hover:text-[var(--primary)] hover:border-[var(--primary)] active:scale-90 transition duration-200"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              type="button"
              aria-label="Back to Top"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)] active:scale-90 transition duration-200 ml-1 shadow-md shadow-orange-500/25"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Navigation Quick Links (iOS Capsule Hover Links) */}
        <div className="flex flex-wrap justify-center gap-y-2 gap-x-6 text-xs sm:text-sm font-semibold text-[var(--text)] border-t border-[var(--border)] pt-6">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="hover:text-[var(--primary)] transition duration-150"
            >
              {link.title}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-[var(--text-muted)] pt-2">
          © {new Date().getFullYear()} Jeyakumar Renujan. Built with React & Tailwind CSS. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;