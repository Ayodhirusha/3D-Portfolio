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
    <section id="services" className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 overflow-hidden">
      {/* Highlighted section background */}
      <div className="absolute inset-x-2 sm:inset-x-4 md:inset-x-8 inset-y-0 rounded-3xl overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(15,23,42,0.95)] via-[rgba(10,15,30,0.9)] to-[rgba(15,23,42,0.95)] border border-[rgba(146,63,255,0.12)] rounded-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(146,63,255,0.3)] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[rgba(125,191,255,0.2)] to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10 px-2 sm:px-6 md:px-12 py-8 sm:py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <p className="font-body text-[10px] sm:text-sm uppercase tracking-[0.3em] text-primary mb-3 sm:mb-4">Services</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
            What I <span className="text-gradient">Offer</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 overflow-hidden transition-all duration-500"
              style={{
                background: "hsla(var(--foreground) / 0.02)",
                backdropFilter: "blur(20px)",
                border: "1px solid hsla(var(--primary) / 0.1)",
              }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-primary/5 to-transparent" />
              <div className="absolute -top-10 -right-10 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full bg-primary/5 blur-2xl md:blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-primary-subtle flex items-center justify-center mb-3 sm:mb-4 md:mb-6 group-hover:glow-box transition-all duration-500">
                  <service.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-sm sm:text-lg md:text-xl font-semibold mb-1.5 sm:mb-2 md:mb-3">{service.title}</h3>
                <p className="font-body text-muted-foreground text-[11px] sm:text-xs md:text-sm leading-relaxed">{service.description}</p>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
