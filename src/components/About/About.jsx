import { motion } from "framer-motion";
import aboutData from "../../data/aboutData";
import heroImage from "./hero.jpeg";

function About() {
  return (
    <section
      id="about"
      className="
        bg-[var(--card)]
        py-20
        md:min-h-screen
        flex
        items-center
        px-6
        scroll-mt-24
      "
    >
      <div className="max-w-6xl mx-auto w-full">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="
            text-4xl
            md:text-5xl
            font-bold
            text-center
            mb-10
            text-[var(--heading)]
          "
        >
          {aboutData.title}
        </motion.h2>

        {/* Main Grid */}

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Image */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <img
              src={heroImage}
              alt="Profile"
              className="
                w-full
                max-w-sm
                mx-auto
                rounded-3xl
                shadow-xl
                object-cover
                border-4
                border-[var(--accent)]
              "
            />

          </motion.div>

          {/* Content */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <p
              className="
                text-[var(--text)]
                leading-8
                text-base
                text-center
                md:text-left
              "
            >
              {aboutData.description}
            </p>

            {/* Cards */}

            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-3
                gap-4
                mt-8
              "
            >

              <div
                className="
                  bg-[var(--bg)]
                  rounded-xl
                  p-5
                  text-center
                  border
                  border-[var(--accent)]
                  hover:scale-105
                  transition
                  duration-300
                "
              >
                <h3 className="text-[var(--primary)] text-2xl font-bold">
                  {aboutData.experience}
                </h3>

                <p className="text-[var(--text)] mt-2">
                  Experience
                </p>
              </div>

              <div
                className="
                  bg-[var(--bg)]
                  rounded-xl
                  p-5
                  text-center
                  border
                  border-[var(--accent)]
                  hover:scale-105
                  transition
                  duration-300
                "
              >
                <h3 className="text-[var(--primary)] text-2xl font-bold">
                  {aboutData.projects}
                </h3>

                <p className="text-[var(--text)] mt-2">
                  Projects
                </p>
              </div>

              <div
                className="
                  bg-[var(--bg)]
                  rounded-xl
                  p-5
                  text-center
                  border
                  border-[var(--accent)]
                  hover:scale-105
                  transition
                  duration-300
                "
              >
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