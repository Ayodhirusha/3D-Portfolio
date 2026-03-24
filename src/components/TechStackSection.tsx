import { motion } from "framer-motion";
import { 
  SiAngular, 
  SiReact, 
  SiNodedotjs, 
  SiTailwindcss, 
  SiThreedotjs, 
  SiHtml5, 
  SiJavascript, 
  SiTypescript, 
  SiMongodb, 
  SiFirebase, 
  SiSharp, 
  SiMysql, 
  SiFigma, 
  SiCanva,
  SiFlutter 
} from "react-icons/si";

const SiAdobeillustrator = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12-12-5.373-12-12 5.373-12 12-12zm-4.604 15.543l.872-2.502h3.454l.859 2.502h2.091L11.085 5.75H8.799L5.312 15.543h2.084zm3.83-4.103H8.761l1.116-3.211 1.057 3.211zm8.381 4.103V9.529h-1.87v6.014h1.87zm0-7.394V6.521h-1.87v1.628h1.87z"/>
  </svg>
);

const SiAdobephotoshop = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12-12-5.373-12-12 5.373-12 12-12zm-3.525 15.543V5.75H11.2c2.013 0 3.012 1.05 3.012 2.529 0 1.488-.999 2.543-3.012 2.543H9.897v4.721H8.475zm1.422-6.138h1.22c.983 0 1.503-.45 1.503-1.125 0-.675-.52-1.113-1.503-1.113h-1.22v2.238zm6.541 6.275c-1.551 0-2.459-.834-2.459-2.071h1.378c0 .644.479.947 1.081.947.535 0 .93-.24 1.069-.644.085-.24.085-.436.085-.631 0-.67-.353-.96-.987-1.236l-.663-.284c-.958-.41-1.465-1.025-1.465-1.928 0-1.199.916-2.022 2.311-2.022 1.41 0 2.227.757 2.227 1.868h-1.363c0-.521-.38-.806-.867-.806-.521 0-.817.268-.817.711 0 .473.282.695.845.947l.663.284c1.113.489 1.621 1.073 1.621 2.133 0 1.359-.972 2.132-2.66 2.132z"/>
  </svg>
);

const techStack = [
  { name: "Angular", Icon: SiAngular, color: "#DD0031" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Three.js", Icon: SiThreedotjs, color: "#ffffff" },
  { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
  { name: "C#", Icon: SiSharp, color: "#512BD4" },
  { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
  { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
  { name: "Illustrator", Icon: SiAdobeillustrator, color: "#FF9A00" },
  { name: "Photoshop", Icon: SiAdobephotoshop, color: "#31A8FF" },
  { name: "Canva", Icon: SiCanva, color: "#00C4CC" },
  { name: "Flutter", Icon: SiFlutter, color: "#02569B" },
];

const TechStackSection = () => {
  const duplicated = [...techStack, ...techStack];

  return (
    <section id="techstack" className="py-20 px-6 md:px-12 bg-card/30 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-4">Skills</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Tech <span className="text-gradient">Stack</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Edge fade masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div className="tech-carousel-track flex gap-10 py-4">
            {duplicated.map((tech, i) => (
              <div
                key={`${tech.name}-${i}`}
                className="group flex-shrink-0 flex flex-col items-center gap-3 cursor-pointer"
              >
                <div className="tech-icon-wrapper relative p-5 rounded-2xl border border-border/40 bg-card/60 backdrop-blur-sm transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/10 group-hover:scale-110">
                  <tech.Icon
                    className="w-10 h-10 md:w-12 md:h-12 transition-all duration-500"
                    style={{ "--icon-color": tech.color } as React.CSSProperties}
                  />
                </div>
                <p className="font-body text-xs font-medium text-muted-foreground/0 group-hover:text-muted-foreground transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes carousel-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .tech-carousel-track {
          animation: carousel-scroll 35s linear infinite;
        }
        .tech-carousel-track:hover {
          animation-play-state: paused;
        }

        /* Icons: grayscale + dimmed by default */
        .tech-icon-wrapper svg {
          filter: grayscale(100%) brightness(0.6) contrast(0.8);
          color: #94a3b8 !important;
        }

        /* On hover: full color */
        .group:hover .tech-icon-wrapper svg {
          filter: grayscale(0%) brightness(1) contrast(1);
          color: var(--icon-color) !important;
        }
      `}</style>
    </section>
  );
};

export default TechStackSection;
