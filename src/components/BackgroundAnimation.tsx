"use client"

import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Lines() {
  const lineRef = useRef<THREE.Line>(null)
  const t = useRef(0)
  const segments = 5000
  const r = 20

  const lines = useMemo(() => {
    const positions = []
    const colors = []
    const morphTargets = []

    for (let i = 0; i < segments; i++) {
      const x = Math.random() * r - r / 2
      const y = Math.random() * r - r / 2
      const z = Math.random() * r - r / 2

      positions.push(x, y, z)
      colors.push((x / r) + 0.5, (y / r) + 0.5, (z / r) + 0.5)
      morphTargets.push(
        Math.random() * r - r / 2,
        Math.random() * r - r / 2,
        Math.random() * r - r / 2
      )
    }

    return { positions, colors, morphTargets }
  }, [])

  useFrame((state, delta) => {
    if (lineRef.current) {
      t.current += delta * 0.5
      lineRef.current.rotation.x += delta * 0.25
      lineRef.current.rotation.y += delta * 0.5
      
      // Morph target animation
      const morphTargetInfluence = Math.abs(Math.sin(t.current))
      if (lineRef.current.morphTargetInfluences) {
        lineRef.current.morphTargetInfluences[0] = morphTargetInfluence
      }
    }
  })

  const geometry = useMemo(() => {
    const geom = new THREE.BufferGeometry()
    geom.setAttribute('position', new THREE.Float32BufferAttribute(lines.positions, 3))
    geom.setAttribute('color', new THREE.Float32BufferAttribute(lines.colors, 3))
    geom.morphAttributes.position = [new THREE.Float32BufferAttribute(lines.morphTargets, 3)]
    return geom
  }, [lines])

  return (
    <primitive
      ref={lineRef}
      object={new THREE.Line(
        geometry,
        new THREE.LineBasicMaterial({ vertexColors: true })
      )}
    />
  )
}

export default function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 50], fov: 50 }}>
        <Lines />
      </Canvas>
    </div>
  )
} 