import { motion } from "framer-motion";

// Tech stack icons from public folder
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
  // Triple the items for smoother seamless infinite scroll
  const duplicatedSkills = [...skills, ...skills, ...skills];

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
        <div className="relative">
          {/* Scrolling Track - no masks to avoid black lines */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex gap-4 animate-scroll hover:[animation-play-state:paused]"
          >
            {duplicatedSkills.map((skill, i) => (
              <div
                key={`${skill.name}-${i}`}
                className="group flex-shrink-0 flex flex-col items-center gap-3 cursor-pointer px-2"
              >
                {/* Icon Container */}
                <div className="relative">
                  <div
                    className="tech-icon p-6 rounded-2xl bg-[#12121a] border border-white/5 
                      hover:border-primary/40 hover:-translate-y-2
                      transition-all duration-500 shadow-2xl"
                  >
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="w-16 h-16 md:w-20 md:h-20 object-contain transition-all duration-500"
                    />
                  </div>
                </div>

                {/* Tech Name */}
                <p className="font-body text-xs text-muted-foreground group-hover:text-white transition-all">
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
          animation: scroll 25s linear infinite;
        }

        /* Grayscale effect - images start grayscale */
        .tech-icon img {
          filter: grayscale(100%) brightness(0.6);
          transition: all 0.5s ease-in-out;
        }

        /* On hover, image becomes colorful and bright */
        .group:hover .tech-icon img {
          filter: grayscale(0%) brightness(1);
          transform: scale(1.1);
        }

        /* 3D pop effect on hover */
        .tech-icon:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4), 0 0 20px rgba(146,63,255,0.2);
        }
      `}</style>
    </section>
  );
};

export default TechStackSection;
