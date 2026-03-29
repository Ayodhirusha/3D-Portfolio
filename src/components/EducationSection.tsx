import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Calendar } from "lucide-react";

const education = [
  {
    degree: "BSc (Hons) Software Engineering",
    institution: "NSBM Green University - Plymouth University",
    period: "2022 - 2026",
    isCurrent: true,
    description: "Following degree program at Plymouth University, UK with a focus on modern software development practices, web technologies, and database management.",
    details: [
      "Completed with Second Class Honours (Upper Division)",
      "Specialized in full-stack web development and mobile applications",
      "Gained hands-on experience with React, Node.js, Flutter, and database systems",
    ],
  },
  {
    degree: "BCI Certificate in English",
    institution: "Benedict XVI - Catholic Institute of Higher Education",
    period: "Completed",
    isCurrent: false,
    description: "Comprehensive English language certification program focusing on professional communication skills.",
    details: [
      "Successfully completed Intermediate Level with Credit",
      "Developed strong written and verbal communication abilities",
      "Enhanced professional presentation and documentation skills",
    ],
  },
];

const qualifications = [
  {
    icon: BookOpen,
    title: "LinkedIn Learning - Software Testing/QA",
    description: "Programming Foundations in Software Testing and Software Quality Assurance",
  },
  {
    icon: BookOpen,
    title: "LinkedIn Learning - Selenium",
    description: "Learning Selenium with Test Automation skills",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-16 md:py-24 px-4 sm:px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <p className="font-body text-[10px] md:text-sm uppercase tracking-[0.3em] text-primary mb-4">Education</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Academic <span className="text-gradient">Background</span>
          </h2>
          <p className="font-body text-xs md:text-sm text-muted-foreground max-w-xl mx-auto px-4">
            A journey of continuous learning — from formal education to professional certifications.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/30 to-transparent" />

          {/* Education Items */}
          <div className="space-y-8 md:space-y-12">
            {education.map((edu, i) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative pl-6 md:pl-20"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-4px] md:left-6 top-6 w-2 h-2 rounded-full bg-primary ring-4 ring-background" />
                
                {/* Card */}
                <div className="group bg-card border border-border rounded-xl md:rounded-2xl p-5 md:p-8 hover:border-primary/50 hover:glow-box transition-all duration-500">
                  {/* Header Row */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-4 mb-4">
                    <div className="min-w-0">
                      {/* Degree with Badge */}
                      <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-2">
                        <h3 className="font-display text-lg md:text-2xl font-semibold leading-tight">
                          {edu.degree}
                        </h3>
                        {edu.isCurrent && (
                          <span className="px-2 py-0.5 text-[8px] md:text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-400 rounded-full border border-emerald-500/30 whitespace-nowrap">
                            Current
                          </span>
                        )}
                      </div>
                      
                      {/* Institution */}
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <GraduationCap className="w-3.5 h-3.5 md:w-4 md:h-4 shrink-0" />
                        <span className="font-body text-xs md:text-sm truncate">{edu.institution}</span>
                      </div>
                    </div>

                    {/* Date */}
                    <div className="flex items-center gap-2 text-muted-foreground shrink-0">
                      <Calendar className="w-3.5 h-3.5 md:w-4 md:h-4" />
                      <span className="font-body text-[10px] md:text-sm">{edu.period}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="font-body text-xs md:text-sm text-muted-foreground leading-relaxed mb-4 md:mb-5">
                    {edu.description}
                  </p>

                  {/* Details */}
                  <ul className="space-y-1.5 md:space-y-2">
                    {edu.details.map((detail, j) => (
                      <li key={j} className="flex items-start gap-2 md:gap-3">
                        <span className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-primary/60 mt-1.5 md:mt-2 shrink-0" />
                        <span className="font-body text-[11px] md:text-sm text-muted-foreground/80 leading-relaxed">
                          {detail}
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

export default EducationSection;
