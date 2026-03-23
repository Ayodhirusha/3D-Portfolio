import { motion } from "framer-motion";
import Scene3D from "./Scene3D";
import setupImg from "@/assets/3d-setup.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <Scene3D />
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-body text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6"
        >
          3D Web Developer &amp; UI/UX Designer
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-8"
        >
          Crafting Digital
          <br />
          <span className="text-gradient">Experiences</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-body text-lg text-muted-foreground max-w-xl mx-auto mb-10"
        >
          I design and build immersive web experiences that blend cutting-edge 3D technology with intuitive, human-centered design.
        </motion.p>

        {/* 3D Setup Image */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto max-w-3xl mb-10"
        >
          {/* Glow behind image */}
          <div className="absolute inset-0 bg-primary/8 rounded-2xl blur-3xl scale-110" />
          <div className="relative">
            <img
              src={setupImg}
              alt="3D Developer Workstation Setup"
              className="w-full rounded-xl"
            />
            {/* Subtle overlay for blending */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-background/30 via-transparent to-transparent" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
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
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
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
