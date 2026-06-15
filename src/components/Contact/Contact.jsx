import { motion } from "framer-motion";
import contactData from "../../data/contactData";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-[var(--bg)] py-20 md:py-28 px-6 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">

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
          Contact Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-[var(--primary)] mb-8">
              Let's Connect
            </h3>

            <div className="space-y-5 text-[var(--text)]">

              <p className="text-base md:text-lg">
                📧 {contactData.email}
              </p>

              <p className="text-base md:text-lg">
                📱 {contactData.phone}
              </p>

              <p className="text-base md:text-lg">
                📍 {contactData.location}
              </p>

            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >

            <input
              type="text"
              placeholder="Your Name"
              className="
                w-full
                p-4
                rounded-xl
                bg-[var(--card)]
                border
                border-[var(--accent)]
                text-[var(--heading)]
                outline-none
                focus:border-[var(--primary)]
              "
            />

            <input
              type="email"
              placeholder="Your Email"
              className="
                w-full
                p-4
                rounded-xl
                bg-[var(--card)]
                border
                border-[var(--accent)]
                text-[var(--heading)]
                outline-none
                focus:border-[var(--primary)]
              "
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="
                w-full
                p-4
                rounded-xl
                bg-[var(--card)]
                border
                border-[var(--accent)]
                text-[var(--heading)]
                outline-none
                resize-none
                focus:border-[var(--primary)]
              "
            />

            <button
              type="submit"
              className="
                w-full
                sm:w-auto
                px-8
                py-4
                rounded-xl
                bg-[var(--primary)]
                text-white
                hover:bg-[var(--secondary)]
                hover:scale-105
                transition
                duration-300
              "
            >
              Send Message
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}

export default Contact;