import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "Caritas Sri Lanka",
    category: "Development",
    type: "WEB-SITE",
    description: "A comprehensive digital platform for Caritas Sri Lanka, focusing on social justice and community development. Features include real-time project tracking, donation integration, and a multi-language content management system.",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Pantiles Dental Center",
    category: "Development",
    type: "WEB-SITE",
    description: "An extensive patient management and appointment scheduling platform for a UK-based dental clinic. Features 58+ custom pages with a focus on accessibility, medical security standards, and seamless user experience.",
    tags: ["React", "TypeScript", "Node.js", "Tailwind CSS", "Medical UI"],
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Fair Haven Villa",
    category: "UI/UX Design",
    type: "UX-DESIGN",
    description: "Designed a premium booking experience for a luxury villa in Chilaw. Created a visual identity that reflects tranquility and elegance, with a focus on high-conversion landing pages and immersive property showcases.",
    tags: ["Figma", "Visual Identity", "Responsive Design"],
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "NFC Google Review Card",
    category: "Graphic Design",
    type: "PRODUCT DESIGN",
    description: "Modern NFC-enabled Google Review card design for XTap. Features a clean, professional layout optimized for high-quality PVC printing and contactless technology integration.",
    tags: ["Photoshop", "Branding", "Product Design"],
    image: "/Postcard Promo.jpg",
  },
  {
    title: "Educational Seminar Posters",
    category: "Graphic Design",
    type: "ADVERTISEMENT",
    description: "Series of high-impact educational posters for Economics and Accounting seminars. Designed to be eye-catching for G.C.E. A/L and O/L students while maintaining professional clarity.",
    tags: ["Photoshop", "Typography", "Marketing"],
    image: "/Social Media Post New.jpg",
  },
  {
    title: "Personalised Postcards",
    category: "Graphic Design",
    type: "MARKETING",
    description: "Vintage-inspired personalised postcard designs for PrintingX. Combines classic aesthetic with modern marketing elements for events, promotions, and business branding.",
    tags: ["Illustrator", "Vintage Design", "Layout"],
    image: "/Google Review post.jpg",
  },
  {
    title: "Personalised Postcards",
    category: "Graphic Design",
    type: "MARKETING",
    description: "Vintage-inspired personalised postcard designs for PrintingX. Combines classic aesthetic with modern marketing elements for events, promotions, and business branding.",
    tags: ["Illustrator", "Vintage Design", "Layout"],
    image: "/Maximum Pre school.png",
  },
  {
    title: "Personalised Postcards",
    category: "Graphic Design",
    type: "MARKETING",
    description: "Vintage-inspired personalised postcard designs for PrintingX. Combines classic aesthetic with modern marketing elements for events, promotions, and business branding.",
    tags: ["Illustrator", "Vintage Design", "Layout"],
    image: "/thiwanka  Fitness Promo Post.jpg",
  },
  {
    title: "Personalised Postcards",
    category: "Graphic Design",
    type: "MARKETING",
    description: "Vintage-inspired personalised postcard designs for PrintingX. Combines classic aesthetic with modern marketing elements for events, promotions, and business branding.",
    tags: ["Illustrator", "Vintage Design", "Layout"],
    image: "/dutch Banner.jpg",
  },
  {
    title: "Personalised Postcards",
    category: "Graphic Design",
    type: "MARKETING",
    description: "Vintage-inspired personalised postcard designs for PrintingX. Combines classic aesthetic with modern marketing elements for events, promotions, and business branding.",
    tags: ["Illustrator", "Vintage Design", "Layout"],
    image: "/Bill Till post.jpg",
  },
  {
    title: "Personalised Postcards",
    category: "Graphic Design",
    type: "MARKETING",
    description: "Vintage-inspired personalised postcard designs for PrintingX. Combines classic aesthetic with modern marketing elements for events, promotions, and business branding.",
    tags: ["Illustrator", "Vintage Design", "Layout"],
    image: "/travel tourism copy.jpg",
  },
    {
    title: "Personalised Postcards",
    category: "Graphic Design",
    type: "MARKETING",
    description: "Vintage-inspired personalised postcard designs for PrintingX. Combines classic aesthetic with modern marketing elements for events, promotions, and business branding.",
    tags: ["Illustrator", "Vintage Design", "Layout"],
    image: "/vesak copy.jpg",
  },
    {
    title: "Personalised Postcards",
    category: "Graphic Design",
    type: "MARKETING",
    description: "Vintage-inspired personalised postcard designs for PrintingX. Combines classic aesthetic with modern marketing elements for events, promotions, and business branding.",
    tags: ["Illustrator", "Vintage Design", "Layout"],
    image: "/yoga post copy.jpg",
  },
    {
    title: "Personalised Postcards",
    category: "Graphic Design",
    type: "MARKETING",
    description: "Vintage-inspired personalised postcard designs for PrintingX. Combines classic aesthetic with modern marketing elements for events, promotions, and business branding.",
    tags: ["Illustrator", "Vintage Design", "Layout"],
    image: "/Rashen aiya  A4 flyer B&W copy.jpg",
  },
    {
    title: "Personalised Postcards",
    category: "Graphic Design",
    type: "MARKETING",
    description: "Vintage-inspired personalised postcard designs for PrintingX. Combines classic aesthetic with modern marketing elements for events, promotions, and business branding.",
    tags: ["Illustrator", "Vintage Design", "Layout"],
    image: "/Rashen Aiya posts copy Economics.jpg",
  },
    {
    title: "Personalised Postcards",
    category: "Graphic Design",
    type: "MARKETING",
    description: "Vintage-inspired personalised postcard designs for PrintingX. Combines classic aesthetic with modern marketing elements for events, promotions, and business branding.",
    tags: ["Illustrator", "Vintage Design", "Layout"],
    image: "/Rashen Aiya posts copy.jpg",
  },
    {
    title: "Personalised Postcards",
    category: "Graphic Design",
    type: "MARKETING",
    description: "Vintage-inspired personalised postcard designs for PrintingX. Combines classic aesthetic with modern marketing elements for events, promotions, and business branding.",
    tags: ["Illustrator", "Vintage Design", "Layout"],
    image: "/Copy of japan busineess post2.jpg",
  },
  {
    title: "Personalised Postcards",
    category: "Graphic Design",
    type: "MARKETING",
    description: "Vintage-inspired personalised postcard designs for PrintingX. Combines classic aesthetic with modern marketing elements for events, promotions, and business branding.",
    tags: ["Illustrator", "Vintage Design", "Layout"],
    image: "/Esela perehara copy.jpg",
  },
  {
    title: "Personalised Postcards",
    category: "Graphic Design",
    type: "MARKETING",
    description: "Vintage-inspired personalised postcard designs for PrintingX. Combines classic aesthetic with modern marketing elements for events, promotions, and business branding.",
    tags: ["Illustrator", "Vintage Design", "Layout"],
    image: "/Hela Osuwa copy.jpg",
  },
  {
    title: "Personalised Postcards",
    category: "Graphic Design",
    type: "MARKETING",
    description: "Vintage-inspired personalised postcard designs for PrintingX. Combines classic aesthetic with modern marketing elements for events, promotions, and business branding.",
    tags: ["Illustrator", "Vintage Design", "Layout"],
    image: "/japan student visa.jpg",
  },
  {
    title: "Personalised Postcards",
    category: "Graphic Design",
    type: "MARKETING",
    description: "Vintage-inspired personalised postcard designs for PrintingX. Combines classic aesthetic with modern marketing elements for events, promotions, and business branding.",
    tags: ["Illustrator", "Vintage Design", "Layout"],
    image: "/nm digitals copy2.jpg",
  },
  {
    title: "Personalised Postcards",
    category: "Graphic Design",
    type: "MARKETING",
    description: "Vintage-inspired personalised postcard designs for PrintingX. Combines classic aesthetic with modern marketing elements for events, promotions, and business branding.",
    tags: ["Illustrator", "Vintage Design", "Layout"],
    image: "/Senu wedding cake post copy.jpg",
  },
  {
    title: "Personalised Postcards",
    category: "Graphic Design",
    type: "MARKETING",
    description: "Vintage-inspired personalised postcard designs for PrintingX. Combines classic aesthetic with modern marketing elements for events, promotions, and business branding.",
    tags: ["Illustrator", "Vintage Design", "Layout"],
    image: "/teachers posts copy.jpg",
  },
  {
    title: "Personalised Postcards",
    category: "Graphic Design",
    type: "MARKETING",
    description: "Vintage-inspired personalised postcard designs for PrintingX. Combines classic aesthetic with modern marketing elements for events, promotions, and business branding.",
    tags: ["Illustrator", "Vintage Design", "Layout"],
    image: "/A4 size Rashen aiya copy.jpg",
  },
  {
    title: "Personalised Postcards",
    category: "Graphic Design",
    type: "MARKETING",
    description: "Vintage-inspired personalised postcard designs for PrintingX. Combines classic aesthetic with modern marketing elements for events, promotions, and business branding.",
    tags: ["Illustrator", "Vintage Design", "Layout"],
    image: "/Enosh class Post.jpg",
  },
  {
    title: "Personalised Postcards",
    category: "Graphic Design",
    type: "MARKETING",
    description: "Vintage-inspired personalised postcard designs for PrintingX. Combines classic aesthetic with modern marketing elements for events, promotions, and business branding.",
    tags: ["Illustrator", "Vintage Design", "Layout"],
    image: "/NM digitals.jpg",
  },
  {
    title: "Personalised Postcards",
    category: "Graphic Design",
    type: "MARKETING",
    description: "Vintage-inspired personalised postcard designs for PrintingX. Combines classic aesthetic with modern marketing elements for events, promotions, and business branding.",
    tags: ["Illustrator", "Vintage Design", "Layout"],
    image: "/qatar post.jpg",
  },
  {
    title: "Personalised Postcards",
    category: "Graphic Design",
    type: "MARKETING",
    description: "Vintage-inspired personalised postcard designs for PrintingX. Combines classic aesthetic with modern marketing elements for events, promotions, and business branding.",
    tags: ["Illustrator", "Vintage Design", "Layout"],
    image: "/Rashen Aiya grade 11.jpg",
  },
  {
    title: "Personalised Postcards",
    category: "Graphic Design",
    type: "MARKETING",
    description: "Vintage-inspired personalised postcard designs for PrintingX. Combines classic aesthetic with modern marketing elements for events, promotions, and business branding.",
    tags: ["Illustrator", "Vintage Design", "Layout"],
    image: "/Russia Post.jpg",
  },
  {
    title: "Personalised Postcards",
    category: "Graphic Design",
    type: "MARKETING",
    description: "Vintage-inspired personalised postcard designs for PrintingX. Combines classic aesthetic with modern marketing elements for events, promotions, and business branding.",
    tags: ["Illustrator", "Vintage Design", "Layout"],
    image: "/Travel post.jpg",
  },
  {
    title: "Personalised Postcards",
    category: "Graphic Design",
    type: "MARKETING",
    description: "Vintage-inspired personalised postcard designs for PrintingX. Combines classic aesthetic with modern marketing elements for events, promotions, and business branding.",
    tags: ["Illustrator", "Vintage Design", "Layout"],
    image: "/curtain banner new.jpg",
  },
  {
    title: "Personalised Postcards",
    category: "Graphic Design",
    type: "MARKETING",
    description: "Vintage-inspired personalised postcard designs for PrintingX. Combines classic aesthetic with modern marketing elements for events, promotions, and business branding.",
    tags: ["Illustrator", "Vintage Design", "Layout"],
    image: "/perehara ticket copy.jpg",
  },
  {
    title: "Personalised Postcards",
    category: "Graphic Design",
    type: "MARKETING",
    description: "Vintage-inspired personalised postcard designs for PrintingX. Combines classic aesthetic with modern marketing elements for events, promotions, and business branding.",
    tags: ["Illustrator", "Vintage Design", "Layout"],
    image: "/Mushroom Soup Powder Tin package copy.jpg",
  },

];

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState("Development");
  const filteredProjects = projects.filter(project => project.category === activeTab);

  return (
    <section id="projects" className="relative py-16 md:py-24 px-4 sm:px-6 md:px-12 overflow-hidden">
      <div id="gallery" className="absolute top-0" />
      <div className="absolute top-1/3 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-[radial-gradient(circle,rgba(146,63,255,0.06),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm">
            <span className="font-body text-[10px] uppercase tracking-[0.3em] text-primary font-bold">Projects</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Selected <span className="text-gradient">Work</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-xs sm:text-sm">
            A curated selection of engineering projects and design case studies.
          </p>
        </motion.div>

        <div className="flex justify-center mb-12 md:mb-16">
          <div className="inline-flex p-1 rounded-full bg-foreground/5 border border-foreground/10 backdrop-blur-sm shadow-xl flex-wrap justify-center max-w-full">
            {["Development", "UI/UX Design", "Graphic Design"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 sm:px-8 py-2 md:py-2.5 rounded-full font-display text-[10px] sm:text-sm font-medium transition-all duration-500 relative whitespace-nowrap ${activeTab === tab ? "text-foreground" : "text-muted-foreground hover:text-foreground/60"
                  }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-primary rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid with slide-in cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: i * 0.12, type: "spring", bounce: 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative flex flex-col h-full rounded-2xl md:rounded-3xl overflow-hidden transition-all duration-700"
              style={{
                background: "hsla(var(--foreground) / 0.02)",
                backdropFilter: "blur(20px)",
                border: "1px solid hsla(var(--primary) / 0.1)",
              }}
            >
              <div className={`relative overflow-hidden ${activeTab === 'Graphic Design' ? 'h-full aspect-square flex items-center justify-center bg-black/20' : 'h-48 md:h-64'}`}>
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10 opacity-60" />
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full transition-transform duration-700 group-hover:scale-110 ${activeTab === 'Graphic Design' ? 'object-contain' : 'object-cover'}`}
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20" />
                <div className="absolute top-4 left-4 md:top-6 md:left-6 z-30">
                  <span className="text-[8px] md:text-[10px] font-bold tracking-widest text-primary bg-black/40 backdrop-blur-md px-2 md:px-3 py-1 rounded-full border border-primary/20 uppercase">
                    {project.type}
                  </span>
                </div>
              </div>

              {activeTab !== 'Graphic Design' && (
                <div className="flex-1 p-6 md:p-8 flex flex-col relative z-30">
                  <h3 className="font-display text-xl md:text-2xl font-bold mb-3 md:mb-4 text-foreground group-hover:text-primary transition-colors duration-500">
                    {project.title}
                  </h3>
                  <p className="font-body text-xs md:text-sm text-muted-foreground leading-relaxed mb-6 md:mb-8 line-clamp-3 md:line-clamp-4 group-hover:text-foreground/70 transition-colors duration-500">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 md:gap-2 mt-auto mb-6 md:mb-8">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 md:px-3 py-1 rounded-lg bg-foreground/5 border border-foreground/5 text-[8px] md:text-[10px] text-muted-foreground font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 md:pt-6 border-t border-foreground/5">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-[10px] md:text-xs font-bold text-muted-foreground group-hover:text-primary transition-colors duration-500"
                    >
                      <ExternalLink className="w-3.5 h-3.5 md:w-4 h-4" />
                      <span>View Details</span>
                    </motion.button>
                    <ArrowUpRight className="w-4 h-4 md:w-5 h-5 text-white/20 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
                  </div>
                </div>
              )}

              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
