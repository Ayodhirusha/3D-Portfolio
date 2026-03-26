import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { useRef, Suspense, useMemo } from "react";
import * as THREE from "three";

/* ── Iridescent Sphere ── */
const IridescentSphere = () => {
  const mesh = useRef<THREE.Mesh>(null);
  const materialRef = useRef<any>(null);

  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.rotation.y = clock.getElapsedTime() * 0.15;
      mesh.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.1) * 0.1;
    }
    if (materialRef.current) {
      materialRef.current.distort = 0.3 + Math.sin(clock.getElapsedTime() * 0.5) * 0.1;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.4}>
      <Sphere ref={mesh} args={[1.8, 128, 128]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          ref={materialRef}
          color="#923FFF"
          emissive="#583FFF"
          emissiveIntensity={0.3}
          roughness={0.1}
          metalness={0.9}
          distort={0.3}
          speed={2}
          envMapIntensity={1.5}
        />
      </Sphere>
    </Float>
  );
};

/* ── Outer Glass Shell ── */
const GlassShell = () => {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.rotation.y = -clock.getElapsedTime() * 0.08;
      mesh.current.rotation.z = Math.sin(clock.getElapsedTime() * 0.15) * 0.05;
    }
  });

  return (
    <Sphere ref={mesh} args={[2.2, 64, 64]}>
      <meshPhysicalMaterial
        color="#7DBFFF"
        transparent
        opacity={0.08}
        roughness={0}
        metalness={0.1}
        clearcoat={1}
        clearcoatRoughness={0}
        transmission={0.95}
        thickness={0.5}
        ior={1.5}
      />
    </Sphere>
  );
};

/* ── Orbital Rings ── */
const OrbitalRing = ({ radius, speed, tilt, color, opacity }: {
  radius: number; speed: number; tilt: number; color: string; opacity: number;
}) => {
  const ring = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (ring.current) {
      ring.current.rotation.z = clock.getElapsedTime() * speed;
    }
  });

  return (
    <mesh ref={ring} rotation={[tilt, 0, 0]}>
      <torusGeometry args={[radius, 0.006, 16, 100]} />
      <meshBasicMaterial color={color} transparent opacity={opacity} />
    </mesh>
  );
};

/* ── Orbiting Particles ── */
const Particles = () => {
  const points = useRef<THREE.Points>(null);
  const count = 80;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 3 + Math.random() * 3;
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame(({ clock }) => {
    if (points.current) {
      points.current.rotation.y = clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#923FFF" size={0.03} transparent opacity={0.6} sizeAttenuation />
    </points>
  );
};

/* ── Main Scene ── */
const Scene3D = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          {/* Lighting for iridescent effect */}
          <ambientLight intensity={0.2} />
          <directionalLight position={[5, 5, 5]} intensity={1} color="#923FFF" />
          <directionalLight position={[-5, -3, 3]} intensity={0.6} color="#7DBFFF" />
          <directionalLight position={[0, 5, -5]} intensity={0.4} color="#583FFF" />
          <pointLight position={[3, 0, 3]} intensity={0.8} color="#7DBFFF" />
          <pointLight position={[-3, 2, 2]} intensity={0.5} color="#923FFF" />
          <pointLight position={[0, -3, 4]} intensity={0.3} color="#583FFF" />

          {/* Main sphere */}
          <IridescentSphere />
          <GlassShell />

          {/* Orbital rings */}
          <OrbitalRing radius={2.8} speed={0.15} tilt={1.2} color="#923FFF" opacity={0.2} />
          <OrbitalRing radius={3.2} speed={-0.1} tilt={0.8} color="#7DBFFF" opacity={0.12} />
          <OrbitalRing radius={3.6} speed={0.07} tilt={1.5} color="#583FFF" opacity={0.08} />

          {/* Particles */}
          <Particles />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;
