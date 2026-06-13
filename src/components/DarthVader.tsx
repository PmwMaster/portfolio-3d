import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const blackMat = new THREE.MeshStandardMaterial({ color: '#080808', roughness: 0.35, metalness: 0.5 })
const armorMat = new THREE.MeshStandardMaterial({ color: '#0a0a0a', roughness: 0.25, metalness: 0.7 })
const faceMat = new THREE.MeshStandardMaterial({ color: '#111111', roughness: 0.28, metalness: 0.65 })
const clothMat = new THREE.MeshStandardMaterial({ color: '#050505', roughness: 0.8, metalness: 0.05, side: THREE.DoubleSide })
const eyeMat = new THREE.MeshStandardMaterial({ color: '#ff1a1a', emissive: '#ff0000', emissiveIntensity: 5, roughness: 0.1 })
const silverMat = new THREE.MeshStandardMaterial({ color: '#333333', roughness: 0.3, metalness: 0.8 })

function Helmet() {
  return (
    <group position={[0, 0, 0]}>
      <mesh geometry={new THREE.SphereGeometry(0.85, 48, 48, 0, Math.PI * 2, 0, Math.PI / 2.3)} material={armorMat} position={[0, 1.0, 0]} />
      <mesh geometry={new THREE.CylinderGeometry(0.88, 0.92, 0.1, 48)} material={armorMat} position={[0, 0.62, 0]} />
      <mesh geometry={new THREE.CylinderGeometry(0.92, 0.85, 0.4, 48)} material={armorMat} position={[0, 0.42, 0]} />
      <mesh geometry={new THREE.BoxGeometry(0.88, 0.55, 0.2)} material={faceMat} position={[0, 0.25, 0.78]} />
      <mesh geometry={new THREE.BoxGeometry(0.15, 0.35, 0.1)} material={faceMat} position={[0, 0.47, 0.83]} />
      <mesh geometry={new THREE.BoxGeometry(0.62, 0.44, 0.25)} material={faceMat} position={[0, -0.04, 0.82]} />
      <mesh geometry={new THREE.ConeGeometry(0.38, 0.4, 4, 1)} material={faceMat} position={[0, -0.44, 0.92]} rotation={[0.2, 0, 0]} />
      {[-0.12, -0.03, 0.06].map((y) => (
        <mesh key={y} geometry={new THREE.BoxGeometry(0.48, 0.03, 0.06)} material={silverMat} position={[0, y, 0.96]} />
      ))}
      <mesh geometry={new THREE.BoxGeometry(0.03, 0.2, 0.06)} material={silverMat} position={[0, 0, 0.98]} />
      <mesh geometry={new THREE.CylinderGeometry(0.08, 0.08, 0.04, 20)} material={eyeMat} position={[-0.18, 0.4, 0.88]} />
      <mesh geometry={new THREE.CylinderGeometry(0.08, 0.08, 0.04, 20)} material={eyeMat} position={[0.18, 0.4, 0.88]} />
    </group>
  )
}

function Torso() {
  return (
    <group position={[0, -0.9, 0]}>
      {/* Neck */}
      <mesh geometry={new THREE.CylinderGeometry(0.42, 0.46, 0.5, 32)} material={armorMat} position={[0, 0.15, 0]} />
      {/* Chest armor */}
      <mesh geometry={new THREE.BoxGeometry(0.9, 0.55, 0.4)} material={armorMat} position={[0, -0.2, 0.05]} />
      {/* Chest plate detail */}
      <mesh geometry={new THREE.BoxGeometry(0.55, 0.3, 0.08)} material={silverMat} position={[0, -0.05, 0.28]} />
      {/* Control box on chest */}
      <mesh geometry={new THREE.BoxGeometry(0.2, 0.15, 0.05)} material={silverMat} position={[0.2, -0.05, 0.28]} />
      <mesh geometry={new THREE.SphereGeometry(0.025, 8, 8)} material={eyeMat} position={[0.18, -0.03, 0.32]} />
      <mesh geometry={new THREE.SphereGeometry(0.025, 8, 8)} material={eyeMat} position={[0.22, -0.03, 0.32]} />
      <mesh geometry={new THREE.SphereGeometry(0.025, 8, 8)} material={new THREE.MeshStandardMaterial({ color: '#34c759', emissive: '#34c759', emissiveIntensity: 2 })} position={[0.2, -0.08, 0.32]} />
      {/* Belt */}
      <mesh geometry={new THREE.CylinderGeometry(0.55, 0.57, 0.08, 32)} material={armorMat} position={[0, -0.62, 0]} />
      {/* Belt buckle */}
      <mesh geometry={new THREE.BoxGeometry(0.18, 0.1, 0.06)} material={silverMat} position={[0, -0.62, 0.32]} />
      {/* Belt boxes */}
      <mesh geometry={new THREE.BoxGeometry(0.08, 0.12, 0.05)} material={silverMat} position={[-0.35, -0.64, 0.25]} />
      <mesh geometry={new THREE.BoxGeometry(0.08, 0.12, 0.05)} material={silverMat} position={[0.35, -0.64, 0.25]} />
      {/* Abdomen */}
      <mesh geometry={new THREE.CylinderGeometry(0.48, 0.53, 0.35, 32)} material={clothMat} position={[0, -0.85, 0]} />
    </group>
  )
}

