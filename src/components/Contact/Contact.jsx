import { motion } from "framer-motion";
import contactData from "../../data/contactData";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-950 py-28 px-6 text-white"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl font-bold text-center mb-16"
        >
          Contact Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-14">

          <div>

            <h3 className="text-3xl font-bold text-cyan-400 mb-8">
              Let's Connect
            </h3>

            <p className="mb-4">
              📧 {contactData.email}
            </p>

            <p className="mb-4">
              📱 {contactData.phone}
            </p>

            <p>
              📍 {contactData.location}
            </p>

          </div>

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-xl bg-slate-800"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-xl bg-slate-800"
            />

            <textarea
              rows="6"
              placeholder="Message"
              className="w-full p-4 rounded-xl bg-slate-800"
            />

            <button
              className="bg-cyan-500 px-8 py-4 rounded-xl hover:bg-cyan-400 transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;