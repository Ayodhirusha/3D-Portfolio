import { motion } from "framer-motion";
import {
  SiReact, SiNodedotjs, SiTailwindcss, SiThreedotjs, SiHtml5,
  SiJavascript, SiTypescript, SiMongodb, SiFirebase,
  SiMysql, SiFigma, SiFlutter, SiNextdotjs, SiGit, SiGithub,
  SiVite, SiPostman, SiVercel, SiAngular, SiBootstrap,
  SiSass, SiRedux, SiExpress, SiPostgresql,
  SiRedis, SiGraphql, SiPrisma,
  SiWebpack, SiJest, SiDocker, SiKubernetes
} from "react-icons/si";
import { FaJava, FaPython, FaAws, FaCss3Alt } from "react-icons/fa";

const skills = [
  { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", Icon: FaCss3Alt, color: "#1572B6" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#ffffff" },
  { name: "Angular", Icon: SiAngular, color: "#DD0031" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
  { name: "Express", Icon: SiExpress, color: "#ffffff" },
  { name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Three.js", Icon: SiThreedotjs, color: "#ffffff" },
  { name: "Flutter", Icon: SiFlutter, color: "#02569B" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
  { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#336791" },
  { name: "Redis", Icon: SiRedis, color: "#DC382D" },
  { name: "Java", Icon: FaJava, color: "#f89820" },
  { name: "Python", Icon: FaPython, color: "#3776AB" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "GitHub", Icon: SiGithub, color: "#ffffff" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "AWS", Icon: FaAws, color: "#FF9900" },
  { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
  { name: "Vite", Icon: SiVite, color: "#646CFF" },
  { name: "Webpack", Icon: SiWebpack, color: "#8DD6F9" },
  { name: "GraphQL", Icon: SiGraphql, color: "#E10098" },
  { name: "Redux", Icon: SiRedux, color: "#764ABC" },
  { name: "Bootstrap", Icon: SiBootstrap, color: "#7952B3" },
  { name: "Sass", Icon: SiSass, color: "#CC6699" },
  { name: "Jest", Icon: SiJest, color: "#C21325" },
  { name: "Prisma", Icon: SiPrisma, color: "#2D3748" },
  { name: "Postman", Icon: SiPostman, color: "#FF6C37" },
  { name: "Vercel", Icon: SiVercel, color: "#ffffff" },
  { name: "Kubernetes", Icon: SiKubernetes, color: "#326CE5" },
];

const TechStackSection = () => {
  // Double the items for seamless infinite scroll
  const duplicatedSkills = [...skills, ...skills];

  return (
    <section id="skills" className="relative py-32 px-6 md:px-12 overflow-hidden">
      {/* Spotlight */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(146,63,255,0.06),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
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

        {/* Carousel Container */}
        <div className="relative group/carousel">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />

          {/* Scrolling Track */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex gap-8 animate-scroll hover:[animation-play-state:paused]"
          >
            {duplicatedSkills.map((skill, i) => (
              <div
                key={`${skill.name}-${i}`}
                className="group flex-shrink-0 flex flex-col items-center gap-4 cursor-pointer"
              >
                {/* Icon Container with 3D effect */}
                <div className="relative tech-icon-wrapper">
                  {/* 3D shadow/depth layers */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Main icon container */}
                  <div
                    className="relative tech-icon p-6 rounded-2xl bg-card/60 border border-border/50 
                      shadow-[0_8px_30px_rgb(0,0,0,0.12)] 
                      hover:shadow-[0_8px_30px_rgba(146,63,255,0.25)]
                      hover:border-primary/30 hover:-translate-y-2
                      transition-all duration-500 ease-out
                      backdrop-blur-sm"
                  >
                    <skill.Icon
                      className="w-14 h-14 transition-all duration-500"
                      style={{ color: skill.color }}
                    />
                  </div>
                </div>

                {/* Tech Name */}
                <p className="font-body text-sm font-medium text-muted-foreground group-hover:text-white transition-all duration-300 opacity-60 group-hover:opacity-100">
                  {skill.name}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        /* Grayscale effect - icons start grayscale */
        .tech-icon svg {
          filter: grayscale(100%) brightness(0.7);
          transition: filter 0.5s ease-out;
        }

        /* On hover, icon becomes colorful with glow */
        .group:hover .tech-icon svg {
          filter: grayscale(0%) brightness(1) drop-shadow(0 0 10px currentColor);
        }

        /* 3D pop effect on hover */
        .tech-icon:hover {
          transform: translateY(-8px) scale(1.05);
        }
      `}</style>
    </section>
  );
};

export default TechStackSection;
