import { motion } from "framer-motion";
import contactData from "../../data/contactData";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-[var(--bg)] py-28 px-6 text-white scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold text-center mb-16 text-[var(--heading)]"
        >
          Contact Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-14">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-3xl font-bold text-[var(--primary)] mb-8">
              Let's Connect
            </h3>

            <p className="mb-5 text-[var(--text)]">
              📧 {contactData.email}
            </p>

            <p className="mb-5 text-[var(--text)]">
              📱 {contactData.phone}
            </p>

            <p className="text-[var(--text)]">
              📍 {contactData.location}
            </p>
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
                border border-[var(--accent)]
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
                border border-[var(--accent)]
                text-[var(--heading)]
                outline-none
                focus:border-[var(--primary)]
              "
            />

            <textarea
              rows="6"
              placeholder="Message"
              className="
                w-full
                p-4
                rounded-xl
                bg-[var(--card)]
                border border-[var(--accent)]
                text-[var(--heading)]
                outline-none
                resize-none
                focus:border-[var(--primary)]
              "
            />

            <button
              className="
                px-8
                py-4
                rounded-xl
                bg-[var(--primary)]
                text-white
                hover:bg-[var(--secondary)]
                hover:scale-105
                transition duration-300
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