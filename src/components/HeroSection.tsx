import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Spotlight effects */}
      <div className="absolute top-[-200px] left-[-100px] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,hsl(var(--primary)/0.12),transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,hsl(var(--accent)/0.08),transparent_70%)] pointer-events-none" />

      {/* 3D Spline Scene */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://my.spline.design/lostorbinthemountains-A3skrxIvNeTYZbfp07EPK8Pg/"
          frameBorder="0"
          width="100%"
          height="100%"
          style={{ border: 'none' }}
          title="3D Scene"
        />
      </div>

      <div className="relative z-10 text-left px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="inline-block mb-8 px-6 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm"
        >
          <span className="font-body text-xs uppercase tracking-[0.3em] text-primary">
            Software Engineer Intern & UI/UX Designer
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-display text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.95] tracking-tight mb-8"
        >
          Hi, I'm <span className="text-white">Ayod</span> —
          <br />
          <span className="text-gradient">Full Stack Developer</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed"
        >
          I am a Software Engineering Graduate currently enrolled in the BSc (Hons) Software Engineering program at the University of Plymouth (UK).
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-6 justify-start items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="w-full sm:w-auto font-display text-sm px-10 py-5 rounded-full bg-gradient-primary text-white tracking-wide relative overflow-hidden group shadow-[0_10px_40px_-10px_rgba(146,63,255,0.5)]"
          >
            <div className="absolute inset-0 bg-white/15 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
            <span className="relative z-10">View My Work</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="w-full sm:w-auto font-display text-sm px-10 py-5 rounded-full border border-white/10 text-white hover:bg-white/5 transition-all tracking-wide backdrop-blur-sm"
          >
            Let's Talk
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
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
