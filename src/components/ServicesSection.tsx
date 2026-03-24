import { motion } from "framer-motion";
import { Code, Palette, Database, Globe, Smartphone, Layers } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Full-stack web applications using React, Node.js, Express.js, and modern JavaScript frameworks with clean, maintainable code.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Cross-platform mobile applications built with Flutter and Dart, delivering native performance on both iOS and Android.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design using Figma, creating intuitive interfaces and engaging user experiences for web and mobile applications.",
  },
  {
    icon: Database,
    title: "Database Management",
    description: "Efficient database design and management with MySQL, SQL, and Firebase, ensuring data integrity and optimal performance.",
  },
  {
    icon: Globe,
    title: "Frontend Development",
    description: "Responsive, pixel-perfect frontends with HTML, CSS, JavaScript, and React, focusing on accessibility and user experience.",
  },
  {
    icon: Layers,
    title: "Graphic Design",
    description: "Creative visual content including social media posts, promotional videos, and branding materials using Photoshop and modern tools.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-32 px-6 md:px-12 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-4">Services</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            What I <span className="text-gradient">Do</span>
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-card border border-border rounded-xl p-8 hover:border-primary/50 hover:glow-box transition-all duration-500"
            >
              <service.icon className="w-10 h-10 text-primary mb-5" strokeWidth={1.5} />
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
