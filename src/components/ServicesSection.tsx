import { motion } from "framer-motion";
import { Code, Globe, Palette, Cpu } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Expertise in HTML, CSS, JavaScript, and React to build responsive and dynamic web applications.",
    gradient: "from-[rgba(146,63,255,0.15)] to-[rgba(88,63,255,0.05)]",
  },
  {
    icon: Globe,
    title: "Full Stack Solutions",
    description: "Developing robust backends using Node.js, Express, and ASP.NET (C#) with SQL database integrations.",
    gradient: "from-[rgba(88,63,255,0.15)] to-[rgba(125,191,255,0.05)]",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating intuitive and impactful digital experiences using Figma, focusing on user-centered design principles.",
    gradient: "from-[rgba(125,191,255,0.15)] to-[rgba(146,63,255,0.05)]",
  },
  {
    icon: Cpu,
    title: "Mobile Development",
    description: "Building cross-platform mobile applications using Flutter and Dart for seamless user experiences.",
    gradient: "from-[rgba(146,63,255,0.12)] to-[rgba(125,191,255,0.08)]",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-16 md:py-24 px-4 sm:px-6 md:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto relative px-4 sm:px-6 md:px-12 py-8 md:py-16">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[200px] md:h-[400px] rounded-full bg-[radial-gradient(circle,rgba(88,63,255,0.06),transparent_70%)] pointer-events-none" />

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <p className="font-body text-[10px] md:text-sm uppercase tracking-[0.3em] text-primary mb-4">Services</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              What I <span className="text-gradient">Offer</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative rounded-2xl p-6 md:p-8 overflow-hidden transition-all duration-500"
                style={{
                  background: "hsla(var(--foreground) / 0.02)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid hsla(var(--primary) / 0.1)",
                }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-primary/5 to-transparent" />
                <div className="absolute -top-10 -right-10 md:-top-20 md:-right-20 w-32 h-32 md:w-40 md:h-40 rounded-full bg-primary/5 blur-2xl md:blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative z-10">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-primary-subtle flex items-center justify-center mb-4 md:mb-6 group-hover:glow-box transition-all duration-500">
                    <service.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-lg md:text-xl font-semibold mb-2 md:mb-3">{service.title}</h3>
                  <p className="font-body text-muted-foreground text-xs md:text-sm leading-relaxed">{service.description}</p>
                </div>

                {/* Bottom gradient line */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
