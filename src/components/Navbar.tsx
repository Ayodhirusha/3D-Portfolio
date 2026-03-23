import { motion } from "framer-motion";

const navItems = ["About", "Services", "Projects", "Contact"];

const Navbar = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 bg-background/60 backdrop-blur-xl border-b border-border/50"
    >
      <span className="font-display text-xl font-bold tracking-tight text-gradient">
        STUDIO.
      </span>
      <ul className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <li key={item}>
            <button
              onClick={() => scrollTo(item)}
              className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-300 tracking-wide uppercase"
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={() => scrollTo("contact")}
        className="hidden md:block font-display text-sm px-5 py-2 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
      >
        Let's Talk
      </button>
    </motion.nav>
  );
};

export default Navbar;
