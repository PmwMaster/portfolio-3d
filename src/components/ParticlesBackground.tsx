import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null)

  // Number of particles
  const count = 400
  const positions = new Float32Array(count * 3)

  for (let i = 0; i < count * 3; i++) {
    // Spread between -15 and 15 on X and Y, and Z
    positions[i] = (Math.random() - 0.5) * 30
  }

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y -= delta * 0.05
      pointsRef.current.rotation.x -= delta * 0.02
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.06} color="#64748b" transparent opacity={0.4} sizeAttenuation />
    </points>
  )
}

export default function ParticlesBackground() {
  return (
    <div className="fixed inset-0 min-h-screen z-[-10] pointer-events-none bg-dark-bg">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <ParticleField />
      </Canvas>
    </div>
  )
}
