import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Nebula Dashboard",
    category: "3D / UI Design",
    description: "An immersive analytics dashboard with real-time 3D data visualization for a fintech startup.",
    color: "from-blue-500/20 to-cyan-500/10",
  },
  {
    title: "Prism Studio",
    category: "Web Development",
    description: "A creative agency website featuring interactive WebGL backgrounds and fluid page transitions.",
    color: "from-indigo-500/15 to-blue-400/15",
  },
  {
    title: "Vertex AR",
    category: "UI/UX Design",
    description: "Mobile-first AR experience app with gesture-based 3D object manipulation and spatial UI.",
    color: "from-cyan-500/15 to-blue-500/10",
  },
  {
    title: "Echo Commerce",
    category: "Full-Stack / 3D",
    description: "E-commerce platform with 3D product configurator and photorealistic rendering.",
    color: "from-blue-600/15 to-indigo-400/10",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
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
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 hover:glow-box transition-all duration-500 cursor-pointer"
            >
              <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                <div className="w-16 h-16 border border-primary/30 rounded-lg rotate-12 group-hover:rotate-45 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-3">
                  <p className="font-body text-xs uppercase tracking-widest text-primary">{project.category}</p>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{project.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
