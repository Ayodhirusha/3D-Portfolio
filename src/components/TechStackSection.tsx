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

// Custom Adobe Icons since they were removed from react-icons
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

// Tech stack with react-icons
const techStack = [
  { name: "Angular", category: "Frontend", Icon: SiAngular, color: "#DD0031" },
  { name: "React", category: "Frontend", Icon: SiReact, color: "#61DAFB" },
  { name: "Node.js", category: "Backend", Icon: SiNodedotjs, color: "#339933" },
  { name: "Tailwind CSS", category: "Frontend", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Three.js", category: "Frontend", Icon: SiThreedotjs, color: "#000000" },
  { name: "HTML5", category: "Frontend", Icon: SiHtml5, color: "#E34F26" },
  { name: "JavaScript", category: "Language", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", category: "Language", Icon: SiTypescript, color: "#3178C6" },
  { name: "MongoDB", category: "Database", Icon: SiMongodb, color: "#47A248" },
  { name: "Firebase", category: "Database", Icon: SiFirebase, color: "#FFCA28" },
  { name: "C#", category: "Language", Icon: SiSharp, color: "#512BD4" },
  { name: "MySQL", category: "Database", Icon: SiMysql, color: "#4479A1" },
  { name: "Figma", category: "Design", Icon: SiFigma, color: "#F24E1E" },
  { name: "Illustrator", category: "Design", Icon: SiAdobeillustrator, color: "#330000" },
  { name: "Photoshop", category: "Design", Icon: SiAdobephotoshop, color: "#001E36" },
  { name: "Canva", category: "Design", Icon: SiCanva, color: "#00C4CC" },
  { name: "Flutter", category: "Mobile", Icon: SiFlutter, color: "#02569B" },
];

const TechStackSection = () => {
  // Double the items for seamless infinite scroll
  const duplicatedStack = [...techStack, ...techStack];

  return (
    <section id="techstack" className="py-20 px-6 md:px-12 bg-card/30 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
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

        {/* Horizontal Scrolling Carousel */}
        <div className="relative">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-card/30 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-card/30 to-transparent z-10 pointer-events-none" />
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex gap-8 animate-scroll hover:[animation-play-state:paused]"
          >
            {duplicatedStack.map((tech, i) => (
              <div
                key={`${tech.name}-${i}`}
                className="group flex-shrink-0 flex flex-col items-center gap-3 cursor-pointer"
              >
                {/* Icon - grayscale by default, colorful on hover */}
                <div 
                  className="tech-icon transition-all duration-500 ease-out p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20"
                >
                  <tech.Icon 
                    className="w-12 h-12" 
                    style={{ color: tech.color }}
                  />
                </div>
                
                {/* Tech Name - appears on hover */}
                <p className="font-body text-sm font-medium text-transparent group-hover:text-white transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  {tech.name}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        /* Grayscale effect - icons start black & white */
        .tech-icon {
          filter: grayscale(100%) brightness(0.7);
          transform: scale(1);
        }

        /* On hover, icon becomes colorful and scales up */
        .group:hover .tech-icon {
          filter: grayscale(0%) brightness(1);
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
};

export default TechStackSection;
