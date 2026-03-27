import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "Wego Travels",
    category: "Development",
    type: "WEB-SITE",
    description: "Wego Travels is a fully responsive travel website offering personalized inbound and outbound trips. With interactive features, smooth animations, and an intuitive interface, it makes planning, booking, and exploring your adventures seamless and enjoyable across all devices.",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Digital Points",
    category: "Development",
    type: "WEB-SITE",
    description: "Our digital printing website lets you create custom products like banners, mugs, and posters with interactive previews and smooth animations, delivering a seamless, responsive experience and professional-quality prints across all devices.",
    tags: ["React", "Vite", "Tailwind CSS", "TypeScript"],
    image: "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?q=80&w=1932&auto=format&fit=crop",
  },
  {
    title: "Optivex",
    category: "Development",
    type: "FRONTEND DEVELOPMENT",
    description: "Our electronics e-commerce website offers a fully responsive, user-friendly platform for browsing and purchasing products like smartphones, laptops, and accessories. With interactive product previews, smooth animations, and intuitive navigation, it ensures a seamless shopping experience across all devices while showcasing products effectively.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Pantiles Dental",
    category: "UI/UX Design",
    type: "UI/UX DESIGN",
    description: "Modern UI/UX website design project for a UK-based dental client featuring 58 pages. Focused on optimal performance and professional aesthetic.",
    tags: ["Figma", "UI/UX", "Adobe XD"],
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Fair Haven Villa",
    category: "UI/UX Design",
    type: "UI/UX DESIGN",
    description: "Modern UI/UX website design project for a peaceful coastal getaway in Chilaw. Created an engaging design showcasing amenities and booking.",
    tags: ["Figma", "Responsive Design"],
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Graphic Design Services",
    category: "Graphic Design",
    type: "SOCIAL MEDIA POST",
    description: "Professional graphic design services advertisement post.",
    tags: ["Photoshop", "Illustrator", "Figma"],
    image: "/Social Media Post New.jpg",
  },
  {
    title: "Brand Identity Design",
    category: "Graphic Design",
    type: "GRAPHIC DESIGN",
    description: "Modern brand identity design featuring a clean, professional aesthetic for a tech startup.",
    tags: ["Photoshop", "Illustrator"],
    image: "/Group 17.png",
  },
  {
    title: "Social Media Campaign",
    category: "Graphic Design",
    type: "GRAPHIC DESIGN",
    description: "Engaging social media post designs created for a summer marketing campaign.",
    tags: ["Photoshop", "Social Media"],
    image: "/Group.png",
  }
];

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState("Development");

  const filteredProjects = projects.filter(project => project.category === activeTab);

  return (
    <section id="projects" className="relative py-32 px-6 md:px-12 overflow-hidden">
      <div id="gallery" className="absolute top-0" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(146,63,255,0.06),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm">
            <span className="font-body text-[10px] uppercase tracking-[0.3em] text-primary font-bold">Projects</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 text-white">
            Selected <span className="text-gradient">Work</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-sm">
            A curated selection of engineering projects and design case studies.
          </p>
        </motion.div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm shadow-xl flex-wrap justify-center">
            {["Development", "UI/UX Design", "Graphic Design"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 sm:px-8 py-2.5 rounded-full font-display text-sm font-medium transition-all duration-500 relative whitespace-nowrap ${
                  activeTab === tab 
                    ? "text-white" 
                    : "text-white/40 hover:text-white/60"
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative flex flex-col h-full rounded-3xl overflow-hidden transition-all duration-700"
              style={{
                background: "rgba(255,255,255,0.02)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(146,63,255,0.1)",
              }}
            >
              {/* Image Container */}
              <div className={`relative overflow-hidden ${activeTab === 'Graphic Design' ? 'h-full aspect-square flex items-center justify-center bg-black/20' : 'h-64'}`}>
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10 opacity-60" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className={`w-full h-full transition-transform duration-700 group-hover:scale-110 ${activeTab === 'Graphic Design' ? 'object-contain' : 'object-cover'}`}
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20" />
                
                {/* Type Tag on Image */}
                <div className="absolute top-6 left-6 z-30">
                  <span className="text-[10px] font-bold tracking-widest text-primary bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-primary/20 uppercase">
                    {project.type}
                  </span>
                </div>
              </div>

              {/* Content - Hidden for Graphic Design */}
              {activeTab !== 'Graphic Design' && (
                <div className="flex-1 p-8 flex flex-col relative z-30">
                  <h3 className="font-display text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors duration-500">
                    {project.title}
                  </h3>
                  <p className="font-body text-sm text-white/50 leading-relaxed mb-8 line-clamp-4 group-hover:text-white/70 transition-colors duration-500">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto mb-8">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-[10px] text-white/40 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer Link */}
                  <div className="flex items-center justify-between pt-6 border-t border-white/5">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-xs font-bold text-white/40 group-hover:text-primary transition-colors duration-500"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>View Details</span>
                    </motion.button>
                    <ArrowUpRight className="w-5 h-5 text-white/20 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
                  </div>
                </div>
              )}

              {/* Bottom Glow */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
