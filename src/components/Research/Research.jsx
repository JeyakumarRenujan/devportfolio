import { motion, useReducedMotion } from "framer-motion";
import { Brain, Sparkles, AlertCircle, CheckCircle2, GraduationCap, Calendar } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import researchData from "../../data/researchData";

function Research() {
  const shouldReduceMotion = useReducedMotion();

  const anim = (delay = 0) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0.95, y: 15 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.4, delay },
        };

  return (
    <section
      id="research"
      className="pt-6 sm:pt-8 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-[var(--bg-alt)]/30 transition-colors duration-200 scroll-mt-20"
    >
      <div className="max-w-5xl mx-auto space-y-8 sm:space-y-10">
        {/* Section Header */}
        <div className="text-center space-y-2.5">
          <p className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[var(--primary)]">
            Academic Inquiry & NLP
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--heading)] tracking-tight">
            Research
          </h2>
          <div className="w-12 h-1 bg-[var(--primary)] mx-auto rounded-full" />
          <p className="text-sm sm:text-base text-[var(--text)] max-w-xl mx-auto">
            Applied deep learning research in low-resource multilingual natural language processing.
          </p>
        </div>

        {/* Research Cards */}
        <div className="space-y-6">
          {researchData.map((item, idx) => (
            <motion.article
              key={item.id}
              {...anim(idx * 0.05)}
              className="bg-[var(--card)] backdrop-blur-2xl rounded-3xl p-6 sm:p-8 md:p-10 border border-[var(--border)] shadow-[var(--ios-card-shadow)] hover:border-[var(--primary)]/50 transition-all duration-300 space-y-6"
            >
              {/* Header Badges */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>{item.status}</span>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-[var(--text-muted)] bg-[var(--card-solid)]/70 px-3.5 py-1.5 rounded-full border border-[var(--border)]">
                  <Calendar className="w-3.5 h-3.5 text-[var(--primary)]" />
                  <span>{item.period}</span>
                </div>
              </div>

              {/* Title & Institution */}
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--heading)] leading-snug">
                  {item.title}
                </h3>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm text-[var(--secondary)] font-semibold">
                  <span className="flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-[var(--primary)]" />
                    {item.institution}
                  </span>
                  <span className="hidden sm:inline text-[var(--border)]">•</span>
                  <span className="flex items-center gap-1.5 text-[var(--text-muted)]">
                    <Brain className="w-3.5 h-3.5 text-[var(--primary)]" />
                    {item.model}
                  </span>
                </div>
              </div>

              {/* Summary */}
              <p className="text-base sm:text-lg text-[var(--text)] leading-relaxed">
                {item.summary}
              </p>

              {/* Problem, Methodology & Result (Apple Inset Boxes) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="bg-[var(--card-solid)]/70 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-[var(--border)] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--heading)]">
                    <AlertCircle className="w-4 h-4 text-amber-500" />
                    <span>Challenge</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--text)] leading-relaxed">
                    {item.problem}
                  </p>
                </div>

                <div className="bg-[var(--card-solid)]/70 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-[var(--border)] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--heading)]">
                    <Sparkles className="w-4 h-4 text-[var(--primary)]" />
                    <span>Methodology</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--text)] leading-relaxed">
                    {item.methodology}
                  </p>
                </div>

                <div className="bg-[var(--card-solid)]/70 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-[var(--border)] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--heading)]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>Result Target</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--text)] leading-relaxed">
                    {item.result}
                  </p>
                </div>
              </div>

              {/* Technologies & Action Link */}
              <div className="pt-4 border-t border-[var(--border)] flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-[var(--card-solid)]/80 text-[var(--heading)] border border-[var(--border)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)] shadow-md shadow-orange-500/25 active:scale-95 transition-all duration-200"
                >
                  <FaGithub className="w-4 h-4" />
                  Source Code
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Research;
