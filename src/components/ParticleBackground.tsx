"use client"

import { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'

function Scene() {
  const pointsRef = useRef<THREE.Points>(null)
  const velocities = useRef<Float32Array>(new Float32Array(200 * 3))
  const trails = useRef<Float32Array[]>([])
  const trailLength = 60
  const time = useRef(0)
  const mainParticles = new Float32Array(200 * 3)
  const trailParticles = new Float32Array(200 * 3)
  const colors = new Float32Array(200 * 3)
  const opacities = new Float32Array(200)
  const sizes = new Float32Array(200)
  const trailOpacities = new Float32Array(200)
  const trailSizes = new Float32Array(200)
  const trailVelocities = new Float32Array(200 * 2)
  const trailColors = new Float32Array(200 * 3)
  const trailPositions = new Float32Array(200 * 3)
  const trailLifetimes = new Float32Array(200)
  const trailMaxLifetime = 0.5
  const trailUpdateInterval = 0.05
  const trailUpdateTimer = useRef(0)
  const mainParticleOpacity = 0.421875
  const trailParticleOpacity = 0.2109375

  useEffect(() => {
    if (!pointsRef.current) return

    // Create geometry with multiple particles
    const geometry = new THREE.BufferGeometry()
    const particleCount = 200
    const positions = new Float32Array(particleCount * 3)
    
    // Initialize particle positions at center
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3
      const angle = (i / particleCount) * Math.PI * 2
      positions[i3] = 0
      positions[i3 + 1] = 0
      positions[i3 + 2] = 0

      // Initialize velocities outward with reduced speed for smoother motion
      velocities.current[i3] = Math.cos(angle) * 0.015
      velocities.current[i3 + 1] = Math.sin(angle) * 0.015
      velocities.current[i3 + 2] = 0

      // Initialize trail for each particle
      trails.current[i] = new Float32Array(trailLength * 3)
      for (let j = 0; j < trailLength; j++) {
        const j3 = j * 3
        trails.current[i][j3] = 0
        trails.current[i][j3 + 1] = 0
        trails.current[i][j3 + 2] = 0
      }
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    // Create material for main particles with slightly larger size
    const mainMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.03,
      sizeAttenuation: true,
      transparent: true,
      opacity: mainParticleOpacity
    })

    // Create material for trails with adjusted size
    const trailMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.02,
      sizeAttenuation: true,
      transparent: true,
      opacity: trailParticleOpacity
    })

    // Create main points
    const mainPoints = new THREE.Points(geometry, mainMaterial)
    pointsRef.current.add(mainPoints)

    // Create trail points
    const trailGeometry = new THREE.BufferGeometry()
    const trailPositions = new Float32Array(particleCount * trailLength * 3)
    trailGeometry.setAttribute('position', new THREE.BufferAttribute(trailPositions, 3))
    const trailPoints = new THREE.Points(trailGeometry, trailMaterial)
    pointsRef.current.add(trailPoints)

    return () => {
      if (pointsRef.current) {
        pointsRef.current.remove(mainPoints)
        pointsRef.current.remove(trailPoints)
        geometry.dispose()
        trailGeometry.dispose()
        mainMaterial.dispose()
        trailMaterial.dispose()
      }
    }
  }, [])

  useFrame(() => {
    if (!pointsRef.current || !pointsRef.current.children[0]) return

    time.current += 0.008

    const mainPoints = pointsRef.current.children[0] as THREE.Points
    const trailPoints = pointsRef.current.children[1] as THREE.Points
    const positions = mainPoints.geometry.attributes.position.array as Float32Array
    const trailPositions = trailPoints.geometry.attributes.position.array as Float32Array

    // Update colors with smoother transitions
    const mainMaterial = mainPoints.material as THREE.PointsMaterial
    const trailMaterial = trailPoints.material as THREE.PointsMaterial

    // Color oscillation between teal (#09e0c6), purple (#cf0cd2), and blue (#1516b9)
    const hue = (Math.sin(time.current) * 0.5 + 0.5) * 0.6 + 0.4
    const color = new THREE.Color().setHSL(hue, 0.8, 0.6)
    mainMaterial.color = color
    trailMaterial.color = color

    for (let i = 0; i < 200; i++) {
      const i3 = i * 3
      
      // Update trail with smoother interpolation
      for (let j = trailLength - 1; j > 0; j--) {
        const j3 = j * 3
        const prevJ3 = (j - 1) * 3
        trails.current[i][j3] = trails.current[i][prevJ3] * 0.95 + trails.current[i][j3] * 0.05
        trails.current[i][j3 + 1] = trails.current[i][prevJ3 + 1] * 0.95 + trails.current[i][j3 + 1] * 0.05
        trails.current[i][j3 + 2] = trails.current[i][prevJ3 + 2] * 0.95 + trails.current[i][j3 + 2] * 0.05
      }
      trails.current[i][0] = positions[i3]
      trails.current[i][1] = positions[i3 + 1]
      trails.current[i][2] = positions[i3 + 2]

      // Update trail positions
      for (let j = 0; j < trailLength; j++) {
        const j3 = (i * trailLength + j) * 3
        trailPositions[j3] = trails.current[i][j * 3]
        trailPositions[j3 + 1] = trails.current[i][j * 3 + 1]
        trailPositions[j3 + 2] = trails.current[i][j * 3 + 2]
      }

      // Update position with velocity
      positions[i3] += velocities.current[i3]
      positions[i3 + 1] += velocities.current[i3 + 1]

      // Boundary reflection
      const boundary = 2
      if (Math.abs(positions[i3]) > boundary) {
        velocities.current[i3] *= -1
        positions[i3] = Math.sign(positions[i3]) * boundary
      }
      if (Math.abs(positions[i3 + 1]) > boundary) {
        velocities.current[i3 + 1] *= -1
        positions[i3 + 1] = Math.sign(positions[i3 + 1]) * boundary
      }
    }

    mainPoints.geometry.attributes.position.needsUpdate = true
    trailPoints.geometry.attributes.position.needsUpdate = true
  })

  return (
    <>
      <primitive object={new THREE.Group()} ref={pointsRef} />
    </>
  )
}

export default function ParticleBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-black">
      <Canvas
        camera={{
          position: [0, 0, 3],
          fov: 50,
          near: 0.1,
          far: 1000
        }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Scene />
      </Canvas>
    </div>
  )
} 