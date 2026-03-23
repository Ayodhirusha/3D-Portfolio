import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, MeshTransmissionMaterial } from "@react-three/drei";
import { useRef, Suspense } from "react";
import * as THREE from "three";

const TorusKnot = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.12;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.18;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.3} floatIntensity={1.2}>
      <mesh ref={meshRef} scale={1.6}>
        <torusKnotGeometry args={[1, 0.35, 200, 32, 2, 3]} />
        <meshPhysicalMaterial
          color="#3b82f6"
          emissive="#1d4ed8"
          emissiveIntensity={0.3}
          roughness={0.1}
          metalness={0.95}
          clearcoat={1}
          clearcoatRoughness={0.05}
          envMapIntensity={1.5}
        />
      </mesh>
    </Float>
  );
};

const FloatingRings = () => {
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (ring1.current) {
      ring1.current.rotation.x = t * 0.3;
      ring1.current.rotation.z = t * 0.15;
    }
    if (ring2.current) {
      ring2.current.rotation.y = t * 0.25;
      ring2.current.rotation.x = t * 0.1;
    }
  });

  return (
    <>
      <mesh ref={ring1} scale={2.8}>
        <torusGeometry args={[1, 0.015, 16, 100]} />
        <meshBasicMaterial color="#60a5fa" transparent opacity={0.35} />
      </mesh>
      <mesh ref={ring2} scale={3.2} rotation={[1, 0.5, 0]}>
        <torusGeometry args={[1, 0.01, 16, 100]} />
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.2} />
      </mesh>
    </>
  );
};

const Particles = () => {
  const points = useRef<THREE.Points>(null);
  const count = 80;
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }

  useFrame(({ clock }) => {
    if (points.current) {
      points.current.rotation.y = clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial color="#60a5fa" size={0.025} transparent opacity={0.6} sizeAttenuation />
    </points>
  );
};

const Scene3D = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={1} color="#3b82f6" />
          <directionalLight position={[-3, -3, 2]} intensity={0.5} color="#38bdf8" />
          <pointLight position={[0, 3, 3]} intensity={0.6} color="#818cf8" />
          <TorusKnot />
          <FloatingRings />
          <Particles />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;
