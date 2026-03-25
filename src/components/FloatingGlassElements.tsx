import { motion } from "framer-motion";

const FloatingGlassElements = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Large glass orb top-right */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] right-[5%] w-[300px] h-[300px] rounded-full"
        style={{
          background: "radial-gradient(circle at 30% 30%, rgba(146, 63, 255, 0.08), rgba(125, 191, 255, 0.03), transparent 70%)",
          border: "1px solid rgba(146, 63, 255, 0.06)",
          backdropFilter: "blur(2px)",
        }}
      />

      {/* Medium glass diamond mid-left */}
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [45, 50, 45] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[40%] left-[3%] w-[120px] h-[120px]"
        style={{
          background: "linear-gradient(135deg, rgba(88, 63, 255, 0.06), rgba(125, 191, 255, 0.04))",
          border: "1px solid rgba(88, 63, 255, 0.08)",
          borderRadius: "20px",
          transform: "rotate(45deg)",
          backdropFilter: "blur(2px)",
        }}
      />

      {/* Small glass circle bottom-left */}
      <motion.div
        animate={{ y: [0, -25, 0], x: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[20%] left-[10%] w-[80px] h-[80px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(125, 191, 255, 0.08), transparent 70%)",
          border: "1px solid rgba(125, 191, 255, 0.08)",
          backdropFilter: "blur(1px)",
        }}
      />

      {/* Gradient line accent right */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3], scaleY: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[25%] right-[12%] w-[1px] h-[200px]"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(146, 63, 255, 0.3), rgba(125, 191, 255, 0.2), transparent)",
        }}
      />

      {/* Glass ring bottom-right */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[10%] right-[8%] w-[180px] h-[180px] rounded-full"
        style={{
          border: "1px solid rgba(146, 63, 255, 0.06)",
          background: "transparent",
        }}
      />
    </div>
  );
};

export default FloatingGlassElements;
