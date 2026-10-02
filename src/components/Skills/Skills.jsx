import { motion, useReducedMotion } from "framer-motion";
import { Code2, Brain, Layout, Server, Database, Wrench } from "lucide-react";
import skillsData from "../../data/skillsData";

const categoryIcons = {
  "Languages": Code2,
  "AI & Machine Learning": Brain,
  "Frontend Development": Layout,
  "Backend Development": Server,
  "Databases": Database,
  "Tools & Platforms": Wrench,
};

function Skills() {
  const shouldReduceMotion = useReducedMotion();

  const anim = (delay = 0) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0.9, y: 15 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.4, delay },
        };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--bg)] transition-colors duration-200">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <p className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[var(--primary)]">
            Technical Stack
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--heading)] tracking-tight">
            Skills & Technologies
          </h2>
          <div className="w-12 h-1 bg-[var(--primary)] mx-auto rounded-full" />
          <p className="text-sm sm:text-base text-[var(--text)] max-w-xl mx-auto">
            Core programming languages, AI/ML libraries, and full-stack engineering tools I use to build robust software.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((group, index) => {
            const Icon = categoryIcons[group.category] || Code2;
            return (
              <motion.div
                key={group.category}
                {...anim(index * 0.05)}
                className="bg-[var(--card)] rounded-2xl p-6 border border-[var(--border)] hover:border-[var(--primary)]/40 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-xl bg-[var(--accent)] text-[var(--primary)]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-[var(--heading)]">
                        {group.category}
                      </h3>
                      <p className="text-xs text-[var(--text-muted)]">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-5">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium bg-[var(--bg)] text-[var(--heading)] border border-[var(--border)] hover:border-[var(--primary)]/50 hover:text-[var(--primary)] transition duration-150"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;