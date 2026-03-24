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
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-background/60 backdrop-blur-xl border-b border-border/50"
    >
      <span className="font-display text-xl font-bold tracking-tight text-gradient">
        MiladiCode
      </span>
      <ul className="hidden lg:flex items-center gap-8">
        {navItems.map((item) => (
          <li key={item}>
            <button
              onClick={() => scrollTo(item)}
              className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-300 tracking-wide"
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={() => scrollTo("Contact")}
        className="hidden md:block font-display text-sm px-6 py-2.5 rounded-full bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity"
      >
        Let's Talk
      </button>

      {/* Mobile menu button */}
      <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-foreground">
        {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border p-6 lg:hidden"
        >
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollTo(item)}
                  className="font-body text-sm text-muted-foreground hover:text-primary transition-colors w-full text-left"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
