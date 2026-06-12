import heroData from "../../data/heroData";
import socialLinks from "../../data/socialLinks";
import { motion } from "framer-motion";
import BackgroundGlow from "./BackgroundGlow";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function Hero() {

  const getIcon = (iconName) => {
    switch (iconName) {
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
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-slate-950 text-white px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <BackgroundGlow />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center max-w-4xl"
      >
        {/* Greeting */}
        <p className="text-cyan-400 text-xl mb-4">
          Hello, I'm 👋
        </p>

        {/* Name */}
        <h1 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          {heroData.name}
        </h1>

        {/* Role */}
        <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 font-medium">
          {heroData.role}
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-lg leading-8 max-w-3xl mx-auto">
          {heroData.description}
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          <button className="px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition duration-300 hover:scale-105 shadow-lg shadow-cyan-500/30">
            View Projects
          </button>

          <button className="px-8 py-4 rounded-xl border border-cyan-400 hover:bg-cyan-500/20 transition duration-300 hover:scale-105">
            Download CV
          </button>
        </div>

        {/* Social Links */}
        <div className="mt-10 flex justify-center gap-8 text-3xl">

          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target={link.name !== "Email" ? "_blank" : undefined}
              rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
              className="text-gray-400 hover:text-cyan-400 transition duration-300 hover:scale-125"
            >
              {getIcon(link.icon)}
            </a>
          ))}

        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 text-cyan-400 text-3xl animate-bounce">
          ↓
        </div>

      </motion.div>
    </section>
  );
}

export default Hero;