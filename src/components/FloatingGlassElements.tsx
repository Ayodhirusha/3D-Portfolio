import { motion } from "framer-motion";

const FloatingGlassElements = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Gradient line accent right */}
      <motion.div
        animate={{ opacity: [0.3, 0.7, 0.3], scaleY: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] right-[10%] w-[1px] h-[250px]"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(59, 130, 246, 0.4), rgba(96, 165, 250, 0.3), transparent)",
        }}
      />

      {/* Second gradient line left */}
      <motion.div
        animate={{ opacity: [0.2, 0.5, 0.2], scaleY: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute top-[60%] left-[8%] w-[1px] h-[200px]"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(30, 64, 175, 0.3), rgba(59, 130, 246, 0.2), transparent)",
        }}
      />

      {/* Glass ring bottom-right */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[8%] right-[6%] w-[200px] h-[200px] rounded-full"
        style={{
          border: "1px solid rgba(59, 130, 246, 0.08)",
          background: "transparent",
        }}
      />

      {/* Smaller spinning ring */}
      <motion.div
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-[70%] right-[15%] w-[120px] h-[120px] rounded-full"
        style={{
          border: "1px solid rgba(96, 165, 250, 0.06)",
          background: "transparent",
        }}
      />

      {/* Floating small dots - blue themed */}
      {[
        { top: "15%", left: "20%", delay: 0, size: 6 },
        { top: "45%", left: "85%", delay: 2, size: 4 },
        { top: "75%", left: "30%", delay: 4, size: 5 },
        { top: "25%", left: "70%", delay: 1, size: 3 },
        { top: "85%", left: "60%", delay: 3, size: 4 },
        { top: "10%", left: "50%", delay: 1.5, size: 5 },
        { top: "55%", left: "15%", delay: 3.5, size: 4 },
        { top: "90%", left: "40%", delay: 0.5, size: 3 },
      ].map((dot, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut", delay: dot.delay }}
          className="absolute rounded-full"
          style={{
            top: dot.top,
            left: dot.left,
            width: dot.size,
            height: dot.size,
            background: "rgba(59, 130, 246, 0.6)",
            boxShadow: "0 0 12px rgba(59, 130, 246, 0.4)",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingGlassElements;
