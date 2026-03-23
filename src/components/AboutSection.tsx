import { motion } from "framer-motion";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-4">About</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
              Where Code
              <br />
              Meets <span className="text-gradient">Design</span>
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              I'm a multidisciplinary designer and developer passionate about creating memorable digital experiences. With expertise in Three.js, WebGL, and modern frontend frameworks, I bring ideas to life in three dimensions.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              My approach combines deep technical skill with an obsessive eye for design — every pixel, every interaction, every transition is crafted with intention and purpose.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-card border border-border rounded-xl p-6 text-center glow-box"
              >
                <span className="font-display text-3xl font-bold text-gradient">{stat.value}</span>
                <p className="font-body text-xs text-muted-foreground mt-2 uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
