import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { ArrowUp, ArrowRight, MessageSquare, Mail, Phone, MapPin, Download, Send, Zap } from "lucide-react";
import { useState, useEffect } from "react";

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


  const socialLinks = [
    { icon: FaWhatsapp, url: "https://wa.me/94770336504" },
    { icon: FaInstagram, url: "https://www.instagram.com/_mr.bay_nx_613_?igsh=MWJlaWdhcm5tYmM0ZQ==" },
    { icon: FaGithub, url: "https://github.com/Ayodhirusha" },
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
    <footer className="relative bg-black pt-12 pb-8 px-6 md:px-12 overflow-hidden border-t border-white/5">
      {/* Background Gradient Effect - Mirroring the reference image */}
      <div className="absolute inset-0 bg-[#000000] pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 top-0 bg-gradient-to-t from-blue-600/20 via-transparent to-transparent pointer-events-none" />
      <div className="absolute -bottom-[40%] left-[10%] w-[80%] h-[100%] bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.3),transparent_70%)] pointer-events-none blur-[120px]" />
      <div className="absolute -bottom-[40%] right-[10%] w-[80%] h-[100%] bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.3),transparent_70%)] pointer-events-none blur-[120px]" />
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-8 mb-8 border-b border-white/5">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
              <span className="text-black font-bold text-lg">A</span>
            </div>
            <p className="font-body text-[10px] md:text-xs text-white/50 max-w-[240px] leading-relaxed">
              Your next idea, beautifully designed and flawlessly built
            </p>
          </div>

          <div className="flex items-center gap-2">
            {socialLinks.map((social, i) => (
              <motion.a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all duration-300"
              >
                <social.icon className="w-3.5 h-3.5" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Middle Section */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-12">
          <div className="lg:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl md:text-5xl xl:text-6xl font-bold leading-[1.1] tracking-tighter mb-6 text-white"
            >
              LET'S MAKE IT <br /> HAPPEN NOW
            </motion.h2>

            <div className="flex flex-wrap gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollTo("contact")}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-display text-[10px] uppercase tracking-widest hover:bg-blue-700 transition-all shadow-[0_10px_30px_rgba(37,99,235,0.3)]"
              >
                <Zap className="w-3.5 h-3.5" /> Start Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-white font-display text-[10px] uppercase tracking-widest hover:bg-white/5 transition-all"
              >
                Book a call
              </motion.button>
            </div>
          </div>

          <div className="lg:col-span-5 lg:pt-4">
            <div>
              <h4 className="font-display text-xs uppercase tracking-[0.3em] text-white/40 mb-6">Navigate</h4>
              <ul className="flex flex-wrap items-center gap-2.5">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <motion.button
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "rgba(37, 99, 235, 0.15)",
                        borderColor: "rgba(37, 99, 235, 0.4)",
                        boxShadow: "0 0 20px rgba(37, 99, 235, 0.2)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => scrollTo(link.id)}
                      className="whitespace-nowrap px-4 py-2 rounded-full border border-white/5 font-display text-[9px] md:text-[10px] uppercase tracking-widest text-white/60 hover:text-white transition-all text-center backdrop-blur-md"
                    >
                      {link.name}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-end justify-between gap-6">
          <div className="space-y-1">
            <p className="font-display text-[9px] uppercase tracking-[0.2em] text-white/30">All Rights Reserved.</p>
            <h3 className="font-display text-3xl md:text-4xl font-bold tracking-tighter text-white">
              © {currentYear} AYOD HIRUSHA
            </h3>
          </div>

          <div className="flex flex-col md:items-end gap-4">
            <div className="text-left md:text-right">
              <p className="font-display text-[9px] uppercase tracking-[0.2em] text-white/30 mb-1">Local Time</p>
              <div className="flex items-center gap-2 font-display text-[10px] uppercase tracking-widest text-white/80">
                <span className="text-blue-500 font-bold">*</span>
                {time.toLocaleTimeString('en-US', { hour12: true })} , GMT +5:30
              </div>
            </div>

            <motion.button
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-[0_10px_30px_rgba(37,99,235,0.3)] self-end"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

