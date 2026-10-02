import { motion, useReducedMotion } from "framer-motion";
import { GraduationCap, FlaskConical, Milestone, Calendar, MapPin } from "lucide-react";
import journeyData from "../../data/journeyData";

function getTypeMeta(type) {
  switch (type) {
    case "Research":
      return {
        icon: FlaskConical,
        color: "from-orange-500 to-amber-500",
        shadow: "shadow-orange-500/30",
        badgeBg: "bg-orange-500/15 text-orange-400 border-orange-500/25",
      };
    case "Project Milestone":
      return {
        icon: Milestone,
        color: "from-blue-600 to-cyan-500",
        shadow: "shadow-blue-500/30",
        badgeBg: "bg-blue-500/15 text-blue-400 border-blue-500/25",
      };
    case "Education":
    default:
      return {
        icon: GraduationCap,
        color: "from-purple-600 to-indigo-500",
        shadow: "shadow-purple-500/30",
        badgeBg: "bg-purple-500/15 text-purple-400 border-purple-500/25",
      };
  }
}

function Journey() {
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
      id="journey"
      className="pt-6 sm:pt-8 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-[var(--bg-alt)]/30 transition-colors duration-200 scroll-mt-20"
    >
      <div className="max-w-4xl mx-auto space-y-8 sm:space-y-10">
        {/* Section Header */}
        <div className="text-center space-y-2.5">
          <p className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[var(--primary)]">
            Academic & Technical Timeline
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--heading)] tracking-tight">
            Education & Journey
          </h2>
          <div className="w-12 h-1 bg-[var(--primary)] mx-auto rounded-full" />
          <p className="text-sm sm:text-base text-[var(--text)] max-w-xl mx-auto">
            My university degree path, active research investigations, and practical engineering milestones.
          </p>
        </div>

        {/* Apple Activity / Fitness Timeline Rail */}
        <div className="relative border-l-2 border-[var(--border)] ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-8 sm:space-y-10">
          {journeyData.map((item, idx) => {
            const meta = getTypeMeta(item.type);
            const Icon = meta.icon;

            return (
              <motion.div
                key={item.id}
                {...anim(idx * 0.05)}
                className="relative group"
              >
                {/* Timeline Apple Activity Ring Node */}
                <div
                  className={`absolute -left-[37px] sm:-left-[45px] top-1.5 w-9 h-9 rounded-2xl bg-gradient-to-tr ${meta.color} flex items-center justify-center text-white shadow-lg ${meta.shadow} group-hover:scale-110 transition-transform duration-200`}
                  aria-hidden="true"
                >
                  <Icon className="w-4 h-4" />
                </div>

                {/* Card Content - Inset Frosted Glass */}
                <div className="bg-[var(--card)] backdrop-blur-2xl rounded-3xl p-6 sm:p-7 border border-[var(--border)] hover:border-[var(--primary)]/50 shadow-[var(--ios-card-shadow)] hover:shadow-xl transition-all duration-200 space-y-3.5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--primary)] bg-[var(--card-solid)]/70 px-3.5 py-1 rounded-full border border-[var(--border)]">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                    <span
                      className={`text-xs font-semibold px-3 py-0.5 rounded-full border ${meta.badgeBg} uppercase tracking-wider`}
                    >
                      {item.type}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[var(--heading)] group-hover:text-[var(--primary)] transition duration-200">
                    {item.title}
                  </h3>

                  <p className="text-sm font-semibold text-[var(--secondary)] flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {item.institution}
                  </p>

                  <p className="text-sm text-[var(--text)] leading-relaxed">
                    {item.description}
                  </p>

                  {item.highlights && item.highlights.length > 0 && (
                    <ul className="pt-2.5 space-y-1.5 text-xs sm:text-sm text-[var(--text)] border-t border-[var(--border)]">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[var(--primary)] font-bold mt-0.5">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Journey;