function Legs() {
  return (
    <group position={[0, -1.65, 0]}>
      {/* Upper legs */}
      <mesh geometry={new THREE.CylinderGeometry(0.22, 0.24, 0.7, 16)} material={clothMat} position={[-0.2, -0.35, 0]} />
      <mesh geometry={new THREE.CylinderGeometry(0.22, 0.24, 0.7, 16)} material={clothMat} position={[0.2, -0.35, 0]} />
      {/* Knee guards */}
      <mesh geometry={new THREE.BoxGeometry(0.2, 0.08, 0.15)} material={armorMat} position={[-0.2, -0.7, 0.12]} />
      <mesh geometry={new THREE.BoxGeometry(0.2, 0.08, 0.15)} material={armorMat} position={[0.2, -0.7, 0.12]} />
      {/* Lower legs / boots */}
      <mesh geometry={new THREE.CylinderGeometry(0.18, 0.22, 0.6, 16)} material={armorMat} position={[-0.2, -1.05, 0]} />
      <mesh geometry={new THREE.CylinderGeometry(0.18, 0.22, 0.6, 16)} material={armorMat} position={[0.2, -1.05, 0]} />
      {/* Boots */}
      <mesh geometry={new THREE.BoxGeometry(0.24, 0.1, 0.35)} material={armorMat} position={[-0.2, -1.38, 0.05]} />
      <mesh geometry={new THREE.BoxGeometry(0.24, 0.1, 0.35)} material={armorMat} position={[0.2, -1.38, 0.05]} />
      {/* Groin armor */}
      <mesh geometry={new THREE.BoxGeometry(0.4, 0.25, 0.3)} material={clothMat} position={[0, -0.05, 0.05]} />
    </group>
  )
}

function Arms() {
  return (
    <group position={[0, -0.65, 0]}>
      {/* Shoulder armor */}
      <mesh geometry={new THREE.SphereGeometry(0.22, 16, 16)} material={armorMat} position={[-0.72, 0.3, 0]} scale={[1, 1.1, 0.6]} />
      <mesh geometry={new THREE.SphereGeometry(0.22, 16, 16)} material={armorMat} position={[0.72, 0.3, 0]} scale={[1, 1.1, 0.6]} />
      {/* Upper arms */}
      <mesh geometry={new THREE.CylinderGeometry(0.14, 0.16, 0.6, 16)} material={clothMat} position={[-0.65, -0.1, 0]} />
      <mesh geometry={new THREE.CylinderGeometry(0.14, 0.16, 0.6, 16)} material={clothMat} position={[0.65, -0.1, 0]} />
      {/* Elbow guards */}
      <mesh geometry={new THREE.BoxGeometry(0.15, 0.06, 0.12)} material={armorMat} position={[-0.65, -0.45, 0.05]} />
      <mesh geometry={new THREE.BoxGeometry(0.15, 0.06, 0.12)} material={armorMat} position={[0.65, -0.45, 0.05]} />
      {/* Forearms */}
      <mesh geometry={new THREE.CylinderGeometry(0.12, 0.14, 0.5, 16)} material={armorMat} position={[-0.62, -0.75, 0]} />
      <mesh geometry={new THREE.CylinderGeometry(0.12, 0.14, 0.5, 16)} material={armorMat} position={[0.62, -0.75, 0]} />
      {/* Gloves */}
      <mesh geometry={new THREE.BoxGeometry(0.16, 0.08, 0.16)} material={armorMat} position={[-0.6, -1.02, 0]} />
      <mesh geometry={new THREE.BoxGeometry(0.16, 0.08, 0.16)} material={armorMat} position={[0.58, -1.02, 0.02]} />
    </group>
  )
}

