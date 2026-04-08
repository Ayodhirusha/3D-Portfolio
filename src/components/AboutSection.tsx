import { motion, useScroll, useTransform } from "framer-motion";
import { Zap, Code, Award, Layers, Github, Linkedin, Instagram, Mail, ExternalLink } from "lucide-react";
import { useRef } from "react";
import profileImg from "@/assets/profile-placeholder.jpg";
import { Button } from "@/components/ui/button";

const experience = [
  { role: "Software Engineering Undergraduate", company: "University of Plymouth (UK)", year: "Present" },
  { role: "Full Stack Development Intern", company: "Ceylon Innovations Pvt Ltd", year: "2023" },
  { role: "Freelance Developer", company: "Self-employed", year: "2022 - Present" },
  { role: "UI/UX Designer", company: "Portfolio Projects", year: "2021" },
];

const techStack = [
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
];

const AboutSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  const blur = useTransform(scrollYProgress, [0, 0.8], ["20px", "0px"]);

  return (
    <section ref={ref} id="about" className="relative py-16 md:py-24 px-4 sm:px-6 md:px-12 overflow-hidden">
      {/* Section floating dots */}
      {[
        { top: "10%", left: "5%", size: 4, delay: 0, dur: 7 },
        { top: "20%", left: "90%", size: 5, delay: 1, dur: 8 },
        { top: "50%", left: "3%", size: 3, delay: 2, dur: 6 },
        { top: "70%", left: "95%", size: 4, delay: 0.5, dur: 9 },
        { top: "85%", left: "15%", size: 5, delay: 1.5, dur: 7 },
        { top: "30%", left: "80%", size: 3, delay: 3, dur: 8 },
        { top: "60%", left: "50%", size: 4, delay: 2.5, dur: 6 },
        { top: "40%", left: "25%", size: 3, delay: 1, dur: 10 },
      ].map((dot, i) => (
        <motion.div
          key={`about-dot-${i}`}
          animate={{ y: [0, -25, 0], opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: dot.dur, repeat: Infinity, ease: "easeInOut", delay: dot.delay }}
          className="absolute rounded-full z-[1] pointer-events-none"
          style={{
            top: dot.top,
            left: dot.left,
            width: dot.size,
            height: dot.size,
            background: "hsla(var(--primary) / 0.6)",
            boxShadow: "0 0 14px rgba(59, 130, 246, 0.5)",
          }}
        />
      ))}
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold mb-6 text-gradient"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-body text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed"
          >
            I build intuitive digital products—scalable, high-performing, and made through collaboration.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column - Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 xl:col-span-4 space-y-6 w-full max-w-[400px] mx-auto lg:max-w-none"
          >
            <div className="group relative rounded-3xl overflow-hidden bg-card border border-border p-5 md:p-8 flex flex-col items-center text-center hover:border-primary/50 hover:glow-box transition-all duration-500 shadow-2xl">
              <div className="relative w-full aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden mb-6 md:mb-8 group-inner">
                <img
                  src="/IMG-20260327-WA0015.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              </div>

              <div className="relative z-10 w-full">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4 md:mb-6">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] md:text-xs font-medium text-emerald-500">Available for work</span>
                </div>

                <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-2 md:mb-3 text-gradient">AYOD HIRUSHA</h3>
                <p className="font-body text-muted-foreground text-xs md:text-sm leading-relaxed mb-6 md:mb-8 px-2">
                  Software Engineering student at University of Plymouth (UK) specializing in Full Stack Development.
                </p>

                <div className="flex gap-3 md:gap-4 mb-6 md:mb-8 justify-center">
                  {[Instagram, Linkedin, Github].map((Icon, i) => (
                    <motion.a
                      key={i}
                      href="#"
                      whileHover={{ y: -3, scale: 1.1 }}
                      className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-foreground/5 border border-foreground/10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-colors"
                    >
                      <Icon size={16} />
                    </motion.a>
                  ))}
                </div>

                <Button className="w-full h-10 md:h-12 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                  Let's Connect
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Info Blocks */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-4 md:space-y-6">
            {/* Bio Block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative rounded-3xl bg-card border border-border p-6 md:p-8 shadow-xl hover:border-primary/50 hover:glow-box transition-all duration-500"
            >
              <h4 className="font-display text-lg md:text-xl font-bold mb-4 md:mb-6 text-gradient">Hi! I'm Ayod Hirusha,</h4>
              <div className="space-y-3 md:space-y-4 font-body text-muted-foreground text-sm md:text-base leading-relaxed text-justify">
                <p>
                  I am a Software Engineering Graduate currently enrolled in the BSc (Hons) Software Engineering program at the University of Plymouth (UK). I have completed a Full Stack Development internship at Ceylon Innovations Pvt Ltd, where I gained practical industry experience.
                </p>
                <p>
                  I am a developer passionate about building meaningful digital experiences. With a focus on clean code, thoughtful design, and scalable solutions, I help turn ideas into products that people love to use.
                </p>
              </div>
            </motion.div>

            {/* Tech Stack Block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative rounded-3xl bg-card border border-border p-6 md:p-8 shadow-xl hover:border-primary/50 hover:glow-box transition-all duration-500"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <h4 className="font-display text-lg md:text-xl font-bold text-gradient">My Tech Stack:</h4>
                <div className="flex flex-wrap gap-3 md:gap-4">
                  {techStack.map((tech, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-foreground/5 border border-foreground/10 flex items-center justify-center p-2 md:p-2.5 grayscale hover:grayscale-0 transition-all cursor-pointer"
                      title={tech.name}
                    >
                      <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Experience Block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative rounded-3xl bg-card border border-border p-6 md:p-8 shadow-xl hover:border-primary/50 hover:glow-box transition-all duration-500"
            >
              <h4 className="font-display text-lg md:text-xl font-bold mb-6 md:mb-8 text-gradient">Experience</h4>
              <div className="space-y-4 md:space-y-6">
                {experience.map((exp, i) => (
                  <div key={i} className="group-item relative">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between py-3 md:py-4 border-b border-foreground/5 group-item-last:border-0 gap-1 sm:gap-4">
                      <div className="space-y-0.5 md:space-y-1">
                        <p className="font-body text-sm md:text-base font-medium group-hover:text-primary transition-colors">{exp.role}</p>
                        <p className="text-xs md:text-sm text-muted-foreground">{exp.company}</p>
                      </div>
                      <span className="font-display text-[10px] md:text-sm text-muted-foreground/60 sm:text-muted-foreground tabular-nums">{exp.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
