import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Text3D, Center, RoundedBox } from "@react-three/drei";
import { useRef, Suspense, useMemo } from "react";
import * as THREE from "three";

/* ── Floating Monitor / Screen ── */
const FloatingScreen = () => {
  const group = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.3) * 0.15;
      group.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.2) * 0.05;
    }
  });

  return (
    <Float speed={1.4} rotationIntensity={0.15} floatIntensity={0.8}>
      <group ref={group} position={[0, 0.2, 0]}>
        {/* Screen bezel */}
        <RoundedBox args={[3, 2, 0.08]} radius={0.06} smoothness={4}>
          <meshPhysicalMaterial
            color="#1e293b"
            roughness={0.3}
            metalness={0.8}
            clearcoat={1}
          />
        </RoundedBox>
        {/* Screen display */}
        <mesh position={[0, 0, 0.045]}>
          <planeGeometry args={[2.7, 1.7]} />
          <meshPhysicalMaterial
            color="#0f172a"
            emissive="#3b82f6"
            emissiveIntensity={0.08}
            roughness={0}
            metalness={0.2}
          />
        </mesh>
        {/* Code lines on screen */}
        {[0.55, 0.3, 0.05, -0.2, -0.45].map((y, i) => (
          <mesh key={i} position={[-0.3 + (i % 3) * 0.15, y, 0.06]}>
            <planeGeometry args={[1.2 - (i % 3) * 0.3, 0.06]} />
            <meshBasicMaterial
              color={i % 2 === 0 ? "#60a5fa" : "#38bdf8"}
              transparent
              opacity={0.5 + (i % 3) * 0.15}
            />
          </mesh>
        ))}
        {/* Stand */}
        <mesh position={[0, -1.2, -0.1]}>
          <cylinderGeometry args={[0.04, 0.06, 0.5, 8]} />
          <meshPhysicalMaterial color="#334155" metalness={0.9} roughness={0.2} />
        </mesh>
        <mesh position={[0, -1.45, -0.1]} rotation={[-Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.4, 0.4, 0.02, 16]} />
          <meshPhysicalMaterial color="#334155" metalness={0.9} roughness={0.2} />
        </mesh>
      </group>
    </Float>
  );
};

/* ── Floating Code Brackets ── */
const CodeBracket = ({ position, rotation, char, color }: { position: [number, number, number]; rotation: [number, number, number]; char: string; color: string }) => {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * 0.8 + position[0]) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={1}>
      <mesh ref={mesh} position={position} rotation={rotation}>
        <boxGeometry args={[0.08, 0.5, 0.08]} />
        <meshPhysicalMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.4}
          roughness={0.2}
          metalness={0.6}
          transparent
          opacity={0.8}
        />
      </mesh>
    </Float>
  );
};

/* ── Floating UI Cards ── */
const UICard = ({ position, size, color, delay }: { position: [number, number, number]; size: [number, number]; color: string; delay: number }) => {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * 0.6 + delay) * 0.15;
      mesh.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.3 + delay) * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={mesh} position={position}>
        <RoundedBox args={[size[0], size[1], 0.03]} radius={0.02} smoothness={4}>
          <meshPhysicalMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.15}
            roughness={0.4}
            metalness={0.3}
            transparent
            opacity={0.6}
          />
        </RoundedBox>
        {/* Mini UI elements inside card */}
        <mesh position={[0, size[1] * 0.25, 0.02]}>
          <planeGeometry args={[size[0] * 0.7, 0.03]} />
          <meshBasicMaterial color="#93c5fd" transparent opacity={0.5} />
        </mesh>
        <mesh position={[-size[0] * 0.15, 0, 0.02]}>
          <planeGeometry args={[size[0] * 0.4, 0.03]} />
          <meshBasicMaterial color="#60a5fa" transparent opacity={0.4} />
        </mesh>
      </group>
    </Float>
  );
};

/* ── Orbiting Particles ── */
const Particles = () => {
  const points = useRef<THREE.Points>(null);
  const count = 100;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return pos;
  }, []);

  useFrame(({ clock }) => {
    if (points.current) {
      points.current.rotation.y = clock.getElapsedTime() * 0.015;
      points.current.rotation.x = clock.getElapsedTime() * 0.008;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#60a5fa" size={0.025} transparent opacity={0.5} sizeAttenuation />
    </points>
  );
};

/* ── Floating Rings ── */
const OrbitalRing = ({ radius, speed, color, opacity }: { radius: number; speed: number; color: string; opacity: number }) => {
  const ring = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (ring.current) {
      ring.current.rotation.x = clock.getElapsedTime() * speed;
      ring.current.rotation.z = clock.getElapsedTime() * speed * 0.5;
    }
  });

  return (
    <mesh ref={ring}>
      <torusGeometry args={[radius, 0.008, 16, 100]} />
      <meshBasicMaterial color={color} transparent opacity={opacity} />
    </mesh>
  );
};

/* ── Main Scene ── */
const Scene3D = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <directionalLight position={[5, 5, 5]} intensity={0.8} color="#3b82f6" />
          <directionalLight position={[-3, -3, 2]} intensity={0.4} color="#38bdf8" />
          <pointLight position={[0, 3, 3]} intensity={0.5} color="#818cf8" />
          <pointLight position={[-2, -2, 4]} intensity={0.3} color="#60a5fa" />

          {/* Central monitor */}
          <FloatingScreen />

          {/* Floating UI cards around the monitor */}
          <UICard position={[-2.2, 1.2, -0.5]} size={[0.8, 0.5]} color="#3b82f6" delay={0} />
          <UICard position={[2.3, 0.8, -0.8]} size={[0.6, 0.9]} color="#6366f1" delay={1.5} />
          <UICard position={[-2, -1, -0.3]} size={[0.7, 0.4]} color="#2563eb" delay={3} />
          <UICard position={[2.1, -0.9, -0.6]} size={[0.5, 0.6]} color="#818cf8" delay={2} />

          {/* Code bracket elements */}
          <CodeBracket position={[-1.8, 0.5, 1]} rotation={[0, 0.3, 0.2]} char="<" color="#60a5fa" />
          <CodeBracket position={[1.9, -0.3, 0.8]} rotation={[0, -0.3, -0.15]} char=">" color="#38bdf8" />
          <CodeBracket position={[1.5, 1.5, -1]} rotation={[0.2, 0, 0.3]} char="{" color="#818cf8" />
          <CodeBracket position={[-1.5, -1.2, -0.8]} rotation={[-0.1, 0.2, -0.2]} char="}" color="#93c5fd" />

          {/* Orbital rings */}
          <OrbitalRing radius={3.5} speed={0.12} color="#3b82f6" opacity={0.15} />
          <OrbitalRing radius={4} speed={0.08} color="#60a5fa" opacity={0.1} />

          {/* Particles */}
          <Particles />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;
