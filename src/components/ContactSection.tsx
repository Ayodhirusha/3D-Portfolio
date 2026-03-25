import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  return (
    <section id="contact" className="relative py-32 px-6 md:px-12 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(146,63,255,0.06),transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-4">Contact</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Let's Build Something
            <br />
            <span className="text-gradient">Great Together</span>
          </h2>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card rounded-2xl p-8 md:p-12 space-y-6 mb-12"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative">
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder=" "
                className="peer w-full bg-transparent border border-border rounded-lg px-4 pt-6 pb-2 font-body text-sm text-foreground focus:border-primary focus:outline-none transition-colors"
              />
              <label className="absolute left-4 top-2 font-body text-xs text-muted-foreground peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary transition-all">
                Your Name
              </label>
            </div>
            <div className="relative">
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder=" "
                className="peer w-full bg-transparent border border-border rounded-lg px-4 pt-6 pb-2 font-body text-sm text-foreground focus:border-primary focus:outline-none transition-colors"
              />
              <label className="absolute left-4 top-2 font-body text-xs text-muted-foreground peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary transition-all">
                Your Email
              </label>
            </div>
          </div>
          <div className="relative">
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder=" "
              rows={5}
              className="peer w-full bg-transparent border border-border rounded-lg px-4 pt-6 pb-2 font-body text-sm text-foreground focus:border-primary focus:outline-none transition-colors resize-none"
            />
            <label className="absolute left-4 top-2 font-body text-xs text-muted-foreground peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary transition-all">
              Your Message
            </label>
          </div>
          <button
            type="submit"
            className="font-display text-sm px-10 py-4 rounded-full bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity flex items-center gap-2 mx-auto"
          >
            <Send className="w-4 h-4" />
            Send Message
          </button>
        </motion.form>

        {/* Social links */}
        <div className="flex items-center justify-center gap-6">
          {[
            { icon: FaGithub, url: "https://github.com/Ayodhirusha", label: "GitHub" },
            { icon: FaLinkedin, url: "https://www.linkedin.com/in/Ayod-hirusha", label: "LinkedIn" },
            { icon: Mail, url: "mailto:ayodhirusha77@gmail.com", label: "Email" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:glow-box transition-all duration-300"
            >
              <link.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
