import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

const Node = ({ position, color, size = 0.3 }: { position: [number, number, number]; color: string; size?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <icosahedronGeometry args={[size, 1]} />
        <MeshDistortMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.5}
          roughness={0.2}
          metalness={0.8}
          distort={0.2}
          speed={2}
        />
      </mesh>
    </Float>
  );
};

const ConnectionLine = ({ start, end, color }: { start: [number, number, number]; end: [number, number, number]; color: string }) => {
  const ref = useRef<THREE.Line | null>(null);
  
  const points = useMemo(() => {
    const curve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(...start),
      new THREE.Vector3((start[0] + end[0]) / 2, (start[1] + end[1]) / 2 + 0.5, (start[2] + end[2]) / 2),
      new THREE.Vector3(...end)
    );
    return curve.getPoints(20);
  }, [start, end]);

  const geometry = useMemo(() => new THREE.BufferGeometry().setFromPoints(points), [points]);
  const material = useMemo(() => new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.5 }), [color]);

  useFrame((state) => {
    if (ref.current) {
      const mat = ref.current.material as THREE.LineBasicMaterial;
      mat.opacity = 0.3 + Math.sin(state.clock.elapsedTime * 2) * 0.2;
    }
  });

  return (
    <primitive object={new THREE.Line(geometry, material)} ref={ref} />
  );
};

const DataParticles = () => {
  const particlesRef = useRef<THREE.Points>(null);
  const count = 100;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 6;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#007BFF"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

const Scene = () => {
  // Node positions for the connected network
  const nodes: { pos: [number, number, number]; color: string; size: number }[] = [
    { pos: [0, 0, 0], color: "#007BFF", size: 0.5 }, // Center - Blue (main hub)
    { pos: [-2, 1, -1], color: "#007BFF", size: 0.35 }, // AI - Blue
    { pos: [2, 0.5, -0.5], color: "#FF3333", size: 0.35 }, // Cloud - Red
    { pos: [0, -1.5, 0.5], color: "#28A745", size: 0.35 }, // Academy - Green
    { pos: [-1.5, -0.5, 1], color: "#FFC107", size: 0.25 }, // Sub node - Yellow
    { pos: [1.5, 1.5, 0], color: "#007BFF", size: 0.2 }, // Sub node
  ];

  // Connection pairs (indices)
  const connections: [number, number, string][] = [
    [0, 1, "#007BFF"],
    [0, 2, "#FF3333"],
    [0, 3, "#28A745"],
    [0, 4, "#FFC107"],
    [0, 5, "#007BFF"],
    [1, 4, "#007BFF"],
    [2, 5, "#FF3333"],
    [3, 4, "#28A745"],
  ];

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#007BFF" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#FF3333" />
      <pointLight position={[0, -10, 5]} intensity={0.5} color="#28A745" />

      {/* Nodes */}
      {nodes.map((node, i) => (
        <Node key={i} position={node.pos} color={node.color} size={node.size} />
      ))}

      {/* Connections */}
      {connections.map(([startIdx, endIdx, color], i) => (
        <ConnectionLine
          key={i}
          start={nodes[startIdx].pos}
          end={nodes[endIdx].pos}
          color={color}
        />
      ))}

      {/* Floating particles */}
      <DataParticles />
    </>
  );
};

const NexusScene = () => {
  return (
    <div className="absolute inset-0 opacity-80">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default NexusScene;
