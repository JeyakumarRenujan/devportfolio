import { motion, useReducedMotion } from "framer-motion";
import { GraduationCap, Code, Cpu, Award } from "lucide-react";
import aboutData from "../../data/aboutData";

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
      className="pt-6 sm:pt-8 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-[var(--bg-alt)]/50 transition-colors duration-200 scroll-mt-20"
    >
      <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <p className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[var(--primary)]">
            Background & Mindset
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--heading)] tracking-tight">
            About Me
          </h2>
          <div className="w-12 h-1 bg-[var(--primary)] mx-auto rounded-full mt-1.5" />
        </div>

        {/* Narrative & Focus Blocks */}
        <motion.div
          {...anim(0)}
          className="bg-[var(--card)] rounded-2xl p-6 sm:p-8 md:p-10 border border-[var(--border)] shadow-sm space-y-6"
        >
          <p className="text-base sm:text-lg text-[var(--text)] leading-relaxed">
            I am a final-year Computer Engineering undergraduate at the{" "}
            <strong className="text-[var(--heading)] font-semibold">University of Jaffna</strong> with a deep passion for Software Engineering, Applied Artificial Intelligence, and scalable system design.
          </p>
          <p className="text-base sm:text-lg text-[var(--text)] leading-relaxed">
            My work spans Natural Language Processing (such as multi-task intent classification with MuRIL), Computer Vision object identification with YOLO11s, and end-to-end full-stack architectures. I am actively seeking software engineering and AI/ML internship or junior engineering roles where I can contribute to production-ready software while solving challenging problems.
          </p>

          {/* Quick Metrics / Focus Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-[var(--border)]">
            <div className="bg-[var(--bg)] p-4 rounded-xl border border-[var(--border)] text-center">
              <GraduationCap className="w-5 h-5 mx-auto text-[var(--primary)] mb-1" />
              <div className="text-xl font-bold text-[var(--heading)]">Final Year</div>
              <div className="text-xs text-[var(--text-muted)]">BSc Eng Undergrad</div>
            </div>

            <div className="bg-[var(--bg)] p-4 rounded-xl border border-[var(--border)] text-center">
              <Cpu className="w-5 h-5 mx-auto text-amber-500 mb-1" />
              <div className="text-xl font-bold text-[var(--heading)]">AI / ML</div>
              <div className="text-xs text-[var(--text-muted)]">NLP & Vision</div>
            </div>

            <div className="bg-[var(--bg)] p-4 rounded-xl border border-[var(--border)] text-center">
              <Code className="w-5 h-5 mx-auto text-[var(--primary)] mb-1" />
              <div className="text-xl font-bold text-[var(--heading)]">Full-Stack</div>
              <div className="text-xs text-[var(--text-muted)]">MERN & Modern Web</div>
            </div>

            <div className="bg-[var(--bg)] p-4 rounded-xl border border-[var(--border)] text-center">
              <Award className="w-5 h-5 mx-auto text-emerald-500 mb-1" />
              <div className="text-xl font-bold text-[var(--heading)]">8+ Projects</div>
              <div className="text-xs text-[var(--text-muted)]">Open Source & Research</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;