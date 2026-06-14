import { motion } from "framer-motion";
import experienceData from "../../data/experienceData";

function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-950 py-58 px-6 text-white"
    >
      <div className="max-w-5xl mx-auto">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl font-bold text-center mb-16"
        >
          Experience
        </motion.h2>

        <div className="space-y-8">

          {experienceData.map((item) => (

            <div
              key={item.id}
              className="border-l-4 border-cyan-400 pl-6"
            >
              <h3 className="text-cyan-400 text-xl font-bold">
                {item.year}
              </h3>

              <h4 className="text-2xl mt-2">
                {item.title}
              </h4>

              <p className="text-gray-400">
                {item.company}
              </p>

              <p className="mt-3 text-gray-300">
                {item.description}
              </p>
            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;