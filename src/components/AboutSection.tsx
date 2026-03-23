import { motion } from "framer-motion";
import profileImg from "@/assets/profile-placeholder.jpg";

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
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-4 text-center md:text-left">About</p>
          
          <div className="grid md:grid-cols-5 gap-12 items-center">
            {/* Creative Image Frame - 2 cols */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:col-span-2 flex justify-center"
            >
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-20 h-20 border border-primary/30 rounded-lg rotate-12 animate-float" />
                <div className="absolute -bottom-6 -right-6 w-16 h-16 border border-accent/30 rounded-full" />
                <div className="absolute top-1/2 -right-8 w-2 h-2 rounded-full bg-primary animate-pulse" />
                <div className="absolute -top-2 right-1/4 w-1.5 h-1.5 rounded-full bg-accent animate-pulse" style={{ animationDelay: '1s' }} />
                
                {/* Glow behind image */}
                <div className="absolute inset-4 bg-primary/10 rounded-xl blur-3xl" />
                
                {/* Main image with gradient border */}
                <div className="relative image-frame rounded-xl overflow-hidden w-64 h-80 md:w-72 md:h-96">
                  <img
                    src={profileImg}
                    alt="Profile"
                    className="w-full h-full object-cover rounded-xl"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent rounded-xl" />
                </div>

                {/* Floating badge */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-3 -left-3 bg-card border border-border rounded-lg px-4 py-2 glow-box"
                >
                  <span className="font-display text-xs font-semibold text-gradient">Creative Dev</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Text content - 3 cols */}
            <div className="md:col-span-3">
              <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
                Where Code
                <br />
                Meets <span className="text-gradient">Design</span>
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                I'm a multidisciplinary designer and developer passionate about creating memorable digital experiences. With expertise in Three.js, WebGL, and modern frontend frameworks, I bring ideas to life in three dimensions.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-8">
                My approach combines deep technical skill with an obsessive eye for design — every pixel, every interaction, every transition is crafted with intention and purpose.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.15 }}
                    className="bg-card border border-border rounded-xl p-5 text-center glow-box hover:glow-box-strong transition-shadow duration-500"
                  >
                    <span className="font-display text-2xl md:text-3xl font-bold text-gradient">{stat.value}</span>
                    <p className="font-body text-xs text-muted-foreground mt-2 uppercase tracking-wider">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
