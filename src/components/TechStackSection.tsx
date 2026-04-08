import { motion } from "framer-motion";

const skills = [
  { name: "Tech 1", image: "/6.png" },
  { name: "Tech 2", image: "/15.png" },
  { name: "Tech 3", image: "/33.png" },
  { name: "Tech 4", image: "/34.png" },
  { name: "Tech 5", image: "/Group.png" },
  { name: "Tech 6", image: "/Group 4.png" },
  { name: "Tech 7", image: "/Group 5.png" },
  { name: "Tech 8", image: "/Group 7.png" },
  { name: "Tech 9", image: "/Group 8.png" },
  { name: "Tech 10", image: "/Group 9.png" },
  { name: "Tech 11", image: "/Group 12.png" },
  { name: "Tech 12", image: "/Group 13.png" },
  { name: "Tech 13", image: "/Group 14.png" },
  { name: "Tech 14", image: "/Group 15.png" },
  { name: "Tech 15", image: "/Group 16.png" },
  { name: "Tech 16", image: "/Group 17.png" },
  { name: "Tech 17", image: "/Programming logos and icons by hrhasnai (32).png" },
  { name: "Tech 18", image: "/Vector.png" },
];

const TechStackSection = () => {
  const duplicatedSkills = [...skills, ...skills, ...skills];

  return (
    <section id="skills" className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10 px-2 sm:px-6 md:px-12 py-8 sm:py-12 md:py-16">
        <div className="absolute top-0 right-0 w-[200px] md:w-[500px] h-[200px] md:h-[500px] rounded-full bg-[radial-gradient(circle,rgba(146,63,255,0.06),transparent_70%)] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16"
        >
          <p className="font-body text-[10px] sm:text-sm uppercase tracking-[0.3em] text-primary mb-3 sm:mb-4">Skills</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Tech Stack</span>
          </h2>
        </motion.div>

        {/* Progress bars */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-20 max-w-4xl mx-auto"
        >
          {[
            { name: "React / Next.js", level: 90 },
            { name: "TypeScript / JavaScript", level: 85 },
            { name: "UI/UX Design (Figma)", level: 88 },
            { name: "Node.js / Express", level: 75 },
            { name: "Flutter / Dart", level: 70 },
            { name: "Database (SQL / MongoDB)", level: 72 },
          ].map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="space-y-2"
            >
              <div className="flex justify-between items-center">
                <span className="font-display text-[11px] sm:text-sm font-medium text-foreground">{skill.name}</span>
                <span className="font-display text-[10px] sm:text-xs text-primary">{skill.level}%</span>
              </div>
              <div className="h-1.5 sm:h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.3 + i * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                  className="h-full bg-gradient-primary rounded-full relative"
                >
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white shadow-[0_0_10px_rgba(146,63,255,0.6)]" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Carousel */}
      <div className="relative mt-6 sm:mt-12 w-full overflow-visible">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex gap-3 sm:gap-4 animate-scroll w-fit py-10"
        >
          {duplicatedSkills.map((skill, i) => (
            <div
              key={`${skill.name}-${i}`}
              className="group flex-shrink-0 flex flex-col items-center gap-2 sm:gap-3 cursor-pointer px-1 sm:px-2"
            >
              <div className="relative">
                <div className="tech-icon p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl bg-[#111] border border-foreground/10 hover:border-primary/40 hover:-translate-y-2 transition-all duration-500 shadow-2xl">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 object-contain transition-all duration-500"
                  />
                </div>
              </div>
              <p className="font-body text-[9px] sm:text-xs text-muted-foreground group-hover:text-foreground transition-all">{skill.name}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-33.333%, 0, 0); }
        }
        .animate-scroll {
          animation: scroll 50s linear infinite;
          will-change: transform;
          transform: translateZ(0);
          backface-visibility: hidden;
          width: max-content;
        }
        .tech-icon img {
          filter: grayscale(100%) brightness(0.6);
          transition: all 0.5s ease-in-out;
        }
        .group:hover .tech-icon img {
          filter: grayscale(0%) brightness(1);
          transform: scale(1.1);
        }
        .tech-icon:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4), 0 0 20px rgba(146,63,255,0.2);
        }
      `}</style>
    </section>
  );
};

export default TechStackSection;
