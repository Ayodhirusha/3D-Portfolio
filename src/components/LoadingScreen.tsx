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
          setTimeout(() => setPhase("reveal"), 300);
          setTimeout(() => {
            setPhase("done");
            onComplete();
          }, 1400);
          return 100;
        }
        // Accelerating progress
        const increment = prev < 30 ? 2 : prev < 60 ? 3 : prev < 85 ? 4 : 2;
        return Math.min(prev + increment, 100);
      });
    }, 40);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Background grid */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(146,63,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(146,63,255,0.3) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          {/* Spotlight */}
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute w-[600px] h-[600px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(146,63,255,0.2), transparent 70%)",
            }}
          />

          {/* Logo / Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 text-center mb-16"
          >
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight">
              <span className="text-gradient">Ayod</span>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="font-body text-muted-foreground text-sm tracking-[0.3em] uppercase mt-3"
            >
              Portfolio
            </motion.p>
          </motion.div>

          {/* Progress bar */}
          <div className="relative z-10 w-64 md:w-80">
            <div className="flex justify-between mb-2">
              <span className="font-body text-xs text-muted-foreground tracking-widest uppercase">
                Loading
              </span>
              <span className="font-display text-xs text-primary">
                {progress}%
              </span>
            </div>
            <div className="h-[2px] bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-primary rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </div>

          {/* Decorative corner lines */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="absolute top-8 left-8 w-16 h-[1px] bg-gradient-to-r from-primary/50 to-transparent origin-left"
          />
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="absolute top-8 left-8 w-[1px] h-16 bg-gradient-to-b from-primary/50 to-transparent origin-top"
          />
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="absolute bottom-8 right-8 w-16 h-[1px] bg-gradient-to-l from-primary/50 to-transparent origin-right"
          />
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="absolute bottom-8 right-8 w-[1px] h-16 bg-gradient-to-t from-primary/50 to-transparent origin-bottom"
          />

          {/* Reveal curtains */}
          {phase === "reveal" && (
            <>
              <motion.div
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                className="absolute inset-0 bg-background origin-top z-20"
              />
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
