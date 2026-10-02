import { useState, useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ExternalLink,
  Brain,
  Eye,
  Layers,
  Cpu,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  CheckCircle2,
  Code2,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import projectsData from "../../data/projectsData";

const categories = ["All", "AI/ML", "Full-Stack", "IoT/Embedded"];

function getProjectIcon(category) {
  switch (category) {
    case "AI/ML":
      return Brain;
    case "IoT/Embedded":
      return Cpu;
    case "Full-Stack":
    default:
      return Layers;
  }
}

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showAllSecondary, setShowAllSecondary] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Filter projects by active tab
  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") return projectsData;
    return projectsData.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  // Separate into featured and secondary within the filtered list
  const featuredList = useMemo(
    () => filteredProjects.filter((p) => p.featured),
    [filteredProjects]
  );
  const secondaryList = useMemo(
    () => filteredProjects.filter((p) => !p.featured),
    [filteredProjects]
  );

  const visibleSecondary = showAllSecondary
    ? secondaryList
    : secondaryList.slice(0, 2);

  const anim = (delay = 0) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0.95, y: 15 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.35, delay },
        };

  return (
    <section
      id="projects"
      className="pt-6 sm:pt-8 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-[var(--bg)] transition-colors duration-200 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <p className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[var(--primary)]">
            Featured Works & Engineering
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--heading)] tracking-tight">
            Projects & Research
          </h2>
          <div className="w-12 h-1 bg-[var(--primary)] mx-auto rounded-full mt-1.5" />
          <p className="text-sm sm:text-base text-[var(--text)] max-w-2xl mx-auto mt-2">
            Practical AI models, research implementations, and full-stack platforms with verified source code.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-3">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  type="button"
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition duration-200 ${
                    isSelected
                      ? "bg-[var(--primary)] text-white shadow-md shadow-orange-500/20 scale-105"
                      : "bg-[var(--card)] text-[var(--heading)] border border-[var(--border)] hover:border-[var(--primary)]/50 hover:text-[var(--primary)]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Projects Grid (Large Cards) */}
        {featuredList.length > 0 && (
          <div className="space-y-8">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[var(--text-muted)] uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]" />
              Flagship Implementations
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredList.map((project, idx) => {
                const CategoryIcon = getProjectIcon(project.category);
                return (
                  <motion.article
                    key={project.id}
                    {...anim(idx * 0.05)}
                    className="bg-[var(--card)] rounded-2xl border border-[var(--border)] hover:border-[var(--primary)]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                  >
                    <div>
                      {/* Visual Header / Mockup Banner Placeholder */}
                      <div className="relative h-48 sm:h-56 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-b border-[var(--border)] p-6 flex flex-col justify-between overflow-hidden">
                        <div
                          className="absolute inset-0 bg-radial-gradient from-orange-500/10 via-transparent to-transparent opacity-60 pointer-events-none"
                          aria-hidden="true"
                        />
                        {/* Background Code Graphic Hint */}
                        <div
                          className="absolute right-4 bottom-2 text-slate-800/80 font-mono text-7xl font-black select-none pointer-events-none opacity-40 group-hover:scale-105 transition duration-500"
                          aria-hidden="true"
                        >
                          &lt;/&gt;
                        </div>

                        <div className="flex items-center justify-between z-10">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-orange-500/20 text-orange-400 border border-orange-500/30 backdrop-blur-sm">
                            <CategoryIcon className="w-3.5 h-3.5" />
                            {project.badge}
                          </span>
                          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-slate-800/90 text-slate-300 border border-slate-700">
                            {project.category}
                          </span>
                        </div>

                        <div className="z-10">
                          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-orange-400 transition duration-200">
                            {project.title}
                          </h3>
                        </div>
                      </div>

                      {/* Card Body */}
                      <div className="p-6 sm:p-7 space-y-5">
                        <p className="text-sm sm:text-base text-[var(--text)] leading-relaxed">
                          {project.summary}
                        </p>

                        {/* Problem & Result Box */}
                        <div className="space-y-2.5 text-xs sm:text-sm bg-[var(--bg)] p-4 rounded-xl border border-[var(--border)]">
                          <div className="flex items-start gap-2 text-[var(--text)]">
                            <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                            <div>
                              <strong className="text-[var(--heading)] font-semibold">Problem:</strong>{" "}
                              {project.problem}
                            </div>
                          </div>
                          <div className="flex items-start gap-2 text-[var(--text)]">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <div>
                              <strong className="text-[var(--heading)] font-semibold">Result:</strong>{" "}
                              {project.result}
                            </div>
                          </div>
                        </div>

                        {/* Tech Tag Chips */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-md text-xs font-medium bg-[var(--bg)] text-[var(--heading)] border border-[var(--border)]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="p-6 sm:p-7 pt-0 flex flex-wrap items-center gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)] shadow-sm hover:shadow-orange-500/20 transition duration-200"
                      >
                        <FaGithub className="w-4 h-4" />
                        Source Code
                      </a>

                      {project.live ? (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-[var(--card)] text-[var(--heading)] border border-[var(--border)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition duration-200"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      ) : (
                        <span
                          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-[var(--text-muted)] bg-[var(--bg)] border border-[var(--border)] cursor-default"
                          title="Demo environment available on request or self-hosted"
                        >
                          <ExternalLink className="w-3.5 h-3.5 opacity-50" />
                          Demo on Request
                        </span>
                      )}
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        )}

        {/* Secondary Projects Grid */}
        {secondaryList.length > 0 && (
          <div className="pt-6 space-y-6">
            <div className="flex items-center justify-between border-t border-[var(--border)] pt-8">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[var(--text-muted)] uppercase tracking-wider">
                <Code2 className="w-4 h-4 text-[var(--primary)]" />
                Additional Applications & Utilities ({secondaryList.length})
              </div>

              {secondaryList.length > 2 && (
                <button
                  onClick={() => setShowAllSecondary(!showAllSecondary)}
                  type="button"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[var(--primary)] hover:underline"
                >
                  {showAllSecondary ? (
                    <>
                      Show Less <ChevronUp className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      Show All ({secondaryList.length}) <ChevronDown className="w-4 h-4" />
                    </>
                  )}
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {visibleSecondary.map((project, idx) => {
                const CategoryIcon = getProjectIcon(project.category);
                return (
                  <motion.div
                    key={project.id}
                    {...anim(idx * 0.05)}
                    className="bg-[var(--card)] rounded-2xl p-6 border border-[var(--border)] hover:border-[var(--primary)]/40 shadow-sm transition duration-200 flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-[var(--primary)]">
                          <CategoryIcon className="w-3.5 h-3.5" />
                          {project.badge}
                        </span>
                        <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-[var(--bg)] text-[var(--text-muted)] border border-[var(--border)]">
                          {project.category}
                        </span>
                      </div>

                      <h4 className="text-lg font-bold text-[var(--heading)]">
                        {project.title}
                      </h4>

                      <p className="text-xs sm:text-sm text-[var(--text)] leading-relaxed">
                        {project.summary}
                      </p>

                      <div className="text-xs bg-[var(--bg)] p-3 rounded-lg border border-[var(--border)] space-y-1">
                        <div>
                          <strong className="text-[var(--heading)]">Problem:</strong> {project.problem}
                        </div>
                        <div>
                          <strong className="text-[var(--heading)]">Result:</strong> {project.result}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded text-[11px] font-medium bg-[var(--bg)] text-[var(--heading)] border border-[var(--border)]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-5 mt-4 border-t border-[var(--border)] flex items-center gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--heading)] hover:text-[var(--primary)]"
                      >
                        <FaGithub className="w-3.5 h-3.5" />
                        Source Repo
                      </a>

                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--primary)] hover:underline ml-auto"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          Demo
                        </a>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;