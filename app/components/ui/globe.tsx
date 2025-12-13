"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

export default function Globe() {
  return (
    <div
      className="
      fixed 
      right-0 
      top-1/4 
      w-[450px] 
      h-[450px] 
      z-0 
      pointer-events-none
      "
    >
      <Canvas camera={{ position: [0, 0, 4] }}>
        {/* Soft light */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* 3D Sphere */}
        <Sphere args={[1, 64, 64]} scale={1.4}>
          <MeshDistortMaterial
            color="#7A5CFB"
            roughness={0.2}
            metalness={0.9}
            distort={0.3}
            speed={1.5}
          />
        </Sphere>

        {/* Smooth endless rotation */}
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
      </Canvas>
    </div>
  );
}
