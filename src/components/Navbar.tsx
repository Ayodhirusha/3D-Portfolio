import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = ["About", "Experience", "Education", "Skills", "Projects", "Services"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("About");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => {
        let id = item.toLowerCase();
        if (item === "Skills") id = "techstack";
        return { id, name: item };
      });

      const currentSection = sections.find(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });

      if (currentSection) {
        setActiveItem(currentSection.name);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setActiveItem(id);
    let elementId = id.toLowerCase();
    
    if (id === "Skills") elementId = "techstack";
    
    const element = document.getElementById(elementId);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setMobileOpen(false);
  };

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative flex items-center gap-6 px-6 py-3 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl"
      >
        {/* Logo */}
        <div className="flex items-center gap-4 border-r border-white/10 pr-6 mr-2">
          <span className="font-display text-lg font-bold tracking-tight text-gradient">
            Ayod.H
          </span>
        </div>

        {/* Nav Items */}
        <ul className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollTo(item)}
                className={`font-display text-[11px] uppercase tracking-widest transition-all duration-300 ${
                  activeItem === item 
                    ? "text-white" 
                    : "text-white/40 hover:text-white/80"
                }`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

        {/* Separator & Let's Talk */}
        <div className="hidden lg:flex items-center gap-6 border-l border-white/10 pl-6 ml-2">
          <button
            onClick={() => scrollTo("Contact")}
            className="font-display text-[11px] uppercase tracking-widest px-6 py-2.5 rounded-full bg-primary text-white hover:bg-primary/90 transition-all duration-300 shadow-[0_0_20px_rgba(146,63,255,0.4)]"
          >
            Let's Talk
          </button>
        </div>

        <div className="lg:hidden flex items-center">
          <button onClick={() => setMobileOpen(!mobileOpen)} className="text-white/70 hover:text-white p-2">
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 right-0 mt-4 bg-[#12121a]/95 backdrop-blur-xl border border-white/10 p-6 rounded-2xl lg:hidden shadow-2xl"
          >
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollTo(item)}
                    className="font-body text-sm text-white/70 hover:text-white transition-colors w-full text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </motion.nav>
    </div>
  );
};

export default Navbar;
