import { motion } from "framer-motion";

const FloatingGlassElements = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Large glass orb top-right */}
      <motion.div
        animate={{ y: [0, -40, 0], x: [0, 20, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[8%] right-[3%] w-[350px] h-[350px] rounded-full"
        style={{
          background: "radial-gradient(circle at 30% 30%, rgba(146, 63, 255, 0.1), rgba(125, 191, 255, 0.04), transparent 70%)",
          border: "1px solid rgba(146, 63, 255, 0.08)",
          backdropFilter: "blur(3px)",
        }}
      />

      {/* Extra large orb left */}
      <motion.div
        animate={{ y: [0, 30, 0], x: [0, -15, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute top-[55%] left-[-5%] w-[400px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle at 60% 40%, rgba(88, 63, 255, 0.07), transparent 65%)",
          border: "1px solid rgba(88, 63, 255, 0.05)",
          backdropFilter: "blur(2px)",
        }}
      />

      {/* Medium glass diamond mid-left */}
      <motion.div
        animate={{ y: [0, 25, 0], rotate: [45, 55, 45] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[35%] left-[5%] w-[140px] h-[140px]"
        style={{
          background: "linear-gradient(135deg, rgba(88, 63, 255, 0.08), rgba(125, 191, 255, 0.05))",
          border: "1px solid rgba(88, 63, 255, 0.1)",
          borderRadius: "24px",
          transform: "rotate(45deg)",
          backdropFilter: "blur(3px)",
        }}
      />

      {/* Small glass circle bottom-left */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[18%] left-[12%] w-[100px] h-[100px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(125, 191, 255, 0.1), transparent 70%)",
          border: "1px solid rgba(125, 191, 255, 0.1)",
          backdropFilter: "blur(2px)",
        }}
      />

      {/* Gradient line accent right */}
      <motion.div
        animate={{ opacity: [0.3, 0.7, 0.3], scaleY: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] right-[10%] w-[1px] h-[250px]"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(146, 63, 255, 0.4), rgba(125, 191, 255, 0.3), transparent)",
        }}
      />

      {/* Second gradient line left */}
      <motion.div
        animate={{ opacity: [0.2, 0.5, 0.2], scaleY: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute top-[60%] left-[8%] w-[1px] h-[200px]"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(88, 63, 255, 0.3), rgba(146, 63, 255, 0.2), transparent)",
        }}
      />

      {/* Glass ring bottom-right */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[8%] right-[6%] w-[200px] h-[200px] rounded-full"
        style={{
          border: "1px solid rgba(146, 63, 255, 0.08)",
          background: "transparent",
        }}
      />

      {/* Smaller spinning ring */}
      <motion.div
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-[70%] right-[15%] w-[120px] h-[120px] rounded-full"
        style={{
          border: "1px solid rgba(125, 191, 255, 0.06)",
          background: "transparent",
        }}
      />

      {/* Floating small dots */}
      {[
        { top: "15%", left: "20%", delay: 0, size: 6 },
        { top: "45%", left: "85%", delay: 2, size: 4 },
        { top: "75%", left: "30%", delay: 4, size: 5 },
        { top: "25%", left: "70%", delay: 1, size: 3 },
        { top: "85%", left: "60%", delay: 3, size: 4 },
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
            background: "rgba(146, 63, 255, 0.6)",
            boxShadow: "0 0 12px rgba(146, 63, 255, 0.4)",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingGlassElements;
