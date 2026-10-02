import { useState, useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ExternalLink,
  Brain,
  Layers,
  Cpu,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import projectsData from "../../data/projectsData";

const categories = ["All", "AI/ML", "Full-Stack", "IoT/Embedded"];

function getCategoryIcon(category) {
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
  const shouldReduceMotion = useReducedMotion();

  // Filter projects dynamically by selected category tab
  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") return projectsData;
    return projectsData.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

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
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10">
        {/* Section Header */}
        <div className="text-center space-y-2.5">
          <p className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[var(--primary)]">
            Portfolio & Systems
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--heading)] tracking-tight">
            Projects
          </h2>
          <div className="w-12 h-1 bg-[var(--primary)] mx-auto rounded-full" />
          <p className="text-sm sm:text-base text-[var(--text)] max-w-2xl mx-auto">
            Practical full-stack web platforms, computer vision models, and embedded IoT systems with verified source repositories.
          </p>

          {/* iOS Segmented Control Category Filter Tabs */}
          <div className="flex justify-center pt-3">
            <div className="inline-flex p-1.5 rounded-full bg-[var(--card-solid)]/60 backdrop-blur-xl border border-[var(--border)] shadow-inner">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    type="button"
                    className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 active:scale-95 ${
                      isSelected
                        ? "bg-[var(--primary)] text-white shadow-md shadow-orange-500/25"
                        : "text-[var(--text-muted)] hover:text-[var(--heading)] hover:bg-[var(--card)]/40"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* All Projects Grid - Clean Unified iOS Cards (No Dark Part) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project, idx) => {
            const CategoryIcon = getCategoryIcon(project.category);
            return (
              <motion.article
                key={project.id}
                {...anim(idx * 0.05)}
                className="bg-[var(--card)] backdrop-blur-2xl rounded-3xl p-6 sm:p-7 border border-[var(--border)] hover:border-[var(--primary)]/50 shadow-[var(--ios-card-shadow)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Category Pill Tag */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[var(--card-solid)] text-[var(--heading)] border border-[var(--border)]">
                      <CategoryIcon className="w-3.5 h-3.5 text-[var(--primary)]" />
                      {project.category}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[var(--heading)] group-hover:text-[var(--primary)] transition duration-200">
                    {project.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-sm sm:text-base text-[var(--text)] leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Inset Problem & Result Box */}
                  <div className="space-y-2 text-xs sm:text-sm bg-[var(--card-solid)]/70 backdrop-blur-md p-4 rounded-2xl border border-[var(--border)]">
                    <div className="flex items-start gap-2.5 text-[var(--text)]">
                      <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[var(--heading)] font-semibold">Problem:</strong>{" "}
                        {project.problem}
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5 text-[var(--text)]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[var(--heading)] font-semibold">Result:</strong>{" "}
                        {project.result}
                      </div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-[var(--card-solid)]/80 text-[var(--heading)] border border-[var(--border)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-6 mt-6 border-t border-[var(--border)] flex flex-wrap items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)] shadow-md shadow-orange-500/25 active:scale-95 transition-all duration-200"
                  >
                    <FaGithub className="w-4 h-4" />
                    Source Code
                  </a>

                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-[var(--card-solid)] text-[var(--heading)] border border-[var(--border)] hover:border-[var(--primary)] hover:text-[var(--primary)] active:scale-95 transition-all duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  ) : (
                    <span
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-[var(--text-muted)] bg-[var(--card-solid)]/40 border border-[var(--border)] cursor-default"
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
    </section>
  );
}

export default Projects;