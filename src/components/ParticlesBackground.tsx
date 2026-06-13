import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function ParticleLayer({ color, size, speed, spread, zOffset }: {
  color: string
  size: number
  speed: number
  spread: number
  zOffset: number
}) {
  const pointsRef = useRef<THREE.Points>(null)

  const positions = useMemo(() => {
    const count = 150
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count * 3; i++) {
      arr[i] = (Math.random() - 0.5) * spread
    }
    return arr
  }, [spread])

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y -= delta * speed
      pointsRef.current.rotation.x += delta * speed * 0.3
    }
  })

  return (
    <points ref={pointsRef} position={[0, 0, zOffset]}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={size} color={color} transparent opacity={0.35} sizeAttenuation blending={THREE.AdditiveBlending} depthWrite={false} />
    </points>
  )
}

export default function ParticlesBackground() {
  return (
    <div className="fixed inset-0 min-h-screen z-[-10] pointer-events-none bg-dark-bg">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }} gl={{ antialias: false }}>
        <ParticleLayer color="#f97316" size={0.05} speed={0.04} spread={28} zOffset={0} />
        <ParticleLayer color="#3b82f6" size={0.04} speed={0.06} spread={25} zOffset={-3} />
      </Canvas>
    </div>
  )
}
