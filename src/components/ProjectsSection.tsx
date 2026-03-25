import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Pantiles Dental",
    category: "Frontend / Vite React JS",
    description: "Modern UI/UX website design project for a UK-based dental client featuring 58 pages. Developed with Vite React JS for optimal performance and user experience.",
  },
  {
    title: "Fair Heaven Villa",
    category: "Frontend / Vite React JS",
    description: "Modern UI/UX website design project for a peaceful coastal getaway in Chilaw. Created an engaging frontend with Vite React JS showcasing amenities and booking.",
  },
  {
    title: "Caritas Sri Lanka",
    category: "Full Stack / Node.js",
    description: "Successfully developed and fully deployed websites for four Catholic dioceses (Badulla, Colombo, Chilaw, Galle) with complete admin dashboards for site management.",
  },
  {
    title: "Warehouse Management System",
    category: "Full Stack / Flutter / ASP.NET",
    description: "Developed a Flutter web application for a PC store with a MySQL database connection and an ASP.NET (C#) backend.",
  },
  {
    title: "Car Rental System",
    category: "Software / .NET Framework",
    description: "Developed an online car rental system using .Net framework (C#) featuring comprehensive management tools.",
  },
  {
    title: "Smart Miner Guard",
    category: "IOT / Hardware",
    description: "Developed a Smart Miner Guard Safety Helmet using IOT technology for improved safety in mining environments.",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-32 px-6 md:px-12 overflow-hidden">
      {/* Spotlight */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(146,63,255,0.06),transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-4">Portfolio</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group glass-card rounded-2xl overflow-hidden hover:border-primary/30 hover:glow-box transition-all duration-700"
            >
              <div className="flex flex-col md:flex-row">
                {/* Project visual */}
                <div className="md:w-2/5 h-56 md:h-auto bg-gradient-primary-subtle flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(146,63,255,0.15),transparent_60%)]" />
                  <motion.div
                    whileHover={{ rotate: 90, scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                    className="w-20 h-20 border border-primary/30 rounded-2xl rotate-12"
                  />
                  <div className="absolute bottom-4 left-4 font-display text-6xl font-bold text-primary/10">
                    0{i + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center justify-between mb-3">
                    <p className="font-body text-xs uppercase tracking-widest text-primary">{project.category}</p>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">{project.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">{project.description}</p>
                  <button className="self-start font-display text-sm px-6 py-2.5 rounded-full border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                    View Project
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
