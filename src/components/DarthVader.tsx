import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { ContactShadows } from '@react-three/drei'
import * as THREE from 'three'

function Helmet() {
  const domeMat = new THREE.MeshStandardMaterial({ color: '#0d0d0d', roughness: 0.35, metalness: 0.5 })
  const darkMat = new THREE.MeshStandardMaterial({ color: '#0a0a0a', roughness: 0.3, metalness: 0.55 })
  const faceMat = new THREE.MeshStandardMaterial({ color: '#111111', roughness: 0.3, metalness: 0.7 })
  const grillMat = new THREE.MeshStandardMaterial({ color: '#222222', roughness: 0.5, metalness: 0.4 })
  const eyeMat = new THREE.MeshStandardMaterial({ color: '#ff1a1a', emissive: '#ff0000', emissiveIntensity: 4, roughness: 0.1 })
  const glowMat = new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.4 })

  return (
    <group>
      {/* Dome top */}
      <mesh geometry={new THREE.SphereGeometry(0.95, 48, 48, 0, Math.PI * 2, 0, Math.PI / 2.4)} material={domeMat} position={[0, 1.15, 0]} />

      {/* Dome band */}
      <mesh geometry={new THREE.CylinderGeometry(1.0, 1.05, 0.12, 48)} material={darkMat} position={[0, 0.72, 0]} />

      {/* Dome flare */}
      <mesh geometry={new THREE.CylinderGeometry(1.05, 1.0, 0.4, 48)} material={darkMat} position={[0, 0.52, 0]} />

      {/* Face cheek area */}
      <mesh geometry={new THREE.BoxGeometry(1.0, 0.65, 0.25)} material={faceMat} position={[0, 0.3, 0.9]} />

      {/* Nose ridge */}
      <mesh geometry={new THREE.BoxGeometry(0.18, 0.4, 0.15)} material={faceMat} position={[0, 0.55, 0.95]} />

      {/* Lower jaw */}
      <mesh geometry={new THREE.BoxGeometry(0.7, 0.5, 0.3)} material={faceMat} position={[0, -0.05, 0.95]} />

      {/* Chin */}
      <mesh geometry={new THREE.ConeGeometry(0.42, 0.45, 4, 1)} material={faceMat} position={[0, -0.5, 1.05]} rotation={[0.2, 0, 0]} />

      {/* Mouth grill bars */}
      <mesh geometry={new THREE.BoxGeometry(0.55, 0.04, 0.08)} material={grillMat} position={[0, -0.15, 1.1]} />
      <mesh geometry={new THREE.BoxGeometry(0.55, 0.04, 0.08)} material={grillMat} position={[0, -0.05, 1.1]} />
      <mesh geometry={new THREE.BoxGeometry(0.55, 0.04, 0.08)} material={grillMat} position={[0, 0.05, 1.1]} />

      {/* Mouth vertical bar */}
      <mesh geometry={new THREE.BoxGeometry(0.04, 0.25, 0.08)} material={grillMat} position={[0, 0, 1.12]} />

      {/* Left eye */}
      <mesh geometry={new THREE.CylinderGeometry(0.1, 0.1, 0.06, 24)} material={eyeMat} position={[-0.2, 0.48, 1.02]} />
      <mesh geometry={new THREE.SphereGeometry(0.08, 16, 16)} material={glowMat} position={[-0.2, 0.48, 1.05]} />

      {/* Right eye */}
      <mesh geometry={new THREE.CylinderGeometry(0.1, 0.1, 0.06, 24)} material={eyeMat} position={[0.2, 0.48, 1.02]} />
      <mesh geometry={new THREE.SphereGeometry(0.08, 16, 16)} material={glowMat} position={[0.2, 0.48, 1.05]} />

      {/* Neck */}
      <mesh geometry={new THREE.CylinderGeometry(0.5, 0.55, 0.8, 32)} material={darkMat} position={[0, -0.9, 0]} />

      {/* Neck ring */}
      <mesh geometry={new THREE.TorusGeometry(0.55, 0.08, 16, 32)} material={faceMat} position={[0, -1.3, 0]} />

      {/* Shoulders */}
      <mesh geometry={new THREE.CylinderGeometry(0.4, 0.8, 0.3, 32)} material={darkMat} position={[0, -1.55, 0]} />
    </group>
  )
}

function SaberGlow() {
  const lightRef = useRef<THREE.PointLight>(null)

  useFrame(({ clock }) => {
    if (lightRef.current) {
      lightRef.current.intensity = 5 + Math.sin(clock.elapsedTime * 4) * 2
    }
  })

  return <pointLight ref={lightRef} position={[2.5, 0.5, -1]} intensity={5} color="#ff2020" distance={10} decay={2} />
}

function VaderModel() {
  const groupRef = useRef<THREE.Group>(null)
  const targetRot = useRef({ x: 0, y: 0 })

  useFrame(({ mouse }, delta) => {
    if (groupRef.current) {
      targetRot.current.y = mouse.x * 0.5
      targetRot.current.x = mouse.y * 0.25

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
      camera={{ position: [0, 0.3, 3.8], fov: 40 }}
      gl={{ toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.1 }}
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 3, 3]} intensity={2.5} color="#ffffff" />
      <directionalLight position={[-3, 2, -2]} intensity={1.0} color="#4466aa" />
      <directionalLight position={[0, -1, -3]} intensity={0.6} color="#332244" />
      <SaberGlow />
      <pointLight position={[-2, 1, 2]} intensity={2} color="#ff6644" distance={6} />
      <ContactShadows position={[0, -1.8, 0]} opacity={0.4} scale={5} blur={2} far={4} />
      <VaderModel />
    </Canvas>
  )
}
