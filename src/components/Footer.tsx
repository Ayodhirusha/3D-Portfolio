import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Education", id: "education" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Services", id: "services" },
    { name: "Contact", id: "contact" }
  ];

  const socialLinks = [
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/Ayod-hirusha" },
    { icon: FaFacebookF, url: "https://www.facebook.com/ayod.hirusha" },
    { icon: FaInstagram, url: "https://www.instagram.com/ayod_hirusha" },
    { icon: FaGithub, url: "https://github.com/Ayodhirusha" },
  ];

  const legalLinks = ["Privacy Policy", "Terms of Service", "Cookies", "License"];

  const scrollTo = (id: string) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-white/[0.03] backdrop-blur-xl pt-16 pb-8 px-6 overflow-hidden border-t border-white/10">
      {/* White Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[200px] bg-white/5 blur-[80px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        {/* Large Centered Name - Reduced Size */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8 text-center w-full"
        >
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30 uppercase">
            AYOD HIRUSHA
          </h1>
          <div className="h-[1px] w-full max-w-2xl mx-auto bg-gradient-to-r from-transparent via-white/20 to-transparent mt-4" />
        </motion.div>

        {/* Social Icons - White Glass Effect */}
        <div className="flex items-center gap-4 mb-8">
          {socialLinks.map((social, i) => (
            <motion.a
              key={i}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)", borderColor: "rgba(255,255,255,0.5)" }}
              className="w-12 h-12 rounded-full border border-white/15 flex items-center justify-center text-white/80 hover:text-white transition-all duration-300 bg-white/[0.08] backdrop-blur-lg shadow-lg"
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>

        {/* Navigation Links - More compact */}
        <nav className="mb-8">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:gap-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => scrollTo(link.id)}
                  className="font-display text-[10px] uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom Section - More compact */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <div className="font-body text-[10px] text-white/30 tracking-wider">
            © {currentYear} AYOD HIRUSHA. ALL RIGHTS RESERVED
          </div>

          <ul className="flex flex-wrap justify-center gap-4">
            {legalLinks.map((link, i) => (
              <li key={link} className="flex items-center gap-4">
                <a href="#" className="font-body text-[10px] uppercase tracking-widest text-white/20 hover:text-white/50 transition-colors duration-300">
                  {link}
                </a>
                {i < legalLinks.length - 1 && (
                  <span className="h-2 w-[1px] bg-white/5" />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
