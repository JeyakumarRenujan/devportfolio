import { motion } from "framer-motion";
import skillsData from "../../data/skillsData";

function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-950 py-28 px-6 text-white"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold text-center mb-16"
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {skillsData.map((category) => (

            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-slate-800 rounded-2xl p-6 hover:scale-105 transition duration-300 border border-slate-700"
            >

              <h3 className="text-2xl text-cyan-400 font-bold mb-6">
                {category.category}
              </h3>

              <div className="space-y-3">

                {category.skills.map((skill) => (

                  <div
                    key={skill}
                    className="bg-slate-700 rounded-lg py-2 px-4"
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