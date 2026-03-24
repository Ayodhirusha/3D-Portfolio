import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";

const navLinks = ["Home", "About", "Skills", "Services", "Projects", "Testimonials", "Contact"];

const Footer = () => {
  const scrollTo = (id: string) => {
    if (id === "Home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-background border-t border-border overflow-hidden">
      {/* Gradient wave accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-primary" />
      <div className="absolute top-0 left-1/4 w-96 h-32 bg-[radial-gradient(ellipse,rgba(146,63,255,0.1),transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          <span className="font-display text-xl font-bold text-gradient">MiladiCode</span>

          {/* Quick links */}
          <ul className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((link) => (
              <li key={link}>
                <button
                  onClick={() => scrollTo(link)}
                  className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-border/50">
          <p className="font-body text-sm text-muted-foreground">
            © 2025 MiladiCode. All rights reserved.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {[
              { icon: FaGithub, url: "https://github.com" },
              { icon: FaLinkedin, url: "https://linkedin.com/in/ayod-hirusha-533375310" },
              { icon: Mail, url: "mailto:ayodhirusha77@gmail.com" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:glow-box transition-all duration-300"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
