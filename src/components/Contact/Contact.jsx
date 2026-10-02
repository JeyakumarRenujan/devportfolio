import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import contactData from "../../data/contactData";

function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_3sk01kl",
        "template_inqdfqn",
        form.current,
        "EOPHK9ASJVFx6RFuu"
      )
      .then(
        () => {
          setIsSending(false);
          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Thank you for reaching out. I will respond to your message promptly.",
            confirmButtonColor: "#F97316",
            background: "#131B2A",
            color: "#F8FAFC",
            timer: 3000,
            showConfirmButton: false,
          });
          e.target.reset();
        },
        (error) => {
          setIsSending(false);
          Swal.fire({
            icon: "error",
            title: "Transmission Failed",
            text: "Failed to send message. Please reach out directly via email at renujanrenu5@gmail.com",
            confirmButtonColor: "#F97316",
            background: "#131B2A",
            color: "#F8FAFC",
          });
          console.error(error.text);
        }
      );
  };

  const anim = (delay = 0) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0.95, y: 15 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.4, delay },
        };

  return (
    <section
      id="contact"
      className="pt-6 sm:pt-8 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-[var(--bg)] transition-colors duration-200 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <p className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[var(--primary)]">
            Get in Touch
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--heading)] tracking-tight">
            Contact & Connect
          </h2>
          <div className="w-12 h-1 bg-[var(--primary)] mx-auto rounded-full mt-1.5" />
          <p className="text-sm sm:text-base text-[var(--text)] max-w-xl mx-auto mt-2">
            Interested in discussing research collaboration, software engineering internships, or junior roles? Drop me a message or connect directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Action Buttons & Contact Info (5 cols) */}
          <motion.div {...anim(0)} className="lg:col-span-5 space-y-6">
            <div className="bg-[var(--card)] rounded-2xl p-6 sm:p-7 border border-[var(--border)] shadow-sm space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--heading)]">
                Direct Channels
              </h3>
              <p className="text-sm text-[var(--text)] leading-relaxed">
                Feel free to email me directly or explore my activity on LinkedIn and GitHub:
              </p>

              {/* Action Buttons */}
              <div className="space-y-3">
                {/* Email Button */}
                <a
                  href={`mailto:${contactData.email}`}
                  className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl bg-[var(--bg)] border border-[var(--border)] hover:border-[var(--primary)] text-[var(--heading)] hover:text-[var(--primary)] transition duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[var(--accent)] text-[var(--primary)]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs text-[var(--text-muted)] font-medium">Email</div>
                      <div className="text-sm font-bold">{contactData.email}</div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[var(--primary)] group-hover:translate-x-1 transition duration-150">
                    Send ↗
                  </span>
                </a>

                {/* LinkedIn Button */}
                <a
                  href="https://www.linkedin.com/in/jeyakumarrenujan03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl bg-[var(--bg)] border border-[var(--border)] hover:border-[var(--primary)] text-[var(--heading)] hover:text-[var(--primary)] transition duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[var(--accent)] text-[var(--primary)]">
                      <FaLinkedin className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs text-[var(--text-muted)] font-medium">LinkedIn</div>
                      <div className="text-sm font-bold">jeyakumarrenujan03</div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[var(--primary)] group-hover:translate-x-1 transition duration-150">
                    Connect ↗
                  </span>
                </a>

                {/* GitHub Button */}
                <a
                  href="https://github.com/JeyakumarRenujan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl bg-[var(--bg)] border border-[var(--border)] hover:border-[var(--primary)] text-[var(--heading)] hover:text-[var(--primary)] transition duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[var(--accent)] text-[var(--primary)]">
                      <FaGithub className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs text-[var(--text-muted)] font-medium">GitHub</div>
                      <div className="text-sm font-bold">JeyakumarRenujan</div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[var(--primary)] group-hover:translate-x-1 transition duration-150">
                    Follow ↗
                  </span>
                </a>
              </div>

              {/* Location & Phone Meta */}
              <div className="pt-4 border-t border-[var(--border)] space-y-2 text-xs sm:text-sm text-[var(--text)]">
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[var(--primary)] shrink-0" />
                  <span>{contactData.phone}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-[var(--secondary)] shrink-0" />
                  <span>{contactData.location}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form (7 cols) */}
          <motion.div {...anim(0.1)} className="lg:col-span-7">
            <div className="bg-[var(--card)] rounded-2xl p-6 sm:p-8 border border-[var(--border)] shadow-sm">
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--heading)] mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text)] mb-6">
                Fill out the form below to deliver an instant message to my inbox.
              </p>

              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div>
                  <label htmlFor="from_name" className="block text-xs font-bold uppercase tracking-wider text-[var(--heading)] mb-1.5">
                    Your Name <span className="text-[var(--primary)]">*</span>
                  </label>
                  <input
                    id="from_name"
                    type="text"
                    name="from_name"
                    placeholder="e.g. Alex Morgan"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-[var(--heading)] placeholder-[var(--text-muted)] outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition duration-200 text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="from_email" className="block text-xs font-bold uppercase tracking-wider text-[var(--heading)] mb-1.5">
                    Your Email <span className="text-[var(--primary)]">*</span>
                  </label>
                  <input
                    id="from_email"
                    type="email"
                    name="from_email"
                    placeholder="e.g. alex@company.com"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-[var(--heading)] placeholder-[var(--text-muted)] outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition duration-200 text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[var(--heading)] mb-1.5">
                    Your Message <span className="text-[var(--primary)]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Share project inquiries, opportunities, or questions..."
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-[var(--heading)] placeholder-[var(--text-muted)] outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition duration-200 text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)] shadow-md shadow-orange-500/20 disabled:opacity-50 transition duration-200 cursor-pointer"
                >
                  {isSending ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;