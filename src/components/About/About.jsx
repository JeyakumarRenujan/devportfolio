import { motion } from "framer-motion";
import aboutData from "../../data/aboutData";

function About() {
  return (
    <section
      id="about"
      className="bg-[var(--card)] py-28 px-6 text-white scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold text-center mb-16 text-[var(--heading)]"
        >
          {aboutData.title}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="src\components\About\hero.jpeg"
              alt="Profile"
              className="rounded-3xl shadow-xl w-full object-cover border-4 border-[var(--accent)]"
            />
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <p className="text-[var(--text)] leading-8 text-lg">
              {aboutData.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10">

              <div className="bg-[var(--bg)] rounded-xl p-5 text-center border border-[var(--accent)] hover:scale-105 transition duration-300">
                <h3 className="text-[var(--primary)] text-2xl font-bold">
                  {aboutData.experience}
                </h3>
                <p className="text-[var(--text)] mt-2">
                  Experience
                </p>
              </div>

              <div className="bg-[var(--bg)] rounded-xl p-5 text-center border border-[var(--accent)] hover:scale-105 transition duration-300">
                <h3 className="text-[var(--primary)] text-2xl font-bold">
                  {aboutData.projects}
                </h3>
                <p className="text-[var(--text)] mt-2">
                  Projects
                </p>
              </div>

              <div className="bg-[var(--bg)] rounded-xl p-5 text-center border border-[var(--accent)] hover:scale-105 transition duration-300">
                <h3 className="text-[var(--primary)] text-2xl font-bold">
                  {aboutData.technologies}
                </h3>
                <p className="text-[var(--text)] mt-2">
                  Technologies
                </p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;