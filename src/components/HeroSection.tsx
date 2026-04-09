import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Download, ArrowDown, Code2, Palette, Layers } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [paragraphKey, setParagraphKey] = useState(0);

  useEffect(() => {
    const loopInterval = setInterval(() => {
      setParagraphKey(prev => prev + 1);
    }, 8000); // 8 seconds to allow reading before repeating
    return () => clearInterval(loopInterval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1200);

    // Check if device is mobile to optimize 3D rendering
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothScrollProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const bgScale = useTransform(smoothScrollProgress, [0, 1], [1, 5]);
  const bgOpacity = useTransform(smoothScrollProgress, [0.7, 0.95], [1, 0]);
  const bgFilter = useTransform(smoothScrollProgress, [0, 0.8], ["blur(0px)", "blur(12px)"]);
  const indicatorOpacity = useTransform(smoothScrollProgress, [0, 0.2], [1, 0]);
  const paragraphVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.015,
        delayChildren: 0.8,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, filter: "blur(2px)" },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.1, ease: "linear" },
    },
  };

  const renderLetters = (text: string, className?: string) => {
    return text.split("").map((char, i) => (
      <motion.span
        key={`${char}-${i}`}
        variants={letterVariants}
        className={`inline-block whitespace-pre ${className || ""}`}
      >
        {char}
      </motion.span>
    ));
  };

  return (
    <section id="home" className="relative flex flex-col w-full mb-[-35vh]">
      <div ref={containerRef} className="relative h-[180vh] w-full">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          {/* Spotlight effects */}
          <div className="absolute top-[-200px] left-[-100px] w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-[radial-gradient(circle,hsl(var(--primary)/0.12),transparent_70%)] pointer-events-none" />
          <div className="absolute bottom-[-200px] right-[-100px] w-[250px] md:w-[500px] h-[250px] md:h-[500px] rounded-full bg-[radial-gradient(circle,hsl(var(--accent)/0.08),transparent_70%)] pointer-events-none" />

          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute top-20 left-4 sm:left-6 md:top-24 md:left-12 z-20 flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md pointer-events-auto"
          >
            <div className="relative flex items-center justify-center">
              <span className="absolute w-3 h-3 rounded-full bg-emerald-400 opacity-60 animate-ping" />
              <span className="relative w-2 h-2 rounded-full bg-emerald-400" />
            </div>
            <span className="font-body text-[10px] sm:text-xs md:text-sm font-medium text-foreground/90 whitespace-nowrap">
              Available for opportunities
            </span>
          </motion.div>

          {/* 3D Spline Scene */}
          <motion.div
            className={`absolute inset-0 z-0 origin-center ${isMobile ? 'pointer-events-none' : ''}`}
            style={{
              scale: isMobile ? 1 : bgScale,
              opacity: useTransform(smoothScrollProgress, [0, 0.7, 0.95], [isLoaded ? 1 : 0, 1, 0]),
              filter: isMobile ? "none" : bgFilter,
              willChange: isMobile ? "opacity" : "transform, opacity, filter"
            }}
          >
            <iframe
              ref={iframeRef}
              src="https://my.spline.design/lostorbinthemountains-j7sTXV5E354X6Gz9UsmdAjc6/"
              frameBorder="0"
              width="100%"
              height="100%"
              style={{
                border: 'none',
                opacity: isLoaded ? 1 : 0,
                transition: 'opacity 3.5s ease-in-out'
              }}
              title="3D Scene"
            />
          </motion.div>

          {/* Gradient overlays */}
          <div className="absolute inset-0 z-[1] bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none z-[2]" />
          <div className="absolute inset-x-0 bottom-[-1px] h-32 bg-background pointer-events-none z-[3] blur-xl opacity-50" />

          <div className="relative z-10 w-full px-4 sm:px-6 md:px-12 h-screen flex flex-col justify-center items-center text-center sm:items-start sm:text-left pt-20 pointer-events-none">
            <h1
              className="font-display font-bold leading-[1.1] tracking-tight mb-4 sm:mb-6 pointer-events-auto w-full max-w-[100vw] flex justify-center sm:justify-start"
              style={{ perspective: "1000px", minHeight: "1em" }}
            >
              <TypeAnimation
                sequence={[
                  "Hi, I'm Ayod Hirusha",
                  2500,
                  "",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl overflow-hidden"
                repeat={Infinity}
                cursor={true}
              />
            </h1>

            {/* Service Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center sm:justify-start items-center gap-2 sm:gap-3 mb-5 sm:mb-6 pointer-events-auto"
            >
              {[
                { icon: Code2, label: "Web Development", color: "text-[#10B981]" },
                { icon: Palette, label: "Graphic Design", color: "text-[#EC4899]" },
                { icon: Layers, label: "UI/UX Designing", color: "text-[#F59E0B]" },
              ].map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-[10px] sm:text-sm font-medium hover:bg-white/10 hover:border-white/20 transition-all"
                >
                  <service.icon className={`w-3 h-3 sm:w-4 sm:h-4 ${service.color}`} />
                  <span className="whitespace-nowrap">{service.label}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              key={paragraphKey}
              initial="hidden"
              animate="visible"
              variants={paragraphVariants}
              className="font-body text-xs sm:text-sm md:text-base lg:text-lg text-white/80 max-w-2xl mb-6 sm:mb-10 leading-relaxed pointer-events-auto"
            >
              {renderLetters("Crafting intuitive digital experiences where ")}
              {renderLetters("code meets creativity.", "text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#34D399] font-semibold")}
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              {renderLetters("Passionate about building ")}
              {renderLetters("modern, ", "text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] to-[#EC4899] font-semibold")}
              {renderLetters("user-focused ", "text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] font-semibold")}
              {renderLetters("digital products.", "text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] to-[#EF4444] font-semibold")}
            </motion.p>

            <div className="flex flex-col sm:flex-row items-center sm:items-center justify-center sm:justify-start gap-4 sm:gap-4 mb-12 w-full sm:w-auto mt-2">
              <motion.a
                href="/Ayod Hirusha Cv New.pdf"
                target="_blank"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.02, backgroundColor: "hsla(var(--foreground) / 0.05)" }}
                whileTap={{ scale: 0.98 }}
                className="w-[85%] max-w-[280px] sm:w-auto sm:max-w-none flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl border border-white/20 text-white font-display text-[10px] sm:text-xs tracking-widest uppercase backdrop-blur-sm pointer-events-auto shadow-xl mx-auto sm:mx-0"
              >
                Download CV <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </motion.a>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex items-center justify-center sm:justify-start gap-3 pointer-events-auto"
              >
                {[
                  { Icon: FaGithub, href: "https://github.com/Ayodhirusha" },
                  { Icon: FaLinkedin, href: "https://www.linkedin.com/in/ayod-hirusha" },
                  { Icon: FaInstagram, href: "https://instagram.com/_mr.bay_nx_613_" }
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 sm:p-4 rounded-2xl bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-all backdrop-blur-sm"
                  >
                    <social.Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.9 }}
            style={{ opacity: indicatorOpacity }}
            className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-auto z-20"
          >
            <div className="relative w-5 sm:w-6 h-8 sm:h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
              <motion.div
                animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-1.5 sm:h-2 bg-white/60 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
