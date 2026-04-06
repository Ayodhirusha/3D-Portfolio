import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MessageSquare, ArrowRight, Users, Clock, Zap, Star, Shield, Globe, Heart, Sparkles, Crown, CheckCircle2, ArrowLeft } from "lucide-react";

const WhatsApp = () => {
  const whatsappNumber = "94770336504";
  const message = "Hi Ayod, I'm interested in working with you!";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = whatsappUrl;
    }, 8000);
    return () => clearTimeout(timer);
  }, [whatsappUrl]);

  const stats = [
    { icon: Users, value: "30+", label: "Happy Clients" },
    { icon: Clock, value: "24/7", label: "Availability" },
    { icon: Zap, value: "<15min", label: "Response Time" },
    { icon: Star, value: "4.9★", label: "Client Rating" },
  ];

  const features = [
    {
      icon: Zap,
      title: "Instant Response",
      description: "Get replies within minutes, not hours. I'm always connected and ready to help.",
      color: "from-orange-500 to-yellow-500",
    },
    {
      icon: Users,
      title: "Personal Touch",
      description: "Direct one-on-one conversation with me. No chatbots, just genuine human interaction.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Globe,
      title: "Global Availability",
      description: "Whether you're in Sri Lanka or anywhere in the world, I'm just a message away.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Heart,
      title: "Friendly Support",
      description: "Approachable and helpful communication. Let's discuss your ideas in a relaxed way.",
      color: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#25D366]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px]" />
      </div>

      {/* Back Button */}
      <div className="absolute top-6 left-6 z-20">
        <Link to="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Home</span>
          </motion.button>
        </Link>
      </div>

      {/* Header Section */}
      <section className="relative pt-20 pb-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Chat on <span className="text-[#25D366]">WhatsApp</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg max-w-2xl mx-auto mb-12"
          >
            Get instant support, discuss your project ideas, and receive quick quotes through WhatsApp. Experience premium customer service with a personal touch.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16"
          >
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-3">
                  <stat.icon className="w-6 h-6 text-[#25D366]" />
                </div>
                <span className="text-2xl font-bold">{stat.value}</span>
                <span className="text-sm text-white/50">{stat.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Chat Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-lg mx-auto bg-[#111] rounded-[2rem] p-6 border border-white/10 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#25D366] flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold">WhatsApp Chat</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                    <span className="text-sm text-[#25D366]">Online now</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 text-xs font-semibold">
                <Crown className="w-3 h-3" />
                Premium
              </div>
            </div>

            <div className="flex gap-4 mb-6 text-sm">
              <div className="flex items-center gap-2 text-white/70">
                <Zap className="w-4 h-4 text-[#25D366]" />
                Instant Response
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Shield className="w-4 h-4 text-blue-400" />
                Secure Chat
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Clock className="w-4 h-4 text-purple-400" />
                24/7 Available
              </div>
            </div>

            <div className="bg-[#1a1a1a] rounded-2xl p-4 mb-6 text-left">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold">AH</span>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1 text-[#25D366]">Ayod Hirusha</p>
                  <p className="text-sm text-white/80">
                    Hi! 👋 Thanks for reaching out. I'm excited to hear about your project and how I can help bring your ideas to life!
                  </p>
                  <p className="text-xs text-white/40 mt-2">Usually replies instantly</p>
                </div>
              </div>
            </div>

            <motion.a
              href={whatsappUrl}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-[#25D366] text-black font-semibold hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] transition-all"
            >
              <MessageSquare className="w-5 h-5" />
              Start WhatsApp Chat
              <ArrowRight className="w-5 h-5" />
            </motion.a>

            <div className="flex items-center justify-center gap-4 mt-4 text-xs text-white/40">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                Get instant replies
              </span>
              <span className="flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                Quick project quotes
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                Free consultation
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose WhatsApp Chat?</h2>
            <p className="text-white/60 max-w-xl mx-auto">
              Experience the convenience of instant messaging with the reliability of professional service.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#111] rounded-3xl p-6 border border-white/10 hover:border-white/20 transition-all group"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#25D366] to-[#128C7E]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Ready to Start Your Project?</h2>
            <p className="text-black/70 mb-8 max-w-xl mx-auto">
              Don't wait! Send me a message on WhatsApp and let's discuss how I can help bring your ideas to life. Free consultation included!
            </p>
            <motion.a
              href={whatsappUrl}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#128C7E] font-semibold shadow-xl hover:shadow-2xl transition-all"
            >
              <MessageSquare className="w-5 h-5" />
              Chat Now on WhatsApp
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/40 text-sm">
            Ayod Hirusha Portfolio © {new Date().getFullYear()} — Crafted with precision
          </p>
        </div>
      </footer>
    </div>
  );
};

export default WhatsApp;
