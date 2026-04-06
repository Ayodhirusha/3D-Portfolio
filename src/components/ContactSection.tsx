import { motion } from "framer-motion";
import { Mail, Send, MapPin, Phone, Loader2 } from "lucide-react";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactSection = () => {
  const [focused, setFocused] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // In a real production app, you would call an API route here
      // For this portfolio, we'll simulate the call
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        reset();
      } else {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to send message");
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 px-6 md:px-12 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(146,63,255,0.08),transparent_60%)] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(125,191,255,0.06),transparent_60%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-4">Contact</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">
            Let's Build Something
            <br />
            <span className="text-gradient">Great Together</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-lg mx-auto">
            Have a project in mind? Let's create something extraordinary.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-2 space-y-4 md:space-y-6"
          >
            {[
              { icon: Mail, label: "Email", value: "ayodhirusha77@gmail.com", href: "mailto:ayodhirusha77@gmail.com" },
              { icon: Phone, label: "Phone", value: "077 0336504", href: "tel:+94770336504" },
              { icon: MapPin, label: "Location", value: "Sri Lanka", href: "#" },
            ].map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
                whileHover={{ x: 8 }}
                className="group flex items-center gap-4 md:gap-5 p-4 md:p-5 rounded-2xl glass-card hover:border-primary/30 hover:glow-box transition-all duration-500"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-primary-subtle flex items-center justify-center group-hover:glow-box transition-shadow duration-500 flex-shrink-0">
                  <item.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-body text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                  <p className="font-display text-xs md:text-sm font-medium text-foreground truncate">{item.value}</p>
                </div>
              </motion.a>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="pt-4"
            >
              <p className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-4">Find me on</p>
              <div className="flex items-center gap-4">
                {[
                  { icon: FaGithub, url: "https://github.com/Ayodhirusha", label: "GitHub" },
                  { icon: FaLinkedin, url: "https://www.linkedin.com/in/Ayod-hirusha", label: "LinkedIn" },
                  { icon: FaWhatsapp, url: "https://wa.me/94770336504", label: "WhatsApp" },
                  { icon: FaInstagram, url: "https://www.instagram.com/_mr.bay_nx_613_?igsh=MWJlaWdhcm5tYmM0ZQ==", label: "Instagram" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/icon relative w-12 h-12 rounded-full flex items-center justify-center overflow-hidden transition-all duration-500"
                  >
                    <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover/icon:opacity-100 transition-opacity duration-500 rounded-full" />
                    <div className="absolute inset-0 rounded-full border border-foreground/10 group-hover/icon:border-transparent transition-colors duration-500" />
                    <link.icon className="w-5 h-5 text-muted-foreground group-hover/icon:text-white relative z-10 transition-colors duration-300" />
                    <div className="absolute inset-0 rounded-full opacity-0 group-hover/icon:opacity-100 transition-opacity duration-500 glow-box" />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3 relative"
          >
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="relative glass-card rounded-3xl p-6 md:p-10 space-y-4 md:space-y-6 border-primary/10 transition-colors duration-500"
              style={{
                background: "linear-gradient(145deg, hsla(var(--primary) / 0.04), hsla(var(--card) / 0.8), hsla(var(--accent) / 0.03))",
                boxShadow: "0 25px 80px -20px hsla(var(--primary) / 0.15), inset 0 1px 0 hsla(var(--foreground) / 0.05)",
              }}
            >
              <div className="flex items-center gap-2 md:gap-3 mb-2">
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500/80" />
                <span className="font-body text-[10px] md:text-xs text-muted-foreground ml-2 md:ml-4">contact_form.tsx</span>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
                <div className="relative group">
                  <label
                    className={`absolute left-4 font-body text-[10px] md:text-xs transition-all duration-300 pointer-events-none z-10 ${focused === "name" ? "top-1.5 md:top-2 text-primary" : "top-3.5 md:top-4 text-muted-foreground"
                      }`}
                  >
                    Your Name
                  </label>
                  <input
                    {...register("name")}
                    type="text"
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    className={`w-full bg-foreground/[0.03] border ${errors.name ? 'border-red-500/50' : 'border-foreground/10'} rounded-xl px-4 pt-5 md:pt-6 pb-2 md:pb-2.5 font-body text-xs md:text-sm text-foreground focus:border-primary/60 focus:bg-foreground/[0.05] focus:outline-none transition-all duration-300`}
                  />
                  {errors.name && <p className="text-[10px] text-red-500 mt-1 ml-1">{errors.name.message}</p>}
                </div>

                <div className="relative group">
                  <label
                    className={`absolute left-4 font-body text-[10px] md:text-xs transition-all duration-300 pointer-events-none z-10 ${focused === "email" ? "top-1.5 md:top-2 text-primary" : "top-3.5 md:top-4 text-muted-foreground"
                      }`}
                  >
                    Your Email
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    className={`w-full bg-foreground/[0.03] border ${errors.email ? 'border-red-500/50' : 'border-foreground/10'} rounded-xl px-4 pt-5 md:pt-6 pb-2 md:pb-2.5 font-body text-xs md:text-sm text-foreground focus:border-primary/60 focus:bg-foreground/[0.05] focus:outline-none transition-all duration-300`}
                  />
                  {errors.email && <p className="text-[10px] text-red-500 mt-1 ml-1">{errors.email.message}</p>}
                </div>
              </div>

              <div className="relative group">
                <label
                  className={`absolute left-4 font-body text-xs transition-all duration-300 pointer-events-none z-10 ${focused === "subject" ? "top-2 text-primary" : "top-4 text-muted-foreground"
                    }`}
                >
                  Subject
                </label>
                <input
                  {...register("subject")}
                  type="text"
                  onFocus={() => setFocused("subject")}
                  onBlur={() => setFocused(null)}
                  className={`w-full bg-foreground/[0.03] border ${errors.subject ? 'border-red-500/50' : 'border-foreground/10'} rounded-xl px-4 pt-6 pb-2.5 font-body text-sm text-foreground focus:border-primary/60 focus:bg-foreground/[0.05] focus:outline-none transition-all duration-300`}
                />
                {errors.subject && <p className="text-[10px] text-red-500 mt-1 ml-1">{errors.subject.message}</p>}
              </div>

              <div className="relative group">
                <label
                  className={`absolute left-4 font-body text-xs transition-all duration-300 pointer-events-none z-10 ${focused === "message" ? "top-2 text-primary" : "top-4 text-muted-foreground"
                    }`}
                >
                  Your Message
                </label>
                <textarea
                  {...register("message")}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  rows={5}
                  className={`w-full bg-foreground/[0.03] border ${errors.message ? 'border-red-500/50' : 'border-foreground/10'} rounded-xl px-4 pt-6 pb-2.5 font-body text-sm text-foreground focus:border-primary/60 focus:bg-foreground/[0.05] focus:outline-none transition-all duration-300 resize-none`}
                />
                {errors.message && <p className="text-[10px] text-red-500 mt-1 ml-1">{errors.message.message}</p>}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full font-display text-sm py-4 rounded-xl bg-gradient-primary text-white hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-3 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ boxShadow: "0 10px 40px -10px rgba(146,63,255,0.4)" }}
              >
                <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                {isSubmitting ? (
                  <Loader2 className="w-4 h-4 animate-spin relative z-10" />
                ) : (
                  <Send className="w-4 h-4 relative z-10" />
                )}
                <span className="relative z-10">{isSubmitting ? "Sending..." : "Send Message"}</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
