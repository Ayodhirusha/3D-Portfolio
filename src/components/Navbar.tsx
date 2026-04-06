import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

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
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pointer-events-none"
      animate={{ y: hidden ? -120 : 0, opacity: hidden ? 0 : 1 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <div className="w-full flex justify-center max-w-7xl pointer-events-none relative">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:flex relative items-center lg:w-auto gap-6 px-4 lg:px-6 py-3 bg-background/80 dark:bg-background/40 backdrop-blur-xl border border-foreground/10 rounded-full shadow-2xl pointer-events-auto"
        >
          <div className="flex items-center gap-4 border-r border-foreground/10 pr-6 mr-2">
            <span className="font-display text-lg font-bold tracking-tight text-gradient">
              Ayod Hirusha
            </span>
          </div>

          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollTo(item)}
                  className={`font-display text-[11px] uppercase tracking-widest transition-all duration-300 relative ${activeItem === item
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground/80"
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

          <div className="flex items-center gap-6 border-l border-foreground/10 pl-6 ml-2">
            <Link
              to="/whatsapp"
              className="hidden sm:flex items-center gap-2 font-display text-[11px] uppercase tracking-widest px-6 py-2.5 rounded-full bg-[#25D366] text-black hover:bg-[#25D366]/90 transition-all duration-300 shadow-[0_0_20px_rgba(37,211,102,0.4)] pointer-events-auto group"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-black group-hover:scale-110 transition-transform" />
              WhatsApp
            </Link>
            <button
              onClick={() => scrollTo("Contact")}
              className="font-display text-[11px] uppercase tracking-widest px-6 py-2.5 rounded-full bg-primary text-white hover:bg-primary/90 transition-all duration-300 shadow-[0_0_20px_rgba(146,63,255,0.4)]"
            >
              Let's Talk
            </button>
          </div>
        </motion.nav>

        {/* Mobile Hamburger - Positioned Absolute to the right */}
        <div className="lg:hidden absolute right-0 flex items-center pointer-events-auto">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-foreground hover:text-primary transition-all duration-300 p-2"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>

          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="absolute top-full right-0 mt-4 w-64 bg-background/95 dark:bg-background/90 backdrop-blur-2xl border border-foreground/10 p-6 rounded-3xl lg:hidden shadow-2xl z-50 origin-top-right"
            >
              <ul className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollTo(item)}
                      className={`font-display text-xs uppercase tracking-[0.2em] w-full text-left py-4 px-6 rounded-2xl transition-all duration-300 ${activeItem === item
                        ? "bg-primary/20 text-foreground border border-primary/20"
                        : "text-muted-foreground hover:text-foreground/70 hover:bg-foreground/5"
                        }`}
                    >
                      {item}
                    </button>
                  </li>
                ))}
                <li className="mt-4 pt-4 border-t border-white/5 space-y-3">
                  <Link
                    to="/whatsapp"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center gap-2 w-full font-display text-xs uppercase tracking-widest py-4 rounded-2xl bg-[#25D366] text-black shadow-[0_10px_30px_rgba(37,211,102,0.3)]"
                  >
                    <MessageSquare className="w-4 h-4 fill-black" />
                    WhatsApp
                  </Link>
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
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
