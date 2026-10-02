import { motion, useReducedMotion } from "framer-motion";
import { Code2, Brain, Layout, Server, Database, Wrench } from "lucide-react";
import skillsData from "../../data/skillsData";

const categoryMeta = {
  "Languages": {
    icon: Code2,
    gradient: "from-amber-500 to-orange-500",
    shadow: "shadow-orange-500/20",
  },
  "AI & Machine Learning": {
    icon: Brain,
    gradient: "from-purple-600 to-indigo-500",
    shadow: "shadow-purple-500/20",
  },
  "Frontend Development": {
    icon: Layout,
    gradient: "from-cyan-500 to-blue-500",
    shadow: "shadow-blue-500/20",
  },
  "Backend Development": {
    icon: Server,
    gradient: "from-emerald-500 to-teal-500",
    shadow: "shadow-emerald-500/20",
  },
  "Databases": {
    icon: Database,
    gradient: "from-rose-500 to-red-500",
    shadow: "shadow-rose-500/20",
  },
  "Tools & Platforms": {
    icon: Wrench,
    gradient: "from-slate-600 to-slate-400",
    shadow: "shadow-slate-500/20",
  },
};

function Skills() {
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
      id="skills"
      className="pt-6 sm:pt-8 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-[var(--bg)] transition-colors duration-200 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10">
        {/* Section Header */}
        <div className="text-center space-y-2.5">
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

        {/* Skills Grid - iOS App Library Grouped Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((group, index) => {
            const meta = categoryMeta[group.category] || {
              icon: Code2,
              gradient: "from-orange-500 to-amber-500",
              shadow: "shadow-orange-500/20",
            };
            const Icon = meta.icon;

            return (
              <motion.div
                key={group.category}
                {...anim(index * 0.05)}
                className="bg-[var(--card)] backdrop-blur-2xl rounded-3xl p-6 border border-[var(--border)] hover:border-[var(--primary)]/50 shadow-[var(--ios-card-shadow)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Category Header with iOS App Icon Squircle */}
                  <div className="flex items-center gap-3.5 mb-3">
                    <div
                      className={`w-11 h-11 rounded-2xl bg-gradient-to-tr ${meta.gradient} flex items-center justify-center text-white shadow-md ${meta.shadow} group-hover:scale-105 transition-transform duration-200`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-[var(--heading)] group-hover:text-[var(--primary)] transition-colors duration-200">
                        {group.category}
                      </h3>
                      <p className="text-xs text-[var(--text-muted)] font-medium">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Capsule Pills */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-[var(--card-solid)]/70 text-[var(--heading)] border border-[var(--border)] hover:border-[var(--primary)]/60 hover:text-[var(--primary)] active:scale-95 transition-all duration-150"
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