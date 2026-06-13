import { motion } from "framer-motion";
import projectsData from "../../data/projectsData";

function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-900 py-28 px-6 text-white"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold text-center mb-16"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projectsData.map((project) => (

            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:scale-105 transition duration-300"
            >

              <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                {project.title}
              </h3>

              <p className="text-gray-300 leading-7 mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">

                {project.technologies.map((tech) => (

                  <span
                    key={tech}
                    className="bg-slate-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>

                ))}

              </div>

              <div className="flex gap-4">

                <a
                  href={project.github}
                  className="px-4 py-2 bg-cyan-500 rounded-lg hover:bg-cyan-400 transition"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  className="px-4 py-2 border border-cyan-400 rounded-lg hover:bg-cyan-500/20 transition"
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