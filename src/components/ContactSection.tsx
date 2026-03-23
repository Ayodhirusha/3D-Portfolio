import { motion } from "framer-motion";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-card/50 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <motion.p variants={fadeUp} className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-4">
            Contact
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-6xl font-bold mb-6">
            Let's Build Something
            <br />
            <span className="text-gradient">Extraordinary</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="font-body text-muted-foreground max-w-lg mx-auto mb-12">
            Have a project in mind? I'd love to hear about it. Let's collaborate and create something that makes an impact.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <motion.a
              href="mailto:hello@studio.dev"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 font-display text-sm px-8 py-3.5 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity tracking-wide"
            >
              <Mail className="w-4 h-4" />
              hello@studio.dev
            </motion.a>
            <div className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              Available Worldwide
            </div>
          </motion.div>
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-8">
            {["GitHub", "Dribbble", "LinkedIn", "Twitter"].map((link) => (
              <motion.a
                key={link}
                href="#"
                whileHover={{ y: -2 }}
                className="font-body text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group"
              >
                {link}
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto mt-24 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <span className="font-display text-sm font-bold tracking-tight text-gradient">STUDIO.</span>
        <p className="font-body text-xs text-muted-foreground">
          © 2026 All rights reserved. Designed & Built with passion.
        </p>
      </motion.div>
    </section>
  );
};

export default ContactSection;
