import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Download, ArrowDown } from "lucide-react";
import { FaGithub, FaLinkedin, FaTiktok } from "react-icons/fa";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll over the 3D sticky container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Zoom in deeply (from 1 to 5) and fade out
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const bgOpacity = useTransform(scrollYProgress, [0.7, 0.95], [1, 0]);
  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const letterVariants = {
    hidden: { opacity: 0, y: 80, rotateX: -90 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        delay: 0.1 + i * 0.03,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  const title1 = "Hi, I'm Ayod Hirusha ";

  // Helper to split text by words then characters so words don't break in the middle
  const renderAnimatedText = (text: string, startIndex: number, useGradient: boolean = false) => {
    let charCount = startIndex;
    return text.split(" ").map((word, wordIndex) => (
      <span key={wordIndex} className="inline-block mr-[0.25em] whitespace-nowrap">
        {word.split("").map((char, charIndex) => {
          const currentIndex = charCount++;
          return (
            <motion.span
              key={charIndex}
              custom={currentIndex}
              variants={letterVariants}
              className={`inline-block ${useGradient ? "text-gradient" : "text-white"}`}
            >
              {char}
            </motion.span>
          );
        })}
      </span>
    ));
  };

  return (
    <section id="home" className="relative flex flex-col w-full bg-background mb-[-35vh]">
      {/* 3D Module Container with Sticky Zoom Effect */}
      <div ref={containerRef} className="relative h-[180vh] w-full">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          {/* Spotlight effects */}
          <div className="absolute top-[-200px] left-[-100px] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,hsl(var(--primary)/0.12),transparent_70%)] pointer-events-none" />
          <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,hsl(var(--accent)/0.08),transparent_70%)] pointer-events-none" />

          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute top-20 left-6 md:top-24 md:left-12 z-20 flex items-center gap-3 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md pointer-events-auto"
          >
            <div className="relative flex items-center justify-center">
              <span className="absolute w-3 h-3 rounded-full bg-emerald-400 opacity-60 animate-ping" />
              <span className="relative w-2 h-2 rounded-full bg-emerald-400" />
            </div>
            <span className="font-body text-xs md:text-sm font-medium text-white/90 whitespace-nowrap">
              Available for opportunities
            </span>
          </motion.div>

          {/* 3D Spline Scene with deep parallax zoom */}
          <motion.div className="absolute inset-0 z-0 origin-center" style={{ scale: bgScale, opacity: bgOpacity }}>
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

          {/* Gradient overlays to blend edges */}
          <div className="absolute inset-0 z-[1] bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-[2]" />

          {/* Text Content Overlay */}
          <div className="relative z-10 w-full px-6 md:px-12 h-[100vh] flex flex-col justify-center items-start text-left mt-24 md:mt-32 pointer-events-none">
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-display font-bold leading-[1.1] tracking-tight mb-6 pointer-events-auto"
              style={{ perspective: "1000px" }}
            >
              <span className="flex flex-wrap overflow-hidden text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                {renderAnimatedText(title1, 0, false)}
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-display font-medium text-lg md:text-xl tracking-wide mb-6 pointer-events-auto flex items-center gap-2"
            >
              <span className="text-[#B292FF] drop-shadow-[0_0_10px_rgba(178,146,255,0.3)]">Software Engineer</span>
              <span className="text-white/20">•</span>
              <span className="text-[#B292FF] drop-shadow-[0_0_10px_rgba(178,146,255,0.3)]">UI/UX Designer</span>
              <span className="text-white/20">•</span>
              <span className="text-[#B292FF] drop-shadow-[0_0_10px_rgba(178,146,255,0.3)]">Graphic Designer</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-body text-base sm:text-lg md:text-xl text-muted-foreground/80 max-w-2xl mb-10 leading-relaxed pointer-events-auto"
            >
              Crafting intuitive digital experiences at the intersection of engineering and design. Currently building products at <span className="text-white font-medium">MOB</span>.
            </motion.p>

            <motion.a
              href="/cv.pdf"
              target="_blank"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-3 rounded-full border border-white/10 text-white/90 font-display text-sm tracking-wide backdrop-blur-sm pointer-events-auto mb-16"
            >
              Download CV <Download className="w-4 h-4" />
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex items-center gap-4 mb-8 pointer-events-auto"
            >
              <a href="#" className="p-4 rounded-2xl bg-white/5 border border-white/5 text-white/70 hover:text-white hover:bg-white/10 transition-all">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href="#" className="p-4 rounded-2xl bg-white/5 border border-white/5 text-white/70 hover:text-white hover:bg-white/10 transition-all">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-4 rounded-2xl bg-white/5 border border-white/5 text-white/70 hover:text-white hover:bg-white/10 transition-all">
                <FaTiktok className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* Scroll Indicator positioned absolutely at bottom center */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-auto z-20"
          >
            <span className="font-display text-[10px] uppercase tracking-[0.2em] text-white/40">Scroll</span>
            <ArrowDown className="w-4 h-4 text-white/40 animate-bounce" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
