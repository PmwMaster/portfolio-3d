import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Helmet() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.25
    }
  })

  return (
    <group ref={groupRef}>
      <mesh position={[0, 1.1, 0]}>
        <sphereGeometry args={[0.9, 48, 48, 0, Math.PI * 2, 0, Math.PI / 2.3]} />
        <meshStandardMaterial color="#0d0d0d" roughness={0.3} metalness={0.5} />
      </mesh>
      <mesh position={[0, 0.68, 0]}>
        <cylinderGeometry args={[0.98, 1.02, 0.1, 48]} />
        <meshStandardMaterial color="#080808" roughness={0.25} metalness={0.6} />
      </mesh>
      <mesh position={[0, 0.48, 0]}>
        <cylinderGeometry args={[1.02, 0.95, 0.45, 48]} />
        <meshStandardMaterial color="#080808" roughness={0.25} metalness={0.6} />
      </mesh>
      <mesh position={[0, 0.28, 0.85]}>
        <boxGeometry args={[0.95, 0.6, 0.22]} />
        <meshStandardMaterial color="#111111" roughness={0.28} metalness={0.7} />
      </mesh>
      <mesh position={[0, 0.52, 0.92]}>
        <boxGeometry args={[0.16, 0.38, 0.12]} />
        <meshStandardMaterial color="#0d0d0d" roughness={0.28} metalness={0.6} />
      </mesh>
      <mesh position={[0, -0.05, 0.9]}>
        <boxGeometry args={[0.68, 0.48, 0.28]} />
        <meshStandardMaterial color="#111111" roughness={0.28} metalness={0.7} />
      </mesh>
      <mesh position={[0, -0.48, 1.0]} rotation={[0.2, 0, 0]}>
        <coneGeometry args={[0.4, 0.42, 4, 1]} />
        <meshStandardMaterial color="#0d0d0d" roughness={0.28} metalness={0.65} />
      </mesh>
      {[-0.13, -0.04, 0.05].map((y) => (
        <mesh key={y} position={[0, y, 1.05]}>
          <boxGeometry args={[0.5, 0.035, 0.07]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.5} metalness={0.4} />
        </mesh>
      ))}
      <mesh position={[0, 0, 1.07]}>
        <boxGeometry args={[0.035, 0.22, 0.07]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.5} metalness={0.4} />
      </mesh>
      <mesh position={[-0.19, 0.44, 0.97]}>
        <cylinderGeometry args={[0.09, 0.09, 0.05, 20]} />
        <meshStandardMaterial color="#ff1a1a" emissive="#ff0000" emissiveIntensity={5} roughness={0.1} />
      </mesh>
      <mesh position={[0.19, 0.44, 0.97]}>
        <cylinderGeometry args={[0.09, 0.09, 0.05, 20]} />
        <meshStandardMaterial color="#ff1a1a" emissive="#ff0000" emissiveIntensity={5} roughness={0.1} />
      </mesh>
      <mesh position={[0, -0.85, 0]}>
        <cylinderGeometry args={[0.48, 0.52, 0.75, 32]} />
        <meshStandardMaterial color="#080808" roughness={0.4} metalness={0.3} />
      </mesh>
      <mesh position={[0, -1.22, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.52, 0.07, 12, 32]} />
        <meshStandardMaterial color="#111111" roughness={0.3} metalness={0.6} />
      </mesh>
      <mesh position={[0, -1.48, 0]}>
        <cylinderGeometry args={[0.38, 0.75, 0.28, 32]} />
        <meshStandardMaterial color="#080808" roughness={0.4} metalness={0.4} />
      </mesh>
    </group>
  )
}

export default function DarthVader() {
  return (
    <Canvas
      camera={{ position: [0, 0.2, 3.5], fov: 42 }}
      gl={{
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.4,
        alpha: false,
      }}
      style={{ background: '#050505' }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 3, 3]} intensity={4} color="#ffffff" />
      <directionalLight position={[-3, 1, -2]} intensity={2} color="#4466aa" />
      <directionalLight position={[0, 0, -4]} intensity={3} color="#ffffff" />
      <pointLight position={[2, 0.5, -1]} intensity={8} color="#ff2020" distance={8} decay={2} />
      <pointLight position={[-2, 2, 2]} intensity={3} color="#ff8844" distance={7} />
      <Helmet />
    </Canvas>
  )
}
