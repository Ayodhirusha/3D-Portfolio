import { motion } from "framer-motion";
import { Code, Globe, Palette, Cpu } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Expertise in HTML, CSS, JavaScript, and React to build responsive and dynamic web applications.",
  },
  {
    icon: Globe,
    title: "Full Stack Solutions",
    description: "Developing robust backends using Node.js, Express, and ASP.NET (C#) with SQL database integrations.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating intuitive and impactful digital experiences using Figma, focusing on user-centered design principles.",
  },
  {
    icon: Cpu,
    title: "Mobile Development",
    description: "Building cross-platform mobile applications using Flutter and Dart for seamless user experiences.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-32 px-6 md:px-12 overflow-hidden">
      {/* Spotlight */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(88,63,255,0.06),transparent_70%)] pointer-events-none" />

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
            What I <span className="text-gradient">Offer</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group glass-card rounded-2xl p-8 hover:border-primary/30 hover:glow-box transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-primary-subtle flex items-center justify-center mb-6 group-hover:glow-box transition-shadow duration-500">
                <service.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
              </div>
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
