import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, Suspense, useMemo } from "react";
import * as THREE from "three";

const WaveGrid = () => {
  const meshRef = useRef<THREE.Points>(null);
  const count = 60;
  const separation = 0.35;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * count * 3);
    let idx = 0;
    for (let ix = 0; ix < count; ix++) {
      for (let iz = 0; iz < count; iz++) {
        pos[idx] = ix * separation - (count * separation) / 2;
        pos[idx + 1] = 0;
        pos[idx + 2] = iz * separation - (count * separation) / 2;
        idx += 3;
      }
    }
    return pos;
  }, []);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const posArray = meshRef.current.geometry.attributes.position.array as Float32Array;
    const time = clock.getElapsedTime();
    let idx = 0;
    for (let ix = 0; ix < count; ix++) {
      for (let iz = 0; iz < count; iz++) {
        const x = posArray[idx];
        const z = posArray[idx + 2];
        posArray[idx + 1] =
          Math.sin((x * 0.5 + time * 0.8)) * 0.3 +
          Math.cos((z * 0.5 + time * 0.6)) * 0.3;
        idx += 3;
      }
    }
    meshRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={meshRef} position={[0, -2.5, 0]} rotation={[-0.4, 0, 0]}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#3b82f6" size={0.03} transparent opacity={0.5} sizeAttenuation />
    </points>
  );
};

const FloatingOrbs = () => {
  const group = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });

  const orbs = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      pos: [
        (Math.random() - 0.5) * 14,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8,
      ] as [number, number, number],
      scale: Math.random() * 0.06 + 0.02,
      color: i % 3 === 0 ? "#60a5fa" : i % 3 === 1 ? "#38bdf8" : "#818cf8",
    }));
  }, []);

  return (
    <group ref={group}>
      {orbs.map((orb, i) => (
        <mesh key={i} position={orb.pos}>
          <sphereGeometry args={[orb.scale, 8, 8]} />
          <meshBasicMaterial color={orb.color} transparent opacity={0.7} />
        </mesh>
      ))}
    </group>
  );
};

const WaveLine = ({ yOffset, speed, color, opacity }: { yOffset: number; speed: number; color: string; opacity: number }) => {
  const lineRef = useRef<THREE.Line>(null);
  const pointCount = 120;

  const positions = useMemo(() => new Float32Array(pointCount * 3), []);

  useFrame(({ clock }) => {
    if (!lineRef.current) return;
    const geo = lineRef.current.geometry;
    const posArray = geo.attributes.position.array as Float32Array;
    const t = clock.getElapsedTime() * speed;
    for (let i = 0; i < pointCount; i++) {
      const x = (i / pointCount) * 16 - 8;
      posArray[i * 3] = x;
      posArray[i * 3 + 1] = Math.sin(x * 0.6 + t) * 0.8 + Math.cos(x * 0.3 + t * 0.7) * 0.4 + yOffset;
      posArray[i * 3 + 2] = 0;
    }
    geo.attributes.position.needsUpdate = true;
  });

  return (
    <line ref={lineRef as any}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <lineBasicMaterial color={color} transparent opacity={opacity} />
    </line>
  );
};

const Scene3D = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <WaveGrid />
          <FloatingOrbs />
          <WaveLine yOffset={2.5} speed={0.6} color="#3b82f6" opacity={0.2} />
          <WaveLine yOffset={3} speed={0.5} color="#60a5fa" opacity={0.15} />
          <WaveLine yOffset={-2} speed={0.7} color="#38bdf8" opacity={0.12} />
          <WaveLine yOffset={-2.8} speed={0.4} color="#818cf8" opacity={0.1} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;
