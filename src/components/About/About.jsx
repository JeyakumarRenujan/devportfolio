import { motion } from "framer-motion";
import aboutData from "../../data/aboutData";

function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 py-28 px-6 text-white"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold text-center mb-16"
        >
          {aboutData.title}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-14 items-center">

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <img
              src="https://placehold.co/450x450"
              alt="Profile"
              className="rounded-3xl shadow-xl"
            />

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <p className="text-gray-300 leading-8 text-lg">
              {aboutData.description}
            </p>

            <div className="grid grid-cols-3 gap-5 mt-10">

              <div className="bg-slate-800 rounded-xl p-5 text-center">
                <h3 className="text-cyan-400 text-2xl font-bold">
                  {aboutData.experience}
                </h3>
                <p>Experience</p>
              </div>

              <div className="bg-slate-800 rounded-xl p-5 text-center">
                <h3 className="text-cyan-400 text-2xl font-bold">
                  {aboutData.projects}
                </h3>
                <p>Projects</p>
              </div>

              <div className="bg-slate-800 rounded-xl p-5 text-center">
                <h3 className="text-cyan-400 text-2xl font-bold">
                  {aboutData.technologies}
                </h3>
                <p>Technologies</p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;