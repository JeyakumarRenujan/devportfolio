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
    <footer className="bg-slate-950 border-t border-slate-800 py-10 text-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-cyan-400">
          DevPortfolio
        </h2>

        <p className="text-gray-400 mt-3">
          Building modern web applications with passion.
        </p>

        <div className="flex gap-6 text-2xl mt-8">

          {socialLinks.map((link) => (

            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              {getIcon(link.icon)}
            </a>

          ))}

        </div>

        <p className="text-gray-500 mt-10">
          © 2026 Renujan. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;