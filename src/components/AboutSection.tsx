import { motion } from "framer-motion";
import profileImg from "@/assets/profile-placeholder.jpg";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6 md:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
          variants={fadeUp}
          className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-4 text-center md:text-left"
        >
          About
        </motion.p>

        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Creative Image Frame */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={1}
            variants={fadeUp}
            className="md:col-span-2 flex justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: [12, 18, 12] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 w-20 h-20 border border-primary/30 rounded-lg"
              />
              <div className="absolute -bottom-6 -right-6 w-16 h-16 border border-accent/30 rounded-full" />
              <motion.div
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-1/2 -right-8 w-2 h-2 rounded-full bg-primary"
              />
              <motion.div
                animate={{ scale: [1, 1.8, 1] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -top-2 right-1/4 w-1.5 h-1.5 rounded-full bg-accent"
              />

              <div className="absolute inset-4 bg-primary/10 rounded-xl blur-3xl" />

              <div className="relative image-frame rounded-xl overflow-hidden w-64 h-80 md:w-72 md:h-96">
                <img
                  src={profileImg}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent rounded-xl" />
              </div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-3 -left-3 bg-card border border-border rounded-lg px-4 py-2 glow-box"
              >
                <span className="font-display text-xs font-semibold text-gradient">Creative Dev</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Text content */}
          <div className="md:col-span-3">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={2}
              variants={fadeUp}
              className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6"
            >
              Where Code
              <br />
              Meets <span className="text-gradient">Design</span>
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={3}
              variants={fadeUp}
              className="font-body text-muted-foreground leading-relaxed mb-4"
            >
              I'm a multidisciplinary designer and developer passionate about creating memorable digital experiences. With expertise in Three.js, WebGL, and modern frontend frameworks, I bring ideas to life in three dimensions.
            </motion.p>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={4}
              variants={fadeUp}
              className="font-body text-muted-foreground leading-relaxed mb-8"
            >
              My approach combines deep technical skill with an obsessive eye for design — every pixel, every interaction, every transition is crafted with intention and purpose.
            </motion.p>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={5 + i}
                  variants={fadeUp}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  className="bg-card border border-border rounded-xl p-5 text-center glow-box hover:glow-box-strong hover:border-primary/40 transition-all duration-500 cursor-default"
                >
                  <span className="font-display text-2xl md:text-3xl font-bold text-gradient">{stat.value}</span>
                  <p className="font-body text-xs text-muted-foreground mt-2 uppercase tracking-wider">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
