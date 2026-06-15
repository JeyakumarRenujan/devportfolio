import { motion } from "framer-motion";
import skillsData from "../../data/skillsData";

function Skills() {
  return (
    <section
      id="skills"
      className="bg-[var(--bg)] py-20 md:py-28 px-6 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">

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
            mb-12
            md:mb-16
            text-[var(--heading)]
          "
        >
          Skills
        </motion.h2>

        {/* Skills Grid */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-6
            md:gap-8
          "
        >

          {skillsData.map((category) => (

            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="
                bg-[var(--card)]
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

              {/* Category */}

              <h3
                className="
                  text-xl
                  md:text-2xl
                  font-bold
                  text-[var(--primary)]
                  mb-5
                "
              >
                {category.category}
              </h3>

              {/* Skills */}

              <div className="space-y-3">

                {category.skills.map((skill) => (

                  <div
                    key={skill}
                    className="
                      bg-[var(--bg)]
                      text-[var(--text)]
                      border
                      border-[var(--accent)]
                      rounded-lg
                      py-2
                      px-4
                      text-sm
                      md:text-base
                      hover:bg-[var(--primary)]
                      hover:text-white
                      transition
                      duration-300
                    "
                  >
                    {skill}
                  </div>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;