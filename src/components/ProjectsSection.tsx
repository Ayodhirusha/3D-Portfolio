import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "Caritas Galle Diocese",
    category: "Development",
    type: "Full-Stack Development",
    description: "Caritas SED Galle is a charitable organization dedicated to justice, peace, and human development in the Southern Province of Sri Lanka. As the Diocesan Centre for Social and Economic Development, we work towards uplifting the needy, fostering harmony, and providing essential support in times of crisis.",
    tags: ["React.js", "Node.js & Express", "Vite", "Tailwind CSS", "SQL databases"],
    image:" Caritas Galle .png ",
    liveUrl: "https://caritasgalle.lk/"
  },
  {
    title: "Caritas Chilaw Diocese",
    category: "Development",
    type: "Full-Stack Development",
    description:"Caritas Chilaw – Janasaviya SEDEC was established in 1969 under the visionary leadership of Rev. Fr. Philip Sethunga, marking the beginning of a mission rooted in compassion and service for the Diocese of Chilaw.",
    tags: ["React.js", "Node.js & Express", "Vite", "Tailwind CSS", "SQL databases"],
    image: "Caritas Chilaw.png",
    liveUrl: "https://caritaschilaw.lk/"
  },
  {
    title: "Caritas Colombo Diocese",
    category: "Development",
    type: "Full-Stack Development",
    description: "Caritas Colombo - Seth Sarana is the official social service arm of the Archdiocese of Colombo, dedicated to promoting justice, peace, and human development. Established on 15th August 1986 by Rev. Fr. Malcolm Ranjith, now His Eminence Malcolm Cardinal Ranjith, the organization continues to serve as a beacon of faith-driven social action.",
    tags: ["React.js", "Node.js & Express", "Vite", "Tailwind CSS", "SQL databases"],
    image: "Caritas Colombo .png",
    liveUrl: "https://sethsaranacc.org/"
  },
  {
    title: "Caritas Badulla Diocese",
    category: "Development",
    type: "Full-Stack Development",
    description: "Established in 1975, the USCOD Centre (Caritas Badulla) serves the Diocese of Badulla, which covers the Uva Province — the Diocese of Badulla and Monaragala.",
    tags: ["React.js", "Node.js & Express", "Vite", "Tailwind CSS", "SQL databases"],
    image: "Caritas Badulla.png",
    liveUrl: "https://caritasbadullauscod.org/"
  },
  {
    title: "Fair Heaven Villa",
    category: "Development",
    type: "Frontend Development",
    description: "I handled this project end-to-end as both Website Developer and UI/UX Designer, working closely with the client to ensure the final website truly reflects the villa’s calm atmosphere and welcoming hospitality.",
    tags: ["React.js", "Vite", "Tailwind CSS"],
    image: "Fair Heaven Villa.png",
    liveUrl: "https://fairheavenchilaw.com/"
  },
  {
    title: "Pantiles Dental UK",
    category: "Development",
    type: "Frontend Development",
    description: "This project focused on creating a clean, modern, and trustworthy digital experience for a dental practice, ensuring patients feel comfortable, informed, and confident from the first interaction.",
    tags: ["React.js", "Vite", "Tailwind CSS"],
    image: "Pantiles Dental web.png",
    liveUrl: "https://pantilesdental.co.uk/"
  },
  {
    title: "Ceylon Innovations Website",
    category: "Development",
    type: "Frontend Development",
    description: "At Ceylon Innovations, we empower businesses across diverse industries with forward-thinking software solutions tailored to meet modern challenges. Our technologies are designed to enhance productivity, streamline processes, and unlock new opportunities for growth.",
    tags: ["React.js", "Vite", "Tailwind CSS"],
    image: "Ceylon Innovation.png",
    liveUrl: "https://www.ceyloninnovation.com/"
  },
  {
    title: "Flutter_web",
    category: "Development",
    type: "Warehouse Management",
    description: "A comprehensive analytics dashboard for social media managers. Tracks engagement metrics, audience growth, and content performance across multiple platforms with AI-powered insights.",
    tags: ["HTML", "C#", "Dart","Flutter","SQL"],
    image: "Flutter WEB.png",
    liveUrl: "https://github.com/Ayodhirusha/Flutter_web"
  },
  {
    title: "Fair Haven Villa",
    category: "UI/UX Design",
    type: "CASE STUDY",
    description: "Designed a premium booking experience for a luxury villa in Chilaw. Created a visual identity that reflects tranquility and elegance, with a focus on high-conversion landing pages and immersive property showcases.",
    tags: ["Figma", "Web Design", "Visual Identity"],
    image: "fair heaven.png",
    figmaUrl: "https://www.figma.com/design/h3XR1WoYfl5nsmePVc5k1g/Fair-Heaven?node-id=0-1&t=2az91xj0x8P6eIUd-1"
  },
  {
    title: "Pantiles Dental Center",
    category: "UI/UX Design",
    type: "CASE STUDY",
    description: "An extensive patient management and appointment scheduling platform for a UK-based dental clinic. Features 58+ custom pages with a focus on accessibility, medical security standards, and seamless user experience",
    tags: ["Figma", "Web Design", "User Research"],
    image: "Pantiles Dental.png",
    figmaUrl: "https://www.figma.com/design/xQliGsa62I69VV00KjEAhd/Pantiles-Dental?node-id=0-1&t=MENSfoykaUwAIK9o-1"
  },
  {
    title: "3D/2D Furniture Designer Pro ",
    category: "UI/UX Design",
    type: "CASE STUDY",
    description: "A comprehensive web-based design tool that allows users to visualize furniture layouts in both 2D and 3D environments.This project emphasizes a customizable user experience through a robust dark/light mode system and a modular sidebar for precise spatial configuration.",
    tags: ["Figma", "Web Design", "Design Tool"],
    image: "HCI project.png",
    figmaUrl: "https://www.figma.com/design/BaeUzxgvHeTYaYDcqi218h/HCI-Project-UI?node-id=0-1&t=2ZP3OlWJhBzmYz3x-1"
  },
  {
    title: "Duskpine Earplugs",
    category: "UI/UX Design",
    type: "CASE STUDY",
    description: "Duskpine is a direct to consumer brand selling handcrafted noise cancelling earplugs made from natural beeswax. Built for remote workers, light sleepers and frequent travellers aged 25-45 who are health conscious, willing to pay a premium and ",
    tags: ["Figma", "Web Design", "Health Tech"],
    image: "Duskpine_AyodHirusha.png",
    figmaUrl: "https://www.figma.com/design/qFNwPoGnZTsn4iCHSaC5FK/Duskpine_AyodHirusha?node-id=3-2&t=O006yL0Ph1AO29BZ-1"
  },
  {
    title: "Travel Agency",
    category: "UI/UX Design",
    type: "CASE STUDY",
    description: "A comprehensive web design project for a travel agency, featuring a high-conversion landing page and detailed multi-day itinerary layouts. The project focuses on structured storytelling, using a clean vertical hierarchy to guide users through curated travel packages, day-by-day breakdowns, and immersive destination photography.",
    tags: ["Figma", "Web Design", "Travel"],
    image: "travel agency.png",
    figmaUrl: "https://www.figma.com/design/Zig2E03sgVhDY3YJ09PCy0/travel-agency?node-id=0-1&t=b1TJfT6vKkR66HuJ-1"
  },
  {
    title: "Food Delivery Platform",
    category: "UI/UX Design",
    type: "CASE STUDY",
    description: "End-to-end food ordering experience with restaurant discovery, real-time tracking, and seamless checkout. Optimized for quick decisions and delightful interactions.",
    tags: ["Figma", "Web Design", "On-Demand"],
    image: "Manar project.png",
    figmaUrl: "https://www.figma.com/design/jIp6qE430YxbqeZnA8Z5H6/Mannar-Step-1?node-id=0-1&t=JjLMPApTf9iumcS4-1"
  },
  {
    title: "Blood donation",
    category: "UI/UX Design",
    type: "CASE STUDY",
    description: "A comprehensive digital platform designed to streamline blood donation or medical collection logistics. This final year project features three distinct user interfaces tailored for Donors, Collectors, and Healthcare Professionals (Doctors).",
    tags: ["Figma", "Web Design", "Medical"],
    image: "blood donation UI.png",
    figmaUrl: "https://www.figma.com/design/sRXJHUs3eXvOJZU2dQCY9S/final-year-project-UI?node-id=0-1&t=pFOKwpwOWO6GfL2W-1"
  },
  {
    title: "Ceylon Innovations website",
    category: "UI/UX Design",
    type: "CASE STUDY",
    description: "A full-scale corporate website design focused Software Development service offerings and technical innovation. This project demonstrates the ability to translate a professional brand identity across multiple landing pages, service-specific subpages, and team galleries, maintaining a cohesive aesthetic of trust and authority.",
    tags: ["Figma", "Web Design", "Corporate"],
    image: "CI websit.png",
    figmaUrl: "https://www.figma.com/design/HPsGVCHjsu0evmgtvfwkbI/CI-WEBSITE?node-id=0-1&t=SANkQ5E6aqXugIJI-1"
  },
   {
    title: "PC Build website",
    category: "UI/UX Design",
    type: "CASE STUDY",
    description: "A dark-themed e-commerce platform designed for high-performance gaming hardware. The project centers on a Rig Configurator interface that simplifies complex technical choices into a streamlined, visual selection process. It balances a futuristic aesthetic with functional e-commerce elements like product catalogs, detailed spec sheets, and a seamless cart drawer.  ",
    tags: ["Figma", "Web Design", "Corporate"],
    image: "PC store.png",
    figmaUrl: "https://www.figma.com/design/yBM9DroOsMZVNDl1ifSrZQ/PC-Build-web?node-id=0-1&t=xuPKf2Ul5JLXKo7P-1"
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
              key={`${activeTab}-${i}`}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: Math.min(i * 0.05, 0.5), type: "spring", bounce: 0.2 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
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

              {activeTab === 'UI/UX Design' && (
                <div className="flex-1 p-5 md:p-6 flex flex-col relative z-30 bg-[#0a0a0a]">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#A855F7] uppercase mb-2">UI/UX Case Study</span>
                  <h3 className="font-display text-lg md:text-xl font-bold mb-3 text-white group-hover:text-[#A855F7] transition-colors duration-500">
                    {project.title}
                  </h3>
                  <p className="font-body text-xs text-white/60 leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <a
                    href={project.figmaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto flex items-center gap-2 text-xs font-medium text-white/70 hover:text-[#A855F7] transition-colors pt-4 border-t border-white/10"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>View Project</span>
                  </a>
                </div>
              )}

              {activeTab === 'Development' && (
                <div className="flex-1 p-5 md:p-6 flex flex-col relative z-30 bg-[#0a0a0a]">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#A855F7] uppercase mb-2">{project.type}</span>
                  <h3 className="font-display text-lg md:text-xl font-bold mb-3 text-white group-hover:text-[#A855F7] transition-colors duration-500">
                    {project.title}
                  </h3>
                  <p className="font-body text-xs text-white/60 leading-relaxed mb-4 line-clamp-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-auto mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 rounded bg-white/10 text-[10px] text-white/70 font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-medium text-white/70 hover:text-[#A855F7] transition-colors pt-3 border-t border-white/10"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live</span>
                  </a>
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
