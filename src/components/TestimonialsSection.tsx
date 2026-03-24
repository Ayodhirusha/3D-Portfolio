import { motion } from "framer-motion";
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
    role: "Owner, Fair Heaven Villa",
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(146,63,255,0.05),transparent_70%)] pointer-events-none" />

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
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-2xl p-10 md:p-14 text-center glow-box"
          >
            <Quote className="w-10 h-10 text-primary/30 mx-auto mb-6" />
            <p className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed mb-8 italic">
              "{testimonials[active].feedback}"
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center font-display font-bold text-sm text-primary-foreground">
                {testimonials[active].avatar}
              </div>
              <div className="text-left">
                <p className="font-display font-semibold">{testimonials[active].name}</p>
                <p className="font-body text-sm text-muted-foreground">{testimonials[active].role}</p>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} className="w-10 h-10 rounded-full border border-border hover:border-primary/50 flex items-center justify-center transition-colors">
              <ChevronLeft className="w-5 h-5 text-muted-foreground" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${i === active ? "bg-primary w-6" : "bg-muted-foreground/30"}`}
                />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full border border-border hover:border-primary/50 flex items-center justify-center transition-colors">
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
