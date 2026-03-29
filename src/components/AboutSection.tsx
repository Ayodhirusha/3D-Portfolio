import { motion, useScroll, useTransform } from "framer-motion";
import { Zap, Code, Award, Layers, Github, Linkedin, Instagram, Twitter, Mail, ExternalLink } from "lucide-react";
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
    <section ref={ref} id="about" className="relative py-24 px-6 md:px-12 overflow-hidden bg-background">
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

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Column - Profile Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-6"
          >
            <div className="group relative rounded-3xl overflow-hidden bg-card border border-border p-8 flex flex-col items-center text-center hover:border-primary/50 hover:glow-box transition-all duration-500 shadow-2xl">
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-8 group-inner">
                <img 
                  src="/IMG-20260327-WA0015.jpg" 
                  alt="Profile" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              </div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-medium text-emerald-500">Available for work</span>
                </div>

                <h3 className="font-display text-3xl font-bold tracking-tight mb-3 text-gradient">AYOD HIRUSHA</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed mb-8">
                  Software Engineering student at University of Plymouth (UK) specializing in Full Stack Development.
                </p>

                <div className="flex gap-4 mb-8 justify-center">
                  {[Instagram, Linkedin, Github, Twitter].map((Icon, i) => (
                    <motion.a
                      key={i}
                      href="#"
                      whileHover={{ y: -3, scale: 1.1 }}
                      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-white hover:border-white/20 transition-colors"
                    >
                      <Icon size={18} />
                    </motion.a>
                  ))}
                </div>

                <Button className="w-full h-12 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                  Let's Connect
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Info Blocks */}
          <div className="lg:col-span-8 space-y-6">
            {/* Bio Block */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative rounded-3xl bg-card border border-border p-8 shadow-xl hover:border-primary/50 hover:glow-box transition-all duration-500"
            >
              <h4 className="font-display text-xl font-bold mb-6 text-gradient">Hi! I'm Ayod Hirusha,</h4>
              <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
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
              className="group relative rounded-3xl bg-card border border-border p-8 shadow-xl hover:border-primary/50 hover:glow-box transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <h4 className="font-display text-xl font-bold text-gradient">My Tech Stack:</h4>
                <div className="flex flex-wrap gap-4">
                  {techStack.map((tech, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-2.5 grayscale hover:grayscale-0 transition-all cursor-pointer"
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
              className="group relative rounded-3xl bg-card border border-border p-8 shadow-xl hover:border-primary/50 hover:glow-box transition-all duration-500"
            >
              <h4 className="font-display text-xl font-bold mb-8 text-gradient">Experience</h4>
              <div className="space-y-6">
                {experience.map((exp, i) => (
                  <div key={i} className="group-item relative">
                    <div className="flex items-center justify-between py-4 border-b border-white/5 group-item-last:border-0">
                      <div className="space-y-1">
                        <p className="font-body font-medium group-hover:text-primary transition-colors">{exp.role}</p>
                        <p className="text-sm text-muted-foreground">{exp.company}</p>
                      </div>
                      <span className="font-display text-sm text-muted-foreground tabular-nums">{exp.year}</span>
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
