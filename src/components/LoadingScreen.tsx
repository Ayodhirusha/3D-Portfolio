import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "reveal" | "done">("loading");

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setPhase("reveal"), 200);
          setTimeout(() => {
            setPhase("done");
            onComplete();
          }, 1200);
          return 100;
        }
        const increment = prev < 30 ? 1.5 : prev < 60 ? 2.5 : prev < 90 ? 3 : 1.5;
        return Math.min(prev + increment, 100);
      });
    }, 30);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#030014] overflow-hidden"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Animated gradient orbs */}
          <motion.div
            animate={{
              x: [0, 40, -20, 0],
              y: [0, -30, 20, 0],
              scale: [1, 1.2, 0.9, 1],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full opacity-30 blur-[120px]"
            style={{ background: "radial-gradient(circle, #3B82F6, transparent 70%)" }}
          />
          <motion.div
            animate={{
              x: [0, -30, 20, 0],
              y: [0, 40, -20, 0],
              scale: [1, 0.9, 1.15, 1],
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full opacity-25 blur-[100px]"
            style={{ background: "radial-gradient(circle, #1E40AF, transparent 70%)" }}
          />
          <motion.div
            animate={{
              x: [0, 25, -15, 0],
              y: [0, -20, 30, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full opacity-20 blur-[80px]"
            style={{ background: "radial-gradient(circle, #60A5FA, transparent 70%)" }}
          />

          {/* Floating particles */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.6, 0],
                y: [0, -60 - Math.random() * 40],
                x: [0, (Math.random() - 0.5) * 30],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeOut",
              }}
              className="absolute rounded-full"
              style={{
                width: 2 + Math.random() * 3,
                height: 2 + Math.random() * 3,
                left: `${10 + Math.random() * 80}%`,
                top: `${30 + Math.random() * 40}%`,
                background: i % 3 === 0 ? "#3B82F6" : i % 3 === 1 ? "#60A5FA" : "#1E40AF",
              }}
            />
          ))}

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
            className="relative z-10 text-center mb-12"
          >
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-[#3B82F6] via-[#1E40AF] to-[#60A5FA] bg-clip-text text-transparent">
                Ayod Hirusha
              </span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="font-body text-white/40 text-xs tracking-[0.4em] uppercase mt-3"
            >
              Software Engineer · UI/UX Designer
            </motion.p>
          </motion.div>

          {/* Progress */}
          <div className="relative z-10 w-56 md:w-72">
            <div className="flex justify-between mb-3">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="font-body text-[10px] text-white/30 tracking-[0.3em] uppercase"
              >
                Loading
              </motion.span>
              <span className="font-display text-xs text-white/50 tabular-nums">
                {progress}%
              </span>
            </div>
            <div className="h-[1px] bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  width: `${progress}%`,
                  background: "linear-gradient(90deg, #3B82F6, #1E40AF, #60A5FA)",
                  transition: "width 0.05s",
                }}
                transition={{ duration: 0.05 }}
              />
            </div>
          </div>

          {/* Reveal wipe */}
         
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
