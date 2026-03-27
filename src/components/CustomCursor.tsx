import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 200 };
  const ringX = useSpring(cursorX, springConfig);
  const ringY = useSpring(cursorY, springConfig);

  const isHovering = useRef(false);
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX - 20);
      cursorY.set(e.clientY - 20);
      dotX.set(e.clientX - 4);
      dotY.set(e.clientY - 4);
    };

    const addHover = () => {
      isHovering.current = true;
      if (ringRef.current) {
        ringRef.current.style.transform = "scale(1.8)";
        ringRef.current.style.borderColor = "hsl(261 100% 62% / 0.8)";
        ringRef.current.style.background = "hsl(261 100% 62% / 0.05)";
      }
      if (dotRef.current) dotRef.current.style.transform = "scale(0)";
    };

    const removeHover = () => {
      isHovering.current = false;
      if (ringRef.current) {
        ringRef.current.style.transform = "scale(1)";
        ringRef.current.style.borderColor = "hsl(261 100% 62% / 0.4)";
        ringRef.current.style.background = "transparent";
      }
      if (dotRef.current) dotRef.current.style.transform = "scale(1)";
    };

    window.addEventListener("mousemove", move);

    const interactiveElements = document.querySelectorAll("a, button, [role='button'], input, textarea, select");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, [cursorX, cursorY, dotX, dotY]);

  return (
    <>
      <motion.div
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-primary/40 pointer-events-none z-[99999] hidden lg:block"
        style={{
          x: ringX,
          y: ringY,
          transition: "transform 0.2s ease, border-color 0.3s ease, background 0.3s ease",
        }}
      />
      <motion.div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-primary pointer-events-none z-[99999] hidden lg:block"
        style={{
          x: dotX,
          y: dotY,
          boxShadow: "0 0 10px hsl(261 100% 62% / 0.6)",
          transition: "transform 0.15s ease",
        }}
      />
    </>
  );
};

export default CustomCursor;
