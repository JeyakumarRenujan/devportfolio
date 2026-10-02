import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Download, Mail, Sparkles, Terminal, Code2, Brain } from "lucide-react";
import heroData from "../../data/heroData";
import profilePhoto from "../About/hero.jpeg";

function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const animProps = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
      };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Subtle Ambient Background Gradient Glows */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-orange-500/15 via-amber-500/10 to-transparent blur-[120px] pointer-events-none -z-10 rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Content (7 cols) */}
        <motion.div {...animProps} className="lg:col-span-7 text-center lg:text-left space-y-6">
          {/* Currently Working On Status Pill */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-[var(--card)] border border-[var(--border)] text-[var(--heading)] shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-[var(--text-muted)] font-normal">Active Research:</span>
            <span className="font-semibold text-[var(--primary)] truncate max-w-[280px] sm:max-w-md">
              MuRIL Code-Mixed Sentiment & Intent
            </span>
          </div>

          {/* Main Headline & Full Name */}
          <div className="space-y-3">
            <p className="text-sm sm:text-base font-bold tracking-widest uppercase text-[var(--primary)]">
              Hello, I am
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[var(--heading)] leading-[1.1]">
              {heroData.fullName}
            </h1>
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--secondary)] flex items-center justify-center lg:justify-start gap-2">
              <Terminal className="w-6 h-6 text-[var(--primary)] hidden sm:inline-block" />
              {heroData.role}
            </h2>
          </div>

          {/* Value Statement */}
          <p className="text-base sm:text-lg text-[var(--text)] leading-relaxed max-w-2xl mx-auto lg:mx-0">
            {heroData.valueStatement}
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
            {/* View Projects */}
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)] shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 transition duration-200"
            >
              <Code2 className="w-4 h-4" />
              View Projects
              <ArrowDown className="w-4 h-4 ml-0.5" />
            </a>

            {/* Download CV */}
            <a
              href="/Jeyakumar_Renujan_CV.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base bg-[var(--card)] text-[var(--heading)] border border-[var(--border)] hover:border-[var(--primary)] hover:text-[var(--primary)] hover:-translate-y-0.5 shadow-sm transition duration-200"
            >
              <Download className="w-4 h-4 text-[var(--primary)]" />
              Download CV
            </a>

            {/* Contact */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base bg-transparent text-[var(--heading)] border border-[var(--border)] hover:bg-[var(--accent)] hover:border-[var(--primary)] hover:-translate-y-0.5 transition duration-200"
            >
              <Mail className="w-4 h-4 text-[var(--secondary)]" />
              Contact
            </a>
          </div>

          {/* Institutional Credential */}
          <p className="text-xs sm:text-sm text-[var(--text-muted)] pt-2">
            🎓 {heroData.subRole}
          </p>
        </motion.div>

        {/* Right Column: Visual Photo Card with AI/Tech Floating Badges (5 cols) */}
        <motion.div
          {...(shouldReduceMotion
            ? {}
            : {
                initial: { opacity: 0, scale: 0.95 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 0.6, delay: 0.1 },
              })}
          className="lg:col-span-5 flex justify-center items-center relative"
        >
          <div className="relative w-64 sm:w-72 md:w-80 aspect-square group">
            {/* Ambient Glow Ring */}
            <div
              className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-orange-500 to-amber-500 opacity-30 blur-xl group-hover:opacity-50 transition duration-500"
              aria-hidden="true"
            />

            {/* Image Card Container */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[var(--card)] border-2 border-[var(--border)] group-hover:border-[var(--primary)]/60 shadow-2xl transition duration-300">
              <img
                src={profilePhoto}
                alt="Jeyakumar Renujan profile"
                loading="eager"
                className="w-full h-full object-cover object-top filter contrast-[1.02] group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--card)] via-transparent to-transparent opacity-40" />
            </div>

            {/* Floating Tech Badge 1: AI / NLP */}
            <div className="absolute -top-3 -right-3 bg-[var(--card)] border border-[var(--border)] shadow-lg rounded-xl px-3 py-1.5 flex items-center gap-1.5 text-xs font-bold text-[var(--heading)] animate-bounce duration-1000">
              <Brain className="w-3.5 h-3.5 text-[var(--primary)]" />
              AI & NLP
            </div>

            {/* Floating Tech Badge 2: Full-Stack */}
            <div className="absolute -bottom-3 -left-3 bg-[var(--card)] border border-[var(--border)] shadow-lg rounded-xl px-3 py-1.5 flex items-center gap-1.5 text-xs font-bold text-[var(--heading)]">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              Full-Stack
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;