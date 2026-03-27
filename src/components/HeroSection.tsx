import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -80]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  const letterVariants = {
    hidden: { opacity: 0, y: 80, rotateX: -90 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        delay: 0.8 + i * 0.04,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  const title1 = "Hi, I'm Ayod —";
  const title2 = "Full Stack Developer";

  return (
    <section ref={ref} id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Spotlight effects */}
      <div className="absolute top-[-200px] left-[-100px] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,hsl(var(--primary)/0.12),transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,hsl(var(--accent)/0.08),transparent_70%)] pointer-events-none" />

      {/* 3D Spline Scene with parallax zoom */}
      <motion.div className="absolute inset-0 z-0" style={{ scale: bgScale, opacity: bgOpacity }}>
        <iframe
          src="https://my.spline.design/lostorbinthemountains-j7sTXV5E354X6Gz9UsmdAjc6/"
          frameBorder="0"
          width="100%"
          height="100%"
          style={{ border: 'none' }}
          title="3D Scene"
          loading="lazy"
        />
      </motion.div>

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-background via-background/30 to-transparent" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-background/60 via-transparent to-transparent" />

      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 text-left px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full"
      >
        <motion.div
          initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.3 }}
          className="inline-block mb-8 px-6 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm"
        >
          <span className="font-body text-xs uppercase tracking-[0.3em] text-primary">
            Software Engineer Intern & UI/UX Designer
          </span>
        </motion.div>

        <h1 className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.95] tracking-tight mb-8" style={{ perspective: "1000px" }}>
          <span className="block overflow-hidden">
            {title1.split("").map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="inline-block text-white"
                style={{ whiteSpace: char === " " ? "pre" : undefined }}
              >
                {char}
              </motion.span>
            ))}
          </span>
          <span className="block overflow-hidden mt-2">
            {title2.split("").map((char, i) => (
              <motion.span
                key={i}
                custom={i + title1.length}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="inline-block text-gradient"
                style={{ whiteSpace: char === " " ? "pre" : undefined }}
              >
                {char}
              </motion.span>
            ))}
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="font-body text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed"
        >
          I am a Software Engineering Graduate currently enrolled in the BSc (Hons) Software Engineering program at the University of Plymouth (UK).
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.1 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-start items-start sm:items-center"
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
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-body text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Scroll</span>
          <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-1.5">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-1 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