function Cape() {
  return (
    <>
      <mesh geometry={new THREE.PlaneGeometry(1.2, 2.5)} material={clothMat} position={[0, -1.8, -0.4]} rotation={[0.05, 0, 0]} />
      <mesh geometry={new THREE.PlaneGeometry(0.4, 0.8)} material={clothMat} position={[-0.55, -0.2, -0.25]} rotation={[0.3, 0.2, 0]} />
      <mesh geometry={new THREE.PlaneGeometry(0.4, 0.8)} material={clothMat} position={[0.55, -0.2, -0.25]} rotation={[0.3, -0.2, 0]} />
    </>
  )
}

function Lightsaber() {
  const bladeRef = useRef<THREE.Mesh>(null)
  const glowRef = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    const s = 1 + Math.sin(clock.elapsedTime * 8) * 0.05
    if (bladeRef.current) bladeRef.current.scale.set(1, 1, s)
    if (glowRef.current) glowRef.current.scale.set(1, 1, s)
  })

  const bladeMat = new THREE.MeshBasicMaterial({ color: '#ff2020', transparent: true, opacity: 0.85 })
  const glowMat = new THREE.MeshBasicMaterial({ color: '#ff4040', transparent: true, opacity: 0.25, blending: THREE.AdditiveBlending, depthWrite: false })

  return (
    <group position={[0.58, -1.0, 0.02]} rotation={[0.3, 0, 0.2]}>
      {/* Hilt */}
      <mesh geometry={new THREE.CylinderGeometry(0.04, 0.045, 0.25, 16)} material={silverMat} position={[0, -0.05, 0]} />
      <mesh geometry={new THREE.CylinderGeometry(0.05, 0.05, 0.06, 16)} material={blackMat} position={[0, 0.1, 0]} />
      <mesh geometry={new THREE.CylinderGeometry(0.05, 0.05, 0.06, 16)} material={blackMat} position={[0, -0.18, 0]} />
      <mesh geometry={new THREE.BoxGeometry(0.07, 0.04, 0.07)} material={silverMat} position={[0, 0.16, 0]} />
      {/* Blade */}
      <mesh ref={bladeRef} geometry={new THREE.CylinderGeometry(0.02, 0.02, 1.6, 8)} material={bladeMat} position={[0, 0.98, 0]} />
      {/* Blade glow */}
      <mesh ref={glowRef} geometry={new THREE.CylinderGeometry(0.06, 0.06, 1.6, 8)} material={glowMat} position={[0, 0.98, 0]} />
      {/* Tip glow point light */}
      <pointLight position={[0.58, 0.6, 0.02]} intensity={4} color="#ff2020" distance={4} decay={2} />
    </group>
  )
}

function VaderModel() {
  const groupRef = useRef<THREE.Group>(null)
  const targetRot = useRef({ x: 0, y: 0 })

  useFrame(({ mouse }, delta) => {
    if (groupRef.current) {
      targetRot.current.y = mouse.x * 0.4
      targetRot.current.x = -mouse.y * 0.15
      groupRef.current.rotation.y += (targetRot.current.y - groupRef.current.rotation.y) * delta * 3
      groupRef.current.rotation.x += (targetRot.current.x - groupRef.current.rotation.x) * delta * 3
    }
  })

  return (
    <group ref={groupRef} position={[0, 0.8, 0]}>
      <Helmet />
      <Torso />
      <Arms />
      <Legs />
      <Cape />
      <Lightsaber />
    </group>
  )
}

export default function DarthVader() {
  return (
    <Canvas
      camera={{ position: [0, -0.5, 4.5], fov: 38 }}
      gl={{ toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.2, alpha: false }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[4, 3, 3]} intensity={3} color="#ffffff" />
      <directionalLight position={[-3, 1, -2]} intensity={1.5} color="#4466aa" />
      <directionalLight position={[0, 0, -4]} intensity={2.5} color="#ffffff" />
      <pointLight position={[0.58, 0.6, 0.02]} intensity={5} color="#ff2020" distance={5} decay={2} />
      <pointLight position={[-2, 2, 2]} intensity={2} color="#ff8844" distance={6} />
      <VaderModel />
    </Canvas>
  )
}
