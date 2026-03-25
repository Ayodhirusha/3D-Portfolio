import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "David Thompson",
    role: "CEO, Pantiles Dental",
    feedback: "MiladiCode delivered an outstanding 58-page website for our dental practice. The attention to detail and modern design exceeded our expectations. Highly recommended!",
    avatar: "DT",
  },
  {
    name: "Fr. Prasad Fernando",
    role: "Director, Caritas Sri Lanka",
    feedback: "Milad developed professional websites for four of our dioceses. His full-stack expertise and dedication to quality made the entire process smooth and efficient.",
    avatar: "PF",
  },
  {
    name: "Sarah Williams",
    role: "Owner, Fair Haven Villa",
    feedback: "The website perfectly captures the essence of our villa. Beautiful design, fast performance, and a seamless booking experience. Our guests love it!",
    avatar: "SW",
  },
];

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="relative py-32 px-6 md:px-12 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(146,63,255,0.06),transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-4">Testimonials</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            What Clients <span className="text-gradient">Say</span>
          </h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.97 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-3xl p-10 md:p-14 text-center overflow-hidden"
              style={{
                background: "linear-gradient(145deg, rgba(146,63,255,0.05), rgba(0,0,0,0.4), rgba(125,191,255,0.03))",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(146,63,255,0.12)",
                boxShadow: "0 25px 60px -20px rgba(146,63,255,0.15)",
              }}
            >
              <Quote className="w-12 h-12 text-primary/20 mx-auto mb-6" />
              <p className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed mb-8 italic">
                "{testimonials[active].feedback}"
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center font-display font-bold text-sm text-white shadow-lg"
                  style={{ boxShadow: "0 0 25px rgba(146,63,255,0.3)" }}
                >
                  {testimonials[active].avatar}
                </div>
                <div className="text-left">
                  <p className="font-display font-semibold text-lg">{testimonials[active].name}</p>
                  <p className="font-body text-sm text-muted-foreground">{testimonials[active].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="w-11 h-11 rounded-full border border-border hover:border-primary/50 hover:bg-primary/10 flex items-center justify-center transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5 text-muted-foreground" />
            </motion.button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all duration-500 ${i === active ? "bg-gradient-primary w-8" : "bg-muted-foreground/20 w-2 hover:bg-muted-foreground/40"}`}
                />
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="w-11 h-11 rounded-full border border-border hover:border-primary/50 hover:bg-primary/10 flex items-center justify-center transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
