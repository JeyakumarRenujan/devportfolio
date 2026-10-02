import { motion, useReducedMotion } from "framer-motion";
import { GraduationCap, FlaskConical, Milestone, Calendar, MapPin } from "lucide-react";
import journeyData from "../../data/journeyData";

function getTypeIcon(type) {
  switch (type) {
    case "Research":
      return FlaskConical;
    case "Project Milestone":
      return Milestone;
    case "Education":
    default:
      return GraduationCap;
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
      className="pt-6 sm:pt-8 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-[var(--bg-alt)]/50 transition-colors duration-200 scroll-mt-20"
    >
      <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <p className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[var(--primary)]">
            Academic & Technical Timeline
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--heading)] tracking-tight">
            Education & Journey
          </h2>
          <div className="w-12 h-1 bg-[var(--primary)] mx-auto rounded-full mt-1.5" />
          <p className="text-sm sm:text-base text-[var(--text)] max-w-xl mx-auto mt-2">
            My university degree path, active research investigations, and practical engineering milestones.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-[var(--border)] ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-10">
          {journeyData.map((item, idx) => {
            const Icon = getTypeIcon(item.type);
            const isResearch = item.type === "Research";

            return (
              <motion.div
                key={item.id}
                {...anim(idx * 0.05)}
                className="relative group"
              >
                {/* Timeline Dot with Icon */}
                <div
                  className={`absolute -left-[35px] sm:-left-[43px] top-1.5 w-8 h-8 rounded-full border-2 flex items-center justify-center transition duration-200 ${
                    isResearch
                      ? "bg-orange-500 border-white text-white shadow-md shadow-orange-500/30"
                      : "bg-[var(--card)] border-[var(--primary)] text-[var(--primary)]"
                  }`}
                  aria-hidden="true"
                >
                  <Icon className="w-4 h-4" />
                </div>

                {/* Card Content */}
                <div className="bg-[var(--card)] rounded-2xl p-6 border border-[var(--border)] hover:border-[var(--primary)]/40 shadow-sm hover:shadow-md transition duration-200 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--primary)] bg-[var(--accent)] px-3 py-1 rounded-full">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                    <span className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">
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
                    <ul className="pt-2 space-y-1.5 text-xs sm:text-sm text-[var(--text)] border-t border-[var(--border)]">
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
