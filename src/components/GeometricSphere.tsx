import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function WireframeSphere({
  radius,
  detail,
  color,
  rotationSpeed,
  opacity,
}: {
  radius: number
  detail: number
  color: string
  rotationSpeed: number
  opacity: number
}) {
  const meshRef = useRef<THREE.Mesh>(null)

  const geometry = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(radius, detail)
    return geo
  }, [radius, detail])

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * rotationSpeed * 0.4
      meshRef.current.rotation.y += delta * rotationSpeed * 0.6
      meshRef.current.rotation.z += delta * rotationSpeed * 0.2
    }
  })

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshBasicMaterial color={color} wireframe transparent opacity={opacity} />
    </mesh>
  )
}

function VertexDots({
  radius,
  detail,
  color,
  size,
}: {
  radius: number
  detail: number
  color: string
  size: number
}) {
  const pointsRef = useRef<THREE.Points>(null)

  const positions = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(radius, detail)
    const pos = geo.getAttribute('position')
    return new Float32Array(pos.array)
  }, [radius, detail])

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y -= delta * 0.1
      pointsRef.current.rotation.x += delta * 0.05
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={size} color={color} transparent opacity={0.8} blending={THREE.AdditiveBlending} depthWrite={false} />
    </points>
  )
}

function Ring({ radius, color, opacity, speed }: { radius: number; color: string; opacity: number; speed: number }) {
  const ref = useRef<THREE.Mesh>(null)

  return (
    <mesh ref={ref} rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[radius, 0.015, 16, 100]} />
      <meshBasicMaterial color={color} transparent opacity={opacity} />
    </mesh>
  )
}

function SceneContent() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(({ mouse }, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1
      groupRef.current.rotation.x += delta * 0.05
      groupRef.current.rotation.x += mouse.y * 0.02
      groupRef.current.rotation.y += mouse.x * 0.02
    }
  })

  return (
    <group ref={groupRef}>
      <WireframeSphere radius={2} detail={2} color="#f97316" rotationSpeed={0.3} opacity={0.3} />
      <WireframeSphere radius={1.8} detail={3} color="#3b82f6" rotationSpeed={-0.25} opacity={0.25} />
      <WireframeSphere radius={2.2} detail={1} color="#facc15" rotationSpeed={0.15} opacity={0.2} />
      <VertexDots radius={2} detail={2} color="#f97316" size={0.04} />
      <WireframeSphere radius={1.4} detail={4} color="#ffffff" rotationSpeed={0.4} opacity={0.08} />
      <Ring radius={2.3} color="#f97316" opacity={0.1} speed={0.05} />
      <Ring radius={1.5} color="#3b82f6" opacity={0.08} speed={-0.03} />
    </group>
  )
}

export default function GeometricSphere() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }} gl={{ antialias: true }}>
      <SceneContent />
    </Canvas>
  )
}
