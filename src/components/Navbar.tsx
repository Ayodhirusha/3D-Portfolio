import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = ["About", "Experience", "Education", "Skills", "Projects", "Services"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("About");
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    if (latest > prev && latest > 200) {
      setHidden(true);
      setMobileOpen(false);
    } else {
      setHidden(false);
    }
  });

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
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <motion.div
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6"
      animate={{ y: hidden ? -120 : 0, opacity: hidden ? 0 : 1 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative flex items-center gap-6 px-6 py-3 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl"
      >
        <div className="flex items-center gap-4 border-r border-white/10 pr-6 mr-2">
          <span className="font-display text-lg font-bold tracking-tight text-gradient">
            Ayod.H
          </span>
        </div>

        <ul className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollTo(item)}
                className={`font-display text-[11px] uppercase tracking-widest transition-all duration-300 relative ${
                  activeItem === item
                    ? "text-white"
                    : "text-white/40 hover:text-white/80"
                }`}
              >
                {item}
                {activeItem === item && (
                  <motion.div
                    layoutId="navIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-primary rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

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

        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 mt-4 bg-black/90 backdrop-blur-2xl border border-white/10 p-6 rounded-3xl lg:hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-50"
          >
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollTo(item)}
                    className={`font-display text-xs uppercase tracking-[0.2em] w-full text-left py-4 px-6 rounded-2xl transition-all duration-300 ${
                      activeItem === item
                        ? "bg-primary/20 text-white border border-primary/20"
                        : "text-white/40 hover:text-white/70 hover:bg-white/5"
                    }`}
                  >
                    {item}
                  </button>
                </li>
              ))}
              <li className="mt-4 pt-4 border-t border-white/5">
                <button
                  onClick={() => scrollTo("Contact")}
                  className="w-full font-display text-xs uppercase tracking-widest py-4 rounded-2xl bg-primary text-white shadow-[0_10px_30px_rgba(146,63,255,0.3)]"
                >
                  Let's Talk
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </motion.nav>
    </motion.div>
  );
};

export default Navbar;
