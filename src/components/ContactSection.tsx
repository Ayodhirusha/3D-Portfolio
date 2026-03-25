import { motion } from "framer-motion";
import { Mail, Send, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);

  return (
    <section id="contact" className="relative py-32 px-6 md:px-12 overflow-hidden">
      {/* Large spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(146,63,255,0.08),transparent_60%)] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(125,191,255,0.06),transparent_60%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-4">Contact</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">
            Let's Build Something
            <br />
            <span className="text-gradient">Great Together</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-lg mx-auto">
            Have a project in mind? Let's create something extraordinary.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            {[
              { icon: Mail, label: "Email", value: "ayodhirusha77@gmail.com", href: "mailto:ayodhirusha77@gmail.com" },
              { icon: Phone, label: "Phone", value: "077 0336504", href: "tel:+94770336504" },
              { icon: MapPin, label: "Location", value: "Sri Lanka", href: "#" },
            ].map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="group flex items-center gap-5 p-5 rounded-2xl glass-card hover:border-primary/30 hover:glow-box transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-primary-subtle flex items-center justify-center group-hover:glow-box transition-shadow duration-500 flex-shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                  <p className="font-display text-sm font-medium text-foreground">{item.value}</p>
                </div>
              </motion.a>
            ))}

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="pt-4"
            >
              <p className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-4">Find me on</p>
              <div className="flex items-center gap-4">
                {[
                  { icon: FaGithub, url: "https://github.com/Ayodhirusha", label: "GitHub" },
                  { icon: FaLinkedin, url: "https://www.linkedin.com/in/Ayod-hirusha", label: "LinkedIn" },
                  { icon: FaWhatsapp, url: "https://wa.me/94770336504", label: "WhatsApp" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/icon relative w-12 h-12 rounded-full flex items-center justify-center overflow-hidden transition-all duration-500"
                  >
                    {/* Gradient bg on hover */}
                    <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover/icon:opacity-100 transition-opacity duration-500 rounded-full" />
                    <div className="absolute inset-0 rounded-full border border-border group-hover/icon:border-transparent transition-colors duration-500" />
                    <link.icon className="w-5 h-5 text-muted-foreground group-hover/icon:text-white relative z-10 transition-colors duration-300" />
                    {/* Glow */}
                    <div className="absolute inset-0 rounded-full opacity-0 group-hover/icon:opacity-100 transition-opacity duration-500 glow-box" />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form - Dark glassmorphic card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3 relative"
          >
            {/* Decorative corner glow */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

            <form
              onSubmit={(e) => e.preventDefault()}
              className="relative glass-card rounded-3xl p-8 md:p-10 space-y-6 border-primary/10"
              style={{
                background: "linear-gradient(145deg, rgba(146,63,255,0.04), rgba(0,0,0,0.6), rgba(125,191,255,0.03))",
                boxShadow: "0 25px 80px -20px rgba(146,63,255,0.15), inset 0 1px 0 rgba(255,255,255,0.05)",
              }}
            >
              {/* Form header */}
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="font-body text-xs text-muted-foreground ml-4">contact_form.tsx</span>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                {[
                  { key: "name", label: "Your Name", type: "text" },
                  { key: "email", label: "Your Email", type: "email" },
                ].map((field) => (
                  <div key={field.key} className="relative group">
                    <label
                      className={`absolute left-4 font-body text-xs transition-all duration-300 pointer-events-none z-10 ${
                        focused === field.key || formData[field.key as keyof typeof formData]
                          ? "top-2 text-primary"
                          : "top-4 text-muted-foreground"
                      }`}
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      value={formData[field.key as keyof typeof formData]}
                      onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                      onFocus={() => setFocused(field.key)}
                      onBlur={() => setFocused(null)}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 pt-6 pb-2.5 font-body text-sm text-foreground focus:border-primary/60 focus:bg-white/[0.05] focus:outline-none transition-all duration-300"
                      style={{
                        boxShadow: focused === field.key ? "0 0 20px rgba(146,63,255,0.1), inset 0 0 20px rgba(146,63,255,0.03)" : "none",
                      }}
                    />
                  </div>
                ))}
              </div>

              <div className="relative group">
                <label
                  className={`absolute left-4 font-body text-xs transition-all duration-300 pointer-events-none z-10 ${
                    focused === "subject" || formData.subject
                      ? "top-2 text-primary"
                      : "top-4 text-muted-foreground"
                  }`}
                >
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  onFocus={() => setFocused("subject")}
                  onBlur={() => setFocused(null)}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 pt-6 pb-2.5 font-body text-sm text-foreground focus:border-primary/60 focus:bg-white/[0.05] focus:outline-none transition-all duration-300"
                  style={{
                    boxShadow: focused === "subject" ? "0 0 20px rgba(146,63,255,0.1), inset 0 0 20px rgba(146,63,255,0.03)" : "none",
                  }}
                />
              </div>

              <div className="relative group">
                <label
                  className={`absolute left-4 font-body text-xs transition-all duration-300 pointer-events-none z-10 ${
                    focused === "message" || formData.message
                      ? "top-2 text-primary"
                      : "top-4 text-muted-foreground"
                  }`}
                >
                  Your Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  rows={5}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 pt-6 pb-2.5 font-body text-sm text-foreground focus:border-primary/60 focus:bg-white/[0.05] focus:outline-none transition-all duration-300 resize-none"
                  style={{
                    boxShadow: focused === "message" ? "0 0 20px rgba(146,63,255,0.1), inset 0 0 20px rgba(146,63,255,0.03)" : "none",
                  }}
                />
              </div>

              {/* Submit button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full font-display text-sm py-4 rounded-xl bg-gradient-primary text-white hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-3 relative overflow-hidden group"
                style={{
                  boxShadow: "0 10px 40px -10px rgba(146,63,255,0.4)",
                }}
              >
                <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                <Send className="w-4 h-4 relative z-10" />
                <span className="relative z-10">Send Message</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
