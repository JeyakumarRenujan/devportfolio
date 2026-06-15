import socialLinks from "../../data/socialLinks";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {

  const getIcon = (icon) => {
    switch (icon) {
      case "github":
        return <FaGithub />;
      case "linkedin":
        return <FaLinkedin />;
      case "email":
        return <FaEnvelope />;
      default:
        return null;
    }
  };

  return (
    <footer
      className="
        bg-[var(--card)]
        border-t
        border-[var(--accent)]
        py-10
        md:py-12
      "
    >

      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Logo */}
        <h2
          className="
            text-2xl
            md:text-3xl
            font-bold
            text-[var(--primary)]
          "
        >
          Portfolio
        </h2>

        {/* Description */}
        <p
          className="
            text-[var(--text)]
            text-sm
            md:text-base
            mt-4
            max-w-xl
            mx-auto
            leading-7
          "
        >
          Building modern web applications with passion and
          creating impactful digital experiences.
        </p>

        {/* Social Icons */}
        <div
          className="
            flex
            justify-center
            gap-6
            md:gap-8
            text-2xl
            md:text-3xl
            mt-8
          "
        >

          {socialLinks.map((link) => (

            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-[var(--heading)]
                hover:text-[var(--primary)]
                hover:-translate-y-1
                transition
                duration-300
              "
            >
              {getIcon(link.icon)}
            </a>

          ))}

        </div>

        {/* Divider */}
        <div className="h-px bg-[var(--accent)] my-8"></div>

        {/* Copyright */}
        <p
          className="
            text-[var(--text)]
            text-xs
            md:text-sm
          "
        >
          © 2026 Renujan. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;