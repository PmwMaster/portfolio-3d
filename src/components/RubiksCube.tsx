import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

const materials = [
  new THREE.MeshStandardMaterial({ color: '#ff3b30', roughness: 0.1 }), // Right
  new THREE.MeshStandardMaterial({ color: '#ff9500', roughness: 0.1 }), // Left
  new THREE.MeshStandardMaterial({ color: '#facc15', roughness: 0.1 }), // Top
  new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.1 }), // Bottom
  new THREE.MeshStandardMaterial({ color: '#34c759', roughness: 0.1 }), // Front
  new THREE.MeshStandardMaterial({ color: '#007aff', roughness: 0.1 }), // Back
]
const blackMaterial = new THREE.MeshStandardMaterial({ color: '#111111', roughness: 0.8 })

function Cubelet({ position, index, meshRefs }: any) {
  const [x, y, z] = position
  const mats = [
    x === 1 ? materials[0] : blackMaterial,
    x === -1 ? materials[1] : blackMaterial,
    y === 1 ? materials[2] : blackMaterial,
    y === -1 ? materials[3] : blackMaterial,
    z === 1 ? materials[4] : blackMaterial,
    z === -1 ? materials[5] : blackMaterial,
  ]

  return (
    <mesh position={position} ref={(el) => (meshRefs.current[index] = el)}>
      <boxGeometry args={[0.96, 0.96, 0.96]} />
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
    idleTime: -2 // initial delay before starting
  })

  useFrame((_, delta) => {
    // Idle rotation
    if (groupRef.current && !animState.current.activeMove) {
      groupRef.current.rotation.x += delta * 0.1
      groupRef.current.rotation.y += delta * 0.15
    }

    const state = animState.current

    if (!state.activeMove) {
      state.idleTime += delta
      
      const sequence = state.isReversing 
        ? [...SHUFFLE_MOVES].reverse().map(m => ({ ...m, angle: -m.angle }))
        : SHUFFLE_MOVES

      if (state.step < sequence.length) {
         if (state.idleTime > 0.4) {
            state.activeMove = sequence[state.step]
            state.progress = 0
            state.targetMeshes = []

            meshRefs.current.forEach(mesh => {
              if (!mesh) return
              const pos = mesh.position[state.activeMove!.axis]
              if (Math.round(pos) === state.activeMove!.layer) {
                state.targetMeshes.push(mesh)
                if (pivotRef.current) pivotRef.current.add(mesh)
              }
            })
         }
      } else {
         // switch mode (shuffle <-> solve)
         if (state.idleTime > 4) {
            state.isReversing = !state.isReversing
            state.step = 0
            state.idleTime = 0
         }
      }
    }

    // Process move
    if (state.activeMove && pivotRef.current && groupRef.current) {
       const speed = 4 // rad sec
       const totalAngle = state.activeMove.angle
       const moveDelta = (speed * delta) / Math.abs(totalAngle)
       state.progress += moveDelta
       
       if (state.progress >= 1) {
         pivotRef.current.rotation[state.activeMove.axis] = state.activeMove.angle
         pivotRef.current.updateMatrixWorld()
         
         state.targetMeshes.forEach(mesh => {
            groupRef.current!.attach(mesh)
            mesh.position.x = Math.round(mesh.position.x)
            mesh.position.y = Math.round(mesh.position.y)
            mesh.position.z = Math.round(mesh.position.z)
         })
         
         pivotRef.current.rotation.set(0,0,0)
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
          arr.push(<Cubelet key={`${x}-${y}-${z}`} position={[x, y, z]} index={i++} meshRefs={meshRefs} />)
        }
      }
    }
    return arr
  }, [])

  return (
    <group ref={groupRef}>
      <group ref={pivotRef} />
      {cubelets}
    </group>
  )
}

function DynamicLight() {
  const lightRef = useRef<THREE.PointLight>(null)
  
  useFrame(({ mouse }) => {
    if (lightRef.current) {
      // Light follows mouse bounds from -20 to +20 in physical space
      lightRef.current.position.x = mouse.x * 20
      lightRef.current.position.y = mouse.y * 20
    }
  })

  return <pointLight ref={lightRef} position={[0, 0, 8]} intensity={3} color="#f97316" distance={50} decay={1.5} />
}

export default function RubiksCube() {
  return (
    <Canvas camera={{ position: [5, 5, 5], fov: 45 }}>
      <ambientLight intensity={0.9} />
      <directionalLight position={[10, 10, 5]} intensity={2.5} />
      <directionalLight position={[-10, -10, -5]} intensity={0.8} />
      <DynamicLight />
      <OrbitControls enableZoom={false} enablePan={false} />
      <RubiksGroup />
    </Canvas>
  )
}
