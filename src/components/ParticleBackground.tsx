import { useCallback, useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  type: "dot" | "code" | "ring";
  char?: string;
  pulseSpeed: number;
  pulsePhase: number;
}

const COLORS = [
  "rgba(30, 64, 175,",    // deep blue
  "rgba(59, 130, 246,",   // blue
  "rgba(96, 165, 250,",   // light blue
  "rgba(125, 191, 255,",  // sky blue
  "rgba(37, 99, 235,",    // vivid blue
];

const CODE_CHARS = ["{", "}", "<", ">", "/", ";", "=", "(", ")", "[]", "//", "=>", "< />", "{ }", "&&", "||", "01", "10"];

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mouse = useRef({ x: -1000, y: -1000 });
  const animationId = useRef<number>(0);
  const time = useRef(0);

  const createParticles = useCallback((width: number, height: number) => {
    const count = Math.min(250, Math.floor((width * height) / 5000));
    const result: Particle[] = [];

    for (let i = 0; i < count; i++) {
      const rand = Math.random();
      const type = rand > 0.65 ? "code" : rand > 0.1 ? "dot" : "ring";
      result.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.25 - 0.15,
        size: type === "dot" ? Math.random() * 3 + 1 : type === "ring" ? Math.random() * 8 + 6 : Math.random() * 11 + 9,
        opacity: Math.random() * 0.5 + 0.15,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        type,
        char: type === "code" ? CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)] : undefined,
        pulseSpeed: Math.random() * 0.02 + 0.005,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }
    return result;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
      particles.current = createParticles(canvas.width, canvas.height);
    };

    resize();
    window.addEventListener("resize", resize);

    const handleMouse = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY + window.scrollY };
    };
    window.addEventListener("mousemove", handleMouse);

    const draw = () => {
      time.current += 1;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -50) p.x = canvas.width + 50;
        if (p.x > canvas.width + 50) p.x = -50;
        if (p.y < -50) p.y = canvas.height + 50;
        if (p.y > canvas.height + 50) p.y = -50;

        const pulse = Math.sin(time.current * p.pulseSpeed + p.pulsePhase) * 0.3 + 0.7;
        const currentOpacity = p.opacity * pulse;

        const dx = p.x - mouse.current.x;
        const dy = p.y - mouse.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200) {
          const force = (200 - dist) / 200;
          p.x += (dx / dist) * force * 1.2;
          p.y += (dy / dist) * force * 1.2;
        }

        if (p.type === "dot") {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color} ${currentOpacity})`;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color} ${currentOpacity * 0.12})`;
          ctx.fill();
        } else if (p.type === "ring") {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.strokeStyle = `${p.color} ${currentOpacity * 0.4})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        } else {
          ctx.font = `${p.size}px 'Space Grotesk', monospace`;
          ctx.fillStyle = `${p.color} ${currentOpacity * 0.5})`;
          ctx.fillText(p.char || "{", p.x, p.y);
        }
      });

      // Connection lines - blue themed
      for (let i = 0; i < particles.current.length; i++) {
        for (let j = i + 1; j < particles.current.length; j++) {
          const a = particles.current[i];
          const b = particles.current[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.08 * (1 - dist / 140)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animationId.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, [createParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.85 }}
    />
  );
};

export default ParticleBackground;
