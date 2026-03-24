import { motion } from "framer-motion";
import {
  SiReact, SiNodedotjs, SiTailwindcss, SiThreedotjs, SiHtml5,
  SiJavascript, SiTypescript, SiMongodb, SiFirebase, SiMysql,
  SiFigma, SiFlutter, SiCss3
} from "react-icons/si";

const skills = [
  { name: "HTML5", Icon: SiHtml5, color: "#E34F26", level: 95 },
  { name: "CSS3", Icon: SiCss3, color: "#1572B6", level: 90 },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E", level: 88 },
  { name: "React", Icon: SiReact, color: "#61DAFB", level: 90 },
  { name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4", level: 85 },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6", level: 80 },
  { name: "Node.js", Icon: SiNodedotjs, color: "#339933", level: 82 },
  { name: "Three.js", Icon: SiThreedotjs, color: "#ffffff", level: 70 },
  { name: "Flutter", Icon: SiFlutter, color: "#02569B", level: 75 },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248", level: 78 },
  { name: "Firebase", Icon: SiFirebase, color: "#FFCA28", level: 80 },
  { name: "MySQL", Icon: SiMysql, color: "#4479A1", level: 82 },
  { name: "Figma", Icon: SiFigma, color: "#F24E1E", level: 85 },
];

const TechStackSection = () => {
  return (
    <section id="skills" className="relative py-32 px-6 md:px-12 overflow-hidden">
      {/* Spotlight */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(146,63,255,0.06),transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-4">Skills</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Tech Stack</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group glass-card rounded-xl p-6 hover:border-primary/30 hover:glow-box transition-all duration-500 cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-4">
                <skill.Icon
                  className="w-8 h-8 transition-all duration-500 grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100"
                  style={{ color: skill.color }}
                />
                <span className="font-display text-sm font-semibold">{skill.name}</span>
              </div>
              {/* Progress bar */}
              <div className="w-full h-1.5 rounded-full bg-muted overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 + i * 0.05 }}
                  className="h-full rounded-full bg-gradient-primary"
                />
              </div>
              <p className="font-body text-xs text-muted-foreground mt-2 text-right">{skill.level}%</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
