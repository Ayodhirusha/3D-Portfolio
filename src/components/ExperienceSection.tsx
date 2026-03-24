import { motion } from "framer-motion";
import { Building2, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Front End Developer",
    company: "Ceylon Innovations Pvt Ltd.",
    period: "SEP 2025 - MAR 2026",
    type: "Internship",
    isCurrent: false,
    description: "Completed Full Stack Development internship, building modern web applications and gaining hands-on experience with React, Node.js, and database management.",
    achievements: [
      "Developed modern UI/UX website with 58 pages for Pantiles Dental UK client using Vite React JS",
      "Built responsive frontend for Fair Heaven Villa coastal getaway with Vite React JS",
      "Developed and deployed websites for 4 Catholic dioceses under Caritas Sri Lanka project",
      "Implemented React.js frontend with Node.js/Express.js backend and SQL database integration",
      "Created Flutter web application for Warehouse Management System with MySQL and ASP.NET backend",
    ],
  },
  {
    role: "Freelance Graphic Designer",
    company: "FlyRay Tours",
    period: "Jan 2025 - Present",
    type: "Freelance",
    isCurrent: true,
    description: "Creating visual content and promotional materials for Sri Lankan tourism company, managing social media presence and client design requirements.",
    achievements: [
      "Produced engaging short videos and social media posts promoting Sri Lankan destinations",
      "Designed custom images and graphics aligned with client brand requirements",
      "Managed multiple design projects with focus on tourism and travel industry",
    ],
  },
  {
    role: "Freelance Graphic Designer",
    company: "Pamunugama Digitals and Color Lab",
    period: "2022 - 2025",
    type: "Freelance",
    isCurrent: false,
    description: "Handled diverse design projects for local business, creating social media content and maintaining brand consistency across platforms.",
    achievements: [
      "Designed and created social media posts tailored to client requirements",
      "Managed multiple concurrent projects while ensuring brand consistency",
      "Delivered high-quality visual content for local businesses and events",
    ],
  },
  {
    role: "Freelance UI/UX Designer",
    company: "CODFEC (Pvt)",
    period: "Apr 2024 - Jul 2024",
    type: "Freelance",
    isCurrent: false,
    description: "Worked on real-time projects designing intuitive user interfaces and experiences for web applications in a professional development environment.",
    achievements: [
      "Designed UI/UX for multiple web projects with focus on user-centered design",
      "Collaborated with development teams to ensure smooth design implementation",
      "Applied modern design principles and accessibility standards to interfaces",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-32 px-6 md:px-12 bg-card/30">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-4">Experience</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Career <span className="text-gradient">Journey</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            From internships to freelance projects — each role shaped my skills in design, development, and building digital products.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/30 to-transparent" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${i}`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative pl-8 md:pl-20"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-4px] md:left-6 top-6 w-2 h-2 rounded-full bg-primary ring-4 ring-background" />
                
                {/* Card */}
                <div className="group bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-primary/50 hover:glow-box transition-all duration-500">
                  {/* Header Row */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      {/* Role with Badge */}
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-display text-xl md:text-2xl font-semibold">
                          {exp.role}
                        </h3>
                        {exp.isCurrent && (
                          <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-400 rounded-full border border-emerald-500/30">
                            Current
                          </span>
                        )}
                      </div>
                      
                      {/* Company */}
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Building2 className="w-4 h-4" />
                        <span className="font-body text-sm">
                          {exp.company}
                          <span className="mx-2 text-border">·</span>
                          <span className="text-primary/70">{exp.type}</span>
                        </span>
                      </div>
                    </div>

                    {/* Date */}
                    <div className="flex items-center gap-2 text-muted-foreground shrink-0">
                      <Calendar className="w-4 h-4" />
                      <span className="font-body text-sm">{exp.period}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="font-body text-muted-foreground text-sm leading-relaxed mb-5">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 shrink-0" />
                        <span className="font-body text-sm text-muted-foreground/80 leading-relaxed">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
