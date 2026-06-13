import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment, ContactShadows, Edges } from '@react-three/drei'
import * as THREE from 'three'

const faceMaterial = new THREE.MeshStandardMaterial({
  color: '#111111',
  roughness: 0.55,
  metalness: 0.1,
})

const innerMaterial = new THREE.MeshStandardMaterial({
  color: '#050505',
  roughness: 0.8,
  metalness: 0.05,
})

const materials = [faceMaterial, faceMaterial, faceMaterial, faceMaterial, faceMaterial, faceMaterial]

function Cubelet({ position, index, meshRefs }: any) {
  const [x, y, z] = position
  const mats = [
    x === 1 ? materials[0] : innerMaterial,
    x === -1 ? materials[1] : innerMaterial,
    y === 1 ? materials[2] : innerMaterial,
    y === -1 ? materials[3] : innerMaterial,
    z === 1 ? materials[4] : innerMaterial,
    z === -1 ? materials[5] : innerMaterial,
  ]

  return (
    <mesh
      position={position}
      ref={(el) => (meshRefs.current[index] = el)}
      castShadow
      receiveShadow
    >
      <boxGeometry args={[0.82, 0.82, 0.82]} />
      <Edges scale={1} color="#333333" lineWidth={1} />
      {mats.map((mat, idx) => (
        <primitive key={idx} attach={`material-${idx}`} object={mat} />
      ))}
    </mesh>
  )
}

type Axis = 'x' | 'y' | 'z'
type Move = { axis: Axis; layer: number; angle: number }

const SHUFFLE_MOVES: Move[] = [
  { axis: 'y', layer: 1, angle: Math.PI / 2 },
  { axis: 'x', layer: 1, angle: -Math.PI / 2 },
  { axis: 'z', layer: -1, angle: Math.PI / 2 },
  { axis: 'y', layer: 0, angle: Math.PI / 2 },
  { axis: 'x', layer: -1, angle: -Math.PI / 2 },
  { axis: 'z', layer: 1, angle: Math.PI / 2 },
  { axis: 'y', layer: -1, angle: Math.PI / 2 },
]

function RubiksGroup() {
  const groupRef = useRef<THREE.Group>(null)
  const pivotRef = useRef<THREE.Group>(null)
  const meshRefs = useRef<(THREE.Mesh | null)[]>([])

  const animState = useRef({
    step: 0,
    isReversing: false,
    progress: 0,
    activeMove: null as Move | null,
    targetMeshes: [] as THREE.Mesh[],
    idleTime: -2,
  })

  useFrame((_, delta) => {
    if (groupRef.current && !animState.current.activeMove) {
      groupRef.current.rotation.x += delta * 0.1
      groupRef.current.rotation.y += delta * 0.15
    }

    const state = animState.current

    if (!state.activeMove) {
      state.idleTime += delta

      const sequence = state.isReversing
        ? [...SHUFFLE_MOVES].reverse().map((m) => ({ ...m, angle: -m.angle }))
        : SHUFFLE_MOVES

      if (state.step < sequence.length) {
        if (state.idleTime > 0.4) {
          state.activeMove = sequence[state.step]
          state.progress = 0
          state.targetMeshes = []

          meshRefs.current.forEach((mesh) => {
            if (!mesh) return
            const pos = mesh.position[state.activeMove!.axis]
            if (Math.round(pos) === state.activeMove!.layer) {
              state.targetMeshes.push(mesh)
              if (pivotRef.current) pivotRef.current.add(mesh)
            }
          })
        }
      } else {
        if (state.idleTime > 4) {
          state.isReversing = !state.isReversing
          state.step = 0
          state.idleTime = 0
        }
      }
    }

    if (state.activeMove && pivotRef.current && groupRef.current) {
      const speed = 4
      const totalAngle = state.activeMove.angle
      const moveDelta = (speed * delta) / Math.abs(totalAngle)
      state.progress += moveDelta

      if (state.progress >= 1) {
        pivotRef.current.rotation[state.activeMove.axis] = state.activeMove.angle
        pivotRef.current.updateMatrixWorld()

        state.targetMeshes.forEach((mesh) => {
          groupRef.current!.attach(mesh)
          mesh.position.x = Math.round(mesh.position.x)
          mesh.position.y = Math.round(mesh.position.y)
          mesh.position.z = Math.round(mesh.position.z)
        })

        pivotRef.current.rotation.set(0, 0, 0)
        state.activeMove = null
        state.targetMeshes = []
        state.step++
        state.idleTime = 0
      } else {
        pivotRef.current.rotation[state.activeMove.axis] = state.progress * totalAngle
      }
    }
  })

  const cubelets = useMemo(() => {
    const arr = []
    let i = 0
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          arr.push(
            <Cubelet
              key={`${x}-${y}-${z}`}
              position={[x, y, z]}
              index={i++}
              meshRefs={meshRefs}
            />
          )
        }
      }
    }
    return arr
  }, [])

  return (
    <group ref={groupRef}>
      <group ref={pivotRef} />
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <sphereGeometry args={[1.15, 32, 32]} />
        <meshStandardMaterial color="#030303" roughness={0.9} metalness={0} />
      </mesh>
      {cubelets}
    </group>
  )
}

function DynamicLight() {
  const lightRef = useRef<THREE.PointLight>(null)
  const light2Ref = useRef<THREE.PointLight>(null)

  useFrame(({ mouse }) => {
    if (lightRef.current) {
      lightRef.current.position.x = mouse.x * 10
      lightRef.current.position.y = mouse.y * 10
    }
    if (light2Ref.current) {
      light2Ref.current.position.x = -mouse.x * 8
      light2Ref.current.position.y = -mouse.y * 8
    }
  })

  return (
    <>
      <pointLight
        ref={lightRef}
        position={[0, 0, 8]}
        intensity={10}
        color="#f97316"
        distance={30}
        decay={1.5}
      />
      <pointLight
        ref={light2Ref}
        position={[0, 0, -4]}
        intensity={6}
        color="#3b82f6"
        distance={25}
        decay={1.5}
      />
    </>
  )
}

export default function RubiksCube() {
  return (
    <Canvas
      shadows
      camera={{ position: [5, 5, 5], fov: 45 }}
      gl={{ toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.4 }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={6}
        color="#ffffff"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <directionalLight
        position={[-6, -4, -6]}
        intensity={2.5}
        color="#ffffff"
      />
      <DynamicLight />
      <Environment preset="studio" environmentIntensity={0.2} />
      <ContactShadows
        position={[0, -3, 0]}
        opacity={0.5}
        scale={10}
        blur={2}
        far={6}
      />
      <OrbitControls enableZoom={false} enablePan={false} />
      <RubiksGroup />
    </Canvas>
  )
}
