import { motion, useScroll, useTransform } from "framer-motion";
import { Zap, Code, Award, Layers } from "lucide-react";
import { useRef } from "react";
import profileImg from "@/assets/profile-placeholder.jpg";

const highlights = [
  { icon: Zap, title: "Experience", value: "2+", suffix: "Years", desc: "Hands-on development" },
  { icon: Code, title: "Technologies", value: "15+", suffix: "", desc: "Tools & frameworks" },
  { icon: Layers, title: "Specialties", value: "Full", suffix: "Stack", desc: "Web & Mobile" },
  { icon: Award, title: "Achievements", value: "10+", suffix: "", desc: "Projects delivered" },
];

const AboutSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section ref={ref} id="about" className="relative py-32 px-6 md:px-12 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(88,63,255,0.08),transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-4 text-center md:text-left"
          >
            About
          </motion.p>

          <div className="grid md:grid-cols-5 gap-12 items-center">
            {/* Circular glowing photo with parallax */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
              whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              style={{ y: parallaxY }}
              className="md:col-span-2 flex justify-center"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-24px] rounded-full border border-dashed border-primary/20"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-40px] rounded-full border border-dotted border-accent/10"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-24px] rounded-full"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-primary" style={{ boxShadow: "0 0 12px rgba(146,63,255,0.6)" }} />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2.5 h-2.5 rounded-full bg-accent" style={{ boxShadow: "0 0 12px rgba(125,191,255,0.6)" }} />
                  <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-secondary" style={{ boxShadow: "0 0 10px rgba(88,63,255,0.5)" }} />
                </motion.div>

                <div className="absolute inset-4 bg-primary/20 rounded-full blur-3xl" />

                <div className="relative image-frame rounded-full overflow-hidden w-56 h-56 md:w-72 md:h-72">
                  <img src={profileImg} alt="Ayod Hirusha" className="w-full h-full object-cover rounded-full" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent rounded-full" />
                </div>
              </div>
            </motion.div>

            {/* Text with staggered reveal */}
            <div className="md:col-span-3">
              <motion.h2
                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6"
              >
                Passionate About
                <br />
                Creating <span className="text-gradient">Digital Solutions</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="font-body text-muted-foreground leading-relaxed mb-4"
              >
                I am a Software Engineering Graduate currently enrolled in the BSc (Hons) Software Engineering program at the University of Plymouth (UK). I have completed a Full Stack Development internship at Ceylon Innovations Pvt Ltd, where I gained practical industry experience.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="font-body text-muted-foreground leading-relaxed"
              >
                I am now seeking new job opportunities in the IT field to further develop my skills and grow as a well-regarded IT professional.
              </motion.p>
            </div>
          </div>

          {/* Highlight cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.12, type: "spring", bounce: 0.3 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-xl p-6 text-center overflow-hidden transition-all duration-500"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(146,63,255,0.1)",
                }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-primary/5 to-transparent" />
                <item.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                <span className="font-display text-2xl font-bold text-gradient">{item.value}</span>
                {item.suffix && <span className="font-display text-lg font-bold text-gradient ml-1">{item.suffix}</span>}
                <p className="font-display text-sm font-semibold mt-1">{item.title}</p>
                <p className="font-body text-xs text-muted-foreground mt-1">{item.desc}</p>
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
