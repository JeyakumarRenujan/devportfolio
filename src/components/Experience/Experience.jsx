import { motion } from "framer-motion";
import experienceData from "../../data/experienceData";

function Experience() {
  return (
    <section
      id="experience"
      className="bg-[var(--bg)] py-20 md:py-28 px-6 scroll-mt-24"
    >
      <div className="max-w-5xl mx-auto">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
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
          Experience
        </motion.h2>

        <div className="space-y-8 md:space-y-10">

          {experienceData.map((item) => (

            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="
                border-l-4
                border-[var(--primary)]
                pl-4
                md:pl-6
              "
            >

              {/* Year */}
              <h3
                className="
                  text-[var(--secondary)]
                  text-lg
                  md:text-xl
                  font-bold
                "
              >
                {item.year}
              </h3>

              {/* Position */}
              <h4
                className="
                  text-xl
                  md:text-2xl
                  mt-2
                  font-semibold
                  text-[var(--heading)]
                "
              >
                {item.title}
              </h4>

              {/* Company */}
              <p
                className="
                  text-[var(--primary)]
                  mt-1
                  text-sm
                  md:text-base
                "
              >
                {item.company}
              </p>

              {/* Description */}
              <p
                className="
                  mt-3
                  text-[var(--text)]
                  text-sm
                  md:text-base
                  leading-7
                "
              >
                {item.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;