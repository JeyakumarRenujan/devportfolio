import { motion } from "framer-motion";
import projectsData from "../../data/projectsData";

function Projects() {
  return (
    <section
      id="projects"
      className="bg-[var(--card)] py-20 md:py-28 px-6 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="
            text-4xl
            md:text-5xl
            font-bold
            text-center
            text-[var(--heading)]
            mb-12
            md:mb-16
          "
        >
          Projects
        </motion.h2>

        {/* Project Grid */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6
            md:gap-8
          "
        >

          {projectsData.map((project) => (

            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="
                bg-[var(--bg)]
                rounded-2xl
                p-6
                border
                border-[var(--accent)]
                shadow-md
                hover:shadow-xl
                hover:-translate-y-1
                transition
                duration-300
              "
            >

              {/* Title */}
              <h3
                className="
                  text-xl
                  md:text-2xl
                  font-bold
                  text-[var(--primary)]
                  mb-4
                "
              >
                {project.title}
              </h3>

              {/* Description */}
              <p
                className="
                  text-[var(--text)]
                  text-sm
                  md:text-base
                  leading-7
                  mb-5
                "
              >
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">

                {project.technologies.map((tech) => (

                  <span
                    key={tech}
                    className="
                      bg-[var(--card)]
                      border
                      border-[var(--accent)]
                      text-[var(--heading)]
                      text-xs
                      md:text-sm
                      px-3
                      py-1
                      rounded-full
                    "
                  >
                    {tech}
                  </span>

                ))}

              </div>

              {/* Buttons */}
              <div
                className="
                  flex
                  flex-col
                  sm:flex-row
                  gap-3
                "
              >

                <a
                  href={project.github}
                  className="
                    text-center
                    px-4
                    py-3
                    rounded-lg
                    bg-[var(--primary)]
                    text-white
                    hover:bg-[var(--secondary)]
                    transition
                    duration-300
                  "
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  className="
                    text-center
                    px-4
                    py-3
                    rounded-lg
                    border
                    border-[var(--primary)]
                    text-[var(--heading)]
                    hover:bg-[var(--accent)]
                    transition
                    duration-300
                  "
                >
                  Live Demo
                </a>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;