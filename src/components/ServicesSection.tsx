import { motion } from "framer-motion";
import { Monitor, Layers, Box, Palette } from "lucide-react";

const services = [
  {
    icon: Box,
    title: "3D Web Development",
    description: "Immersive 3D experiences using Three.js, WebGL, and React Three Fiber that push the boundaries of the web.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Human-centered design systems and interfaces that are beautiful, intuitive, and accessible.",
  },
  {
    icon: Monitor,
    title: "Frontend Development",
    description: "Pixel-perfect, performant frontends built with React, TypeScript, and modern tooling.",
  },
  {
    icon: Layers,
    title: "Creative Direction",
    description: "End-to-end creative vision — from concept and branding to motion design and final polish.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-32 px-6 md:px-12 bg-card/50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-4">Services</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            What I <span className="text-gradient">Do</span>
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group bg-card border border-border rounded-xl p-8 hover:border-primary/50 hover:glow-box transition-all duration-500 cursor-default"
            >
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <service.icon className="w-10 h-10 text-primary mb-5" strokeWidth={1.5} />
              </motion.div>
              <h3 className="font-display text-xl font-semibold mb-3">{service.title}</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
