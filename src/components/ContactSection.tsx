import { motion } from "framer-motion";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-card/50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-4">Contact</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Let's Build Something
            <br />
            <span className="text-gradient">Amazing Together</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-lg mx-auto mb-12">
            Have a project in mind? I'd love to hear about it. I'm currently seeking new opportunities in the IT field to further develop my skills.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="mailto:ayodhirusha77@gmail.com"
              className="inline-flex items-center gap-2 font-display text-sm px-8 py-3.5 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity tracking-wide"
            >
              <Mail className="w-4 h-4" />
              ayodhirusha77@gmail.com
            </a>
            <div className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              Pamunugama, Sri Lanka
            </div>
          </div>
          <div className="flex items-center justify-center gap-8">
            {[
              { name: "GitHub", url: "https://github.com" },
              { name: "LinkedIn", url: "https://linkedin.com/in/ayod-hirusha-533375310" },
              { name: "Dribbble", url: "#" },
              { name: "Behance", url: "#" }
            ].map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group"
              >
                {link.name}
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-24 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-display text-sm font-bold tracking-tight text-gradient">AYOD HIRUSHA</span>
        <p className="font-body text-xs text-muted-foreground">
          © 2026 All rights reserved. Built with passion by Ayod Hirusha.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
