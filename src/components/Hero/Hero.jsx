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
      className="relative min-h-[92vh] flex items-center justify-center pt-24 sm:pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Subtle Apple Ambient Background Gradient Glows */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[380px] bg-gradient-to-tr from-[#FF9500]/15 via-[#FFB340]/10 to-transparent blur-[130px] pointer-events-none -z-10 rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Content (7 cols) */}
        <motion.div {...animProps} className="lg:col-span-7 text-center lg:text-left space-y-6">
          {/* iOS Dynamic Capsule Status Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-[var(--card)]/90 backdrop-blur-xl border border-[var(--border)] text-[var(--heading)] shadow-[var(--ios-card-shadow)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-[var(--text-muted)] font-normal">Active Research:</span>
            <span className="font-semibold text-[var(--primary)] truncate max-w-[260px] sm:max-w-md">
              MuRIL Code-Mixed Sentiment & Intent
            </span>
          </div>

          {/* Main Headline & Full Name */}
          <div className="space-y-3">
            <p className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[var(--primary)]">
              Hello, I am
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[var(--heading)] leading-[1.08]">
              {heroData.fullName}
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[var(--secondary)] flex items-center justify-center lg:justify-start gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-orange-500 to-amber-500 hidden sm:flex items-center justify-center text-white shadow-sm">
                <Terminal className="w-4 h-4" />
              </div>
              {heroData.role}
            </h2>
          </div>

          {/* Value Statement */}
          <p className="text-base sm:text-lg text-[var(--text)] leading-relaxed max-w-2xl mx-auto lg:mx-0">
            {heroData.valueStatement}
          </p>

          {/* Action CTAs (iOS Rounded Full Pills) */}
          <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
            {/* View Projects */}
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-full font-bold text-sm sm:text-base bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)] shadow-lg shadow-orange-500/25 active:scale-95 transition-all duration-200"
            >
              <Code2 className="w-4 h-4" />
              View Projects
              <ArrowDown className="w-4 h-4 ml-0.5" />
            </a>

            {/* Download CV */}
            <a
              href="/Jeyakumar_Renujan_CV.pdf"
              download
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-full font-bold text-sm sm:text-base bg-[var(--card)]/90 backdrop-blur-xl text-[var(--heading)] border border-[var(--border)] hover:border-[var(--primary)] hover:text-[var(--primary)] active:scale-95 shadow-sm transition-all duration-200"
            >
              <Download className="w-4 h-4 text-[var(--primary)]" />
              Download CV
            </a>

            {/* Contact */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-full font-bold text-sm sm:text-base bg-[var(--card-solid)]/40 backdrop-blur-xl text-[var(--heading)] border border-[var(--border)] hover:border-[var(--primary)] active:scale-95 transition-all duration-200"
            >
              <Mail className="w-4 h-4 text-[var(--secondary)]" />
              Contact
            </a>
          </div>

          {/* Institutional Credential */}
          <p className="text-xs sm:text-sm text-[var(--text-muted)] pt-2 flex items-center justify-center lg:justify-start gap-2">
            <span>🎓</span>
            <span>{heroData.subRole}</span>
          </p>
        </motion.div>

        {/* Right Column: iOS Squircle Photo Card with Ambient Glow & Floating Widgets */}
        <motion.div
          {...(shouldReduceMotion
            ? {}
            : {
                initial: { opacity: 0, scale: 0.96 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 0.6, delay: 0.1 },
              })}
          className="lg:col-span-5 flex justify-center items-center relative"
        >
          <div className="relative w-64 sm:w-72 md:w-80 aspect-square group">
            {/* Apple Ambient Glow Ring */}
            <div
              className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-tr from-[#FF9500]/30 to-[#FFB340]/20 blur-2xl group-hover:opacity-75 transition duration-500"
              aria-hidden="true"
            />

            {/* iOS Squircle Frame */}
            <div className="relative w-full h-full rounded-[2.5rem] p-1.5 bg-gradient-to-b from-white/30 via-white/10 to-transparent dark:from-white/15 dark:via-white/5 dark:to-transparent border border-[var(--border)] shadow-2xl overflow-hidden backdrop-blur-md">
              <div className="w-full h-full rounded-[2.1rem] overflow-hidden bg-[var(--card-solid)] relative">
                <img
                  src={profilePhoto}
                  alt="Jeyakumar Renujan profile"
                  loading="eager"
                  className="w-full h-full object-cover object-top filter contrast-[1.02] group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Floating iOS Widget 1: AI / NLP */}
            <div className="absolute -top-3 -right-3 sm:-right-4 bg-[var(--card)]/90 backdrop-blur-xl border border-[var(--border)] shadow-xl rounded-2xl px-3.5 py-2 flex items-center gap-2.5 text-xs font-bold text-[var(--heading)] group-hover:-translate-y-1 transition duration-300">
              <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center text-white shadow-sm">
                <Brain className="w-3.5 h-3.5" />
              </div>
              <span>AI & NLP Research</span>
            </div>

            {/* Floating iOS Widget 2: Full-Stack */}
            <div className="absolute -bottom-3 -left-3 sm:-left-4 bg-[var(--card)]/90 backdrop-blur-xl border border-[var(--border)] shadow-xl rounded-2xl px-3.5 py-2 flex items-center gap-2.5 text-xs font-bold text-[var(--heading)] group-hover:translate-y-1 transition duration-300">
              <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-orange-500 to-amber-500 flex items-center justify-center text-white shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <span>Full-Stack Systems</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;