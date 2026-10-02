import { motion } from "framer-motion";
import researchData from "../../data/researchData";

function Research() {
  return (
    <section
      id="research"
      className="bg-[var(--bg)] py-20 md:py-28 px-6 scroll-mt-24"
    >
      <div className="max-w-5xl mx-auto">

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
          Research Project
        </motion.h2>

        {/* Research Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="
            bg-[var(--card)]
            rounded-2xl
            p-6
            md:p-8
            border
            border-[var(--accent)]
            shadow-md
            hover:shadow-xl
            transition
            duration-300
          "
        >

          {/* Period */}
          <span className="text-sm font-semibold text-[var(--secondary)]">
            {researchData.period} • {researchData.institution}
          </span>

          {/* Title */}
          <h3
            className="
              text-2xl
              md:text-3xl
              font-bold
              text-[var(--primary)]
              mt-2
              mb-5
            "
          >
            {researchData.title}
          </h3>

          {/* Bullet Points */}
          <ul className="space-y-3 mb-6 text-[var(--text)] text-sm md:text-base leading-7">
            {researchData.points.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-[var(--primary)] font-bold text-lg leading-none mt-1">
                  •
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {researchData.technologies.map((tech) => (
              <span
                key={tech}
                className="
                  bg-[var(--bg)]
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

          {/* Button */}
          <div>
            <a
              href={researchData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block
                text-center
                px-6
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
          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Research;
