import { motion, useReducedMotion } from "framer-motion";
import { GraduationCap, Code, Cpu, Award } from "lucide-react";

function About() {
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
      id="about"
      className="pt-6 sm:pt-8 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-[var(--bg-alt)]/30 transition-colors duration-200 scroll-mt-20"
    >
      <div className="max-w-5xl mx-auto space-y-8 sm:space-y-10">
        {/* Section Header */}
        <div className="text-center space-y-2.5">
          <p className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[var(--primary)]">
            Background & Mindset
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--heading)] tracking-tight">
            About Me
          </h2>
          <div className="w-12 h-1 bg-[var(--primary)] mx-auto rounded-full" />
        </div>

        {/* Apple Inset Grouped Frosted Glass Container */}
        <motion.div
          {...anim(0)}
          className="rounded-3xl bg-[var(--card)] backdrop-blur-2xl border border-[var(--border)] p-6 sm:p-10 shadow-[var(--ios-card-shadow)] space-y-6"
        >
          <p className="text-base sm:text-lg text-[var(--text)] leading-relaxed">
            I am a final-year Computer Engineering undergraduate at the{" "}
            <strong className="text-[var(--heading)] font-semibold">University of Jaffna</strong> with a deep passion for Software Engineering, Applied Artificial Intelligence, and scalable system design.
          </p>
          <p className="text-base sm:text-lg text-[var(--text)] leading-relaxed">
            My work spans Natural Language Processing (such as multi-task intent classification with MuRIL), Computer Vision object identification with YOLO11s, and end-to-end full-stack architectures. I am actively seeking software engineering and AI/ML internship or junior engineering roles where I can contribute to production-ready software while solving challenging problems.
          </p>

          {/* iOS Control Center / Health Style Metric Squircle Widgets */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-[var(--border)]">
            {/* Widget 1: Final Year */}
            <div className="bg-[var(--card-solid)]/60 backdrop-blur-md p-4 rounded-2xl border border-[var(--border)] text-center hover:border-[var(--primary)]/40 hover:-translate-y-0.5 active:scale-95 transition-all duration-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 to-orange-500 mx-auto flex items-center justify-center text-white mb-2.5 shadow-md shadow-orange-500/20">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="text-lg sm:text-xl font-bold text-[var(--heading)]">Final Year</div>
              <div className="text-xs text-[var(--text-muted)] font-medium">BSc Eng Undergrad</div>
            </div>

            {/* Widget 2: AI / ML */}
            <div className="bg-[var(--card-solid)]/60 backdrop-blur-md p-4 rounded-2xl border border-[var(--border)] text-center hover:border-[var(--primary)]/40 hover:-translate-y-0.5 active:scale-95 transition-all duration-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-500 mx-auto flex items-center justify-center text-white mb-2.5 shadow-md shadow-purple-500/20">
                <Cpu className="w-5 h-5" />
              </div>
              <div className="text-lg sm:text-xl font-bold text-[var(--heading)]">AI / ML</div>
              <div className="text-xs text-[var(--text-muted)] font-medium">NLP & Vision</div>
            </div>

            {/* Widget 3: Full-Stack */}
            <div className="bg-[var(--card-solid)]/60 backdrop-blur-md p-4 rounded-2xl border border-[var(--border)] text-center hover:border-[var(--primary)]/40 hover:-translate-y-0.5 active:scale-95 transition-all duration-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 to-blue-500 mx-auto flex items-center justify-center text-white mb-2.5 shadow-md shadow-blue-500/20">
                <Code className="w-5 h-5" />
              </div>
              <div className="text-lg sm:text-xl font-bold text-[var(--heading)]">Full-Stack</div>
              <div className="text-xs text-[var(--text-muted)] font-medium">MERN & Modern Web</div>
            </div>

            {/* Widget 4: Projects */}
            <div className="bg-[var(--card-solid)]/60 backdrop-blur-md p-4 rounded-2xl border border-[var(--border)] text-center hover:border-[var(--primary)]/40 hover:-translate-y-0.5 active:scale-95 transition-all duration-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 mx-auto flex items-center justify-center text-white mb-2.5 shadow-md shadow-emerald-500/20">
                <Award className="w-5 h-5" />
              </div>
              <div className="text-lg sm:text-xl font-bold text-[var(--heading)]">8+ Projects</div>
              <div className="text-xs text-[var(--text-muted)] font-medium">Research & Open Source</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;