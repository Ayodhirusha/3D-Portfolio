import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebookF } from "react-icons/fa";
import { ArrowUp, Zap } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Education", id: "education" },
    { name: "Projects", id: "projects" },
    { name: "Services", id: "services" },
    { name: "Contact", id: "contact" },
  ];

  const scrollTo = (id: string) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = 100;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="relative pt-10 sm:pt-12 pb-6 sm:pb-8 px-4 sm:px-6 md:px-12 overflow-hidden border-t border-foreground/10 glass-card backdrop-blur-md">
      <div className="absolute inset-0 bg-background/40 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 top-0 bg-gradient-to-t from-blue-600/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute -bottom-[40%] left-[10%] w-[80%] h-[100%] bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.3),transparent_70%)] pointer-events-none blur-[120px]" />
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16 mb-8 sm:mb-12">
          <div className="lg:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-[1.1] tracking-tighter mb-4 sm:mb-6 text-foreground"
            >
              LET'S MAKE IT <br /> HAPPEN NOW
            </motion.h2>

            <div className="flex flex-wrap gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollTo("contact")}
                className="flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-blue-600 text-white font-display text-[9px] sm:text-[10px] uppercase tracking-widest hover:bg-blue-700 transition-all shadow-[0_10px_30px_rgba(37,99,235,0.3)]"
              >
                <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> Start Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-foreground/10 text-foreground font-display text-[9px] sm:text-[10px] uppercase tracking-widest hover:bg-foreground/5 transition-all"
              >
                Book a call
              </motion.button>
            </div>
          </div>

          <div className="lg:col-span-5 lg:pt-4">
            <div className="mb-6 sm:mb-8">
              <h4 className="font-display text-[10px] sm:text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 sm:mb-6">Navigate</h4>
              <ul className="flex flex-wrap items-center gap-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <motion.button
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "rgba(37, 99, 235, 0.15)",
                        borderColor: "rgba(37, 99, 235, 0.4)",
                      }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => scrollTo(link.id)}
                      className="whitespace-nowrap px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-foreground/5 font-display text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-all text-center backdrop-blur-md"
                    >
                      {link.name}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display text-[10px] sm:text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3 sm:mb-4">Connect with us</h4>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                {[
                  { icon: FaFacebookF, url: "https://www.facebook.com/ayod.hirusha.3/", color: "bg-[#1877F2]", label: "Facebook" },
                  { icon: FaInstagram, url: "https://instagram.com/_mr.bay_nx_613_", color: "bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#cc2366]", label: "Instagram" },
                  { icon: FaLinkedin, url: "https://www.linkedin.com/in/ayod-hirusha", color: "bg-[#0A66C2]", label: "LinkedIn" },
                  { icon: FaGithub, url: "https://github.com/Ayodhirusha", color: "bg-[#333]", label: "GitHub" },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full ${social.color} flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-foreground/5 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 sm:gap-6">
          <div className="space-y-1">
            <p className="font-display text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-muted-foreground/30">All Rights Reserved.</p>
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-foreground">
              © {currentYear} AYOD HIRUSHA
            </h3>
          </div>

          <div className="flex flex-row sm:flex-col items-center sm:items-end gap-4">
            <div className="text-left sm:text-right">
              <p className="font-display text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-muted-foreground/30 mb-1">Local Time</p>
              <div className="flex items-center gap-2 font-display text-[9px] sm:text-[10px] uppercase tracking-widest text-foreground/80">
                <span className="text-blue-500 font-bold">*</span>
                {time.toLocaleTimeString('en-US', { hour12: true })} , GMT +5:30
              </div>
            </div>

            <motion.button
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-[0_10px_30px_rgba(37,99,235,0.3)]"
            >
              <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
