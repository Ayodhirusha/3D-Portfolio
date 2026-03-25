import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Mail, Phone, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-[#030305] pt-24 pb-12 px-6 overflow-hidden">
      {/* Top gradient wave */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-primary" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[50%] h-[200px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none opacity-[0.02]">
        <h1 className="font-display text-[18vw] font-black tracking-tighter leading-none text-white">
          AYOD
        </h1>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Logo & About */}
          <div className="space-y-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 cursor-pointer"
            >
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center font-display font-black text-2xl text-white"
                style={{ boxShadow: "0 0 30px rgba(146,63,255,0.3)" }}
              >
                A
              </div>
              <span className="font-display text-lg font-bold text-gradient">Ayod.H</span>
            </motion.div>
            <p className="font-body text-sm text-white/40 leading-relaxed max-w-xs">
              Software Engineering graduate from University of Plymouth (UK). Experienced in Full Stack Development, UI/UX design, and mobile app development.
            </p>
          </div>

          {/* Contact Us */}
          <div className="space-y-6">
            <h3 className="font-display text-lg font-bold text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-white/50 hover:text-primary transition-colors cursor-pointer group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/10 group-hover:glow-box transition-all duration-500">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm font-body">077 0336504</span>
              </li>
              <li className="flex items-center gap-3 text-white/50 hover:text-primary transition-colors cursor-pointer group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/10 group-hover:glow-box transition-all duration-500">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm font-body">ayodhirusha77@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-display text-lg font-bold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "About", "Skills", "Services", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      if (item === "Home") window.scrollTo({ top: 0, behavior: "smooth" });
                      else document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="font-body text-sm text-white/40 hover:text-primary hover:translate-x-2 transition-all duration-300 inline-block"
                  >
                    → {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-6">
            <h3 className="font-display text-lg font-bold text-white">Follow Me</h3>
            <div className="flex items-center gap-3 flex-wrap">
              {[
                { icon: FaGithub, url: "https://github.com/Ayodhirusha" },
                { icon: FaLinkedin, url: "https://www.linkedin.com/in/Ayod-hirusha" },
                { icon: FaFacebookF, url: "#" },
                { icon: FaTwitter, url: "#" },
                { icon: FaInstagram, url: "#" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  className="group/s w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-gradient-primary hover:text-white transition-all duration-500 relative overflow-hidden"
                >
                  <social.icon className="w-4 h-4 relative z-10" />
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover/s:opacity-100 transition-opacity duration-500"
                    style={{ boxShadow: "0 0 20px rgba(146,63,255,0.4)" }}
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/25 flex items-center gap-1.5">
            © 2025 Ayod Hirusha. Made with <Heart className="w-3 h-3 text-primary inline" /> All Rights Reserved
          </p>
          <p className="font-body text-xs text-white/20 uppercase tracking-widest">
            Crafted with passion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
