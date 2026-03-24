import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Caritas Sri Lanka",
    category: "Full Stack / React / Node.js",
    description: "Developed and deployed websites for four Catholic dioceses (Badulla, Colombo, Chilaw, Galle). Built frontend with React.js, backend with Node.js and Express.js, integrated SQL database connections and admin dashboards.",
    color: "from-blue-500/20 to-cyan-500/10",
  },
  {
    title: "Pantiles Dental",
    category: "Frontend / Vite React JS",
    description: "Modern UI/UX website design project for a UK-based dental client featuring 58 pages. Developed with Vite React JS for optimal performance and user experience.",
    color: "from-indigo-500/15 to-blue-400/15",
  },
  {
    title: "Fair Heaven Villa",
    category: "Frontend / Vite React JS",
    description: "UI/UX website design for a peaceful coastal getaway in Chilaw. Created an engaging frontend with Vite React JS showcasing the villa's amenities and booking features.",
    color: "from-cyan-500/15 to-blue-500/10",
  },
  {
    title: "Warehouse Management System",
    category: "Full Stack / Flutter / ASP.NET",
    description: "Flutter web application for a PC store with MySQL database and ASP.NET (C#) backend. Individual assignment demonstrating full-stack development capabilities.",
    color: "from-blue-600/15 to-indigo-400/10",
  },
  {
    title: "Cinema Booking System",
    category: "Full Stack / React / Next.js",
    description: "Complete cinema ticket booking platform with seat selection, payment integration, and admin panel. Built with React and Next.js for optimal performance.",
    color: "from-purple-500/15 to-pink-400/10",
  },
  {
    title: "Smart Miner Guard",
    category: "IoT / Safety System",
    description: "Developed a Smart Miner Guard Safety Helmet using IoT technology. Integrated sensors for monitoring worker safety in mining environments with real-time alerts.",
    color: "from-green-500/15 to-teal-400/10",
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
