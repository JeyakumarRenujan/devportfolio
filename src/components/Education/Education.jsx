import { motion } from "framer-motion";
import educationData from "../../data/educationData";

function Education() {
  return (
    <section
      id="education"
      className="bg-[var(--card)] py-28 px-6 text-white scroll-mt-24"
    >
      <div className="max-w-5xl mx-auto">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold text-center mb-16 text-[var(--heading)]"
        >
          Education
        </motion.h2>

        <div className="space-y-10">

          {educationData.map((item) => (

            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="
                border-l-4
                border-[var(--primary)]
                pl-6
              "
            >

              {/* Year */}
              <h3 className="text-[var(--secondary)] text-xl font-bold">
                {item.year}
              </h3>

              {/* Degree */}
              <h4 className="text-2xl mt-2 text-[var(--heading)] font-semibold">
                {item.title}
              </h4>

              {/* Institution */}
              <p className="mt-2 text-[var(--primary)]">
                {item.institution}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;