import { motion } from "framer-motion";
import Scene3D from "./Scene3D";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Scene3D />
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-body text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6"
        >
          3D Web Developer &amp; UI/UX Designer
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-8"
        >
          Crafting Digital
          <br />
          <span className="text-gradient">Experiences</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="font-body text-lg text-muted-foreground max-w-xl mx-auto mb-10"
        >
          I design and build immersive web experiences that blend cutting-edge 3D technology with intuitive, human-centered design.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex items-center justify-center gap-4"
        >
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="font-display text-sm px-8 py-3.5 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity tracking-wide"
          >
            View Work
          </button>
          <button
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="font-display text-sm px-8 py-3.5 rounded-full border border-border text-foreground hover:border-primary hover:text-primary transition-colors tracking-wide"
          >
            About Me
          </button>
        </motion.div>
      </div>
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-1 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
