import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = ["Home", "About", "Skills", "Services", "Projects", "Testimonials", "Contact"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    if (id === "Home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative flex items-center gap-8 px-8 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
      >
        <span className="font-display text-lg font-bold tracking-tight text-gradient border-r border-white/10 pr-6 mr-2">
          MiladiCode
        </span>
        <ul className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollTo(item)}
                className="font-body text-xs text-white/70 hover:text-white transition-all duration-300 tracking-wider uppercase"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 ml-2 border-l border-white/10 pl-6">
          <button
            onClick={() => scrollTo("Contact")}
            className="hidden md:block font-display text-xs px-5 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all border border-white/10"
          >
            Let's Talk
          </button>

          {/* Mobile menu button */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-white/70 hover:text-white">
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
