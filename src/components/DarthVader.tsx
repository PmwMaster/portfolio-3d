import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, ContactShadows } from '@react-three/drei'
import * as THREE from 'three'

function Helmet() {
  return (
    <group>
      {/* Dome top */}
      <mesh position={[0, 1.15, 0]} castShadow>
        <sphereGeometry args={[0.95, 48, 48, 0, Math.PI * 2, 0, Math.PI / 2.4]} />
        <meshStandardMaterial color="#0d0d0d" roughness={0.35} metalness={0.5} />
      </mesh>

      {/* Dome side band */}
      <mesh position={[0, 0.72, 0]} castShadow>
        <cylinderGeometry args={[1.0, 1.05, 0.12, 48]} />
        <meshStandardMaterial color="#0a0a0a" roughness={0.25} metalness={0.6} />
      </mesh>

      {/* Dome lower flare */}
      <mesh position={[0, 0.52, 0]} castShadow>
        <cylinderGeometry args={[1.05, 1.0, 0.4, 48]} />
        <meshStandardMaterial color="#0a0a0a" roughness={0.3} metalness={0.55} />
      </mesh>

      {/* Face mask - upper cheek area */}
      <mesh position={[0, 0.3, 0.9]} castShadow>
        <boxGeometry args={[1.0, 0.65, 0.25]} />
        <meshStandardMaterial color="#111111" roughness={0.3} metalness={0.7} />
      </mesh>

      {/* Face mask - nose ridge */}
      <mesh position={[0, 0.55, 0.95]} castShadow>
        <boxGeometry args={[0.18, 0.4, 0.15]} />
        <meshStandardMaterial color="#0d0d0d" roughness={0.3} metalness={0.6} />
      </mesh>

      {/* Face mask - lower jaw */}
      <mesh position={[0, -0.05, 0.95]} castShadow>
        <boxGeometry args={[0.7, 0.5, 0.3]} />
        <meshStandardMaterial color="#111111" roughness={0.3} metalness={0.7} />
      </mesh>

      {/* Triangular chin piece */}
      <mesh position={[0, -0.5, 1.05]} rotation={[0.2, 0, 0]} castShadow>
        <coneGeometry args={[0.42, 0.45, 4, 1]} />
        <meshStandardMaterial color="#0d0d0d" roughness={0.3} metalness={0.65} />
      </mesh>

      {/* Mouth grill - horizontal bars */}
      {[-0.15, -0.05, 0.05].map((y) => (
        <mesh key={y} position={[0, y, 1.1]} castShadow>
          <boxGeometry args={[0.55, 0.04, 0.08]} />
          <meshStandardMaterial color="#222222" roughness={0.5} metalness={0.4} />
        </mesh>
      ))}

      {/* Mouth grill - vertical bar */}
      <mesh position={[0, 0, 1.12]} castShadow>
        <boxGeometry args={[0.04, 0.25, 0.08]} />
        <meshStandardMaterial color="#222222" roughness={0.5} metalness={0.4} />
      </mesh>

      {/* Left eye socket */}
      <mesh position={[-0.2, 0.48, 1.02]}>
        <cylinderGeometry args={[0.1, 0.1, 0.06, 24]} />
        <meshStandardMaterial color="#ff1a1a" emissive="#ff0000" emissiveIntensity={3} roughness={0.1} />
      </mesh>
      <mesh position={[-0.2, 0.48, 1.05]} scale={[0.8, 0.8, 0.1]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.5} />
      </mesh>

      {/* Right eye socket */}
      <mesh position={[0.2, 0.48, 1.02]}>
        <cylinderGeometry args={[0.1, 0.1, 0.06, 24]} />
        <meshStandardMaterial color="#ff1a1a" emissive="#ff0000" emissiveIntensity={3} roughness={0.1} />
      </mesh>
      <mesh position={[0.2, 0.48, 1.05]} scale={[0.8, 0.8, 0.1]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.5} />
      </mesh>

      {/* Neck */}
      <mesh position={[0, -0.9, 0]} castShadow>
        <cylinderGeometry args={[0.5, 0.55, 0.8, 32]} />
        <meshStandardMaterial color="#0a0a0a" roughness={0.45} metalness={0.3} />
      </mesh>

      {/* Neck base ring */}
      <mesh position={[0, -1.3, 0]} castShadow>
        <torusGeometry args={[0.55, 0.08, 16, 32]} />
        <meshStandardMaterial color="#111111" roughness={0.3} metalness={0.6} />
      </mesh>

      {/* Shoulder top */}
      <mesh position={[0, -1.55, 0]} castShadow>
        <cylinderGeometry args={[0.4, 0.8, 0.3, 32]} />
        <meshStandardMaterial color="#0a0a0a" roughness={0.4} metalness={0.4} />
      </mesh>
    </group>
  )
}

function SaberGlow() {
  const lightRef = useRef<THREE.PointLight>(null)

  useFrame(({ clock }) => {
    if (lightRef.current) {
      lightRef.current.intensity = 4 + Math.sin(clock.elapsedTime * 3) * 1.5
    }
  })

  return (
    <pointLight
      ref={lightRef}
      position={[2, 0.5, -1]}
      intensity={4}
      color="#ff2020"
      distance={8}
      decay={2}
    />
  )
}

function VaderModel() {
  const groupRef = useRef<THREE.Group>(null)
  const targetRot = useRef({ x: 0, y: 0 })

  useFrame(({ mouse }, delta) => {
    if (groupRef.current) {
      targetRot.current.y = mouse.x * 0.6
      targetRot.current.x = mouse.y * 0.3

      groupRef.current.rotation.y += (targetRot.current.y - groupRef.current.rotation.y) * delta * 3
      groupRef.current.rotation.x += (targetRot.current.x - groupRef.current.rotation.x) * delta * 3
    }
  })

  return (
    <group ref={groupRef} position={[0, 0.3, 0]}>
      <Helmet />
    </group>
  )
}

export default function DarthVader() {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0.3, 3.8], fov: 40 }}
      gl={{ toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.0 }}
    >
      <ambientLight intensity={0.15} />
      <directionalLight
        position={[5, 3, 3]}
        intensity={2}
        color="#ffffff"
        castShadow
        shadow-mapSize-width={512}
        shadow-mapSize-height={512}
      />
      <directionalLight position={[-3, 2, -2]} intensity={0.8} color="#4466aa" />
      <directionalLight position={[0, -1, -3]} intensity={0.5} color="#332244" />
      <SaberGlow />
      <pointLight position={[-2, 1, 2]} intensity={1.5} color="#ff6644" distance={6} />
      <Environment preset="city" environmentIntensity={0.2} />
      <ContactShadows position={[0, -1.8, 0]} opacity={0.4} scale={6} blur={2} far={4} />
      <VaderModel />
    </Canvas>
  )
}
