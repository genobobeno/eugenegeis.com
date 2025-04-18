"use client"

import { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

export default function Scene() {
  const groupRef = useRef<THREE.Group>(null)
  const particleCount = 400  // Doubled from 200
  const velocities = useRef<Float32Array>(new Float32Array(particleCount * 3))
  const time = useRef(0)
  const mainParticleOpacity = 0.421875
  const trailLength = 60  // Doubled from 30
  const trailParticles = useRef<THREE.Points[]>([])
  const trailPositions = useRef<Float32Array[]>([])
  const trailOpacities = useRef<Float32Array[]>([])

  // Initialize particles
  useEffect(() => {
    const group = groupRef.current
    if (!group) return

    // Create geometry with multiple particles
    const geometry = new THREE.BufferGeometry()
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
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    // Create material for main particles with slightly larger size
    const mainMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.01,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.2
    })

    // Create main points
    const mainPoints = new THREE.Points(geometry, mainMaterial)
    group.add(mainPoints)

    // Initialize trail particles
    for (let i = 0; i < trailLength; i++) {
      const trailGeometry = new THREE.BufferGeometry()
      const trailPos = new Float32Array(particleCount * 3)
      const trailOpacity = new Float32Array(particleCount)
      
      trailGeometry.setAttribute('position', new THREE.BufferAttribute(trailPos, 3))
      trailGeometry.setAttribute('opacity', new THREE.BufferAttribute(trailOpacity, 1))
      
      const trailMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.007,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.2 * (1 - (i / trailLength) * 0.7)
      })

      const trailPoints = new THREE.Points(trailGeometry, trailMaterial)
      group.add(trailPoints)
      
      trailParticles.current.push(trailPoints)
      trailPositions.current.push(trailPos)
      trailOpacities.current.push(trailOpacity)
    }

    return () => {
      if (group) {
        group.remove(mainPoints)
        trailParticles.current.forEach(trail => group.remove(trail))
        geometry.dispose()
        mainMaterial.dispose()
        trailParticles.current.forEach(trail => {
          trail.geometry.dispose()
          if (trail.material instanceof THREE.Material) {
            trail.material.dispose()
          }
        })
      }
    }
  }, [])

  useFrame(() => {
    const group = groupRef.current
    if (!group || !group.children[0]) return

    time.current += 0.008

    const mainPoints = group.children[0] as THREE.Points
    const positions = mainPoints.geometry.attributes.position.array as Float32Array

    // Update colors with smoother transitions
    const mainMaterial = mainPoints.material as THREE.PointsMaterial

    // Color oscillation between teal (#09e0c6), purple (#cf0cd2), and blue (#1516b9)
    const hue = (Math.sin(time.current) * 0.5 + 0.5) * 0.6 + 0.4
    const color = new THREE.Color().setHSL(hue, 0.8, 0.6)
    mainMaterial.color = color

    // Update trail positions
    for (let i = trailLength - 1; i > 0; i--) {
      const currentPositions = trailPositions.current[i]
      const prevPositions = trailPositions.current[i - 1]
      const currentOpacities = trailOpacities.current[i]
      const prevOpacities = trailOpacities.current[i - 1]

      for (let j = 0; j < particleCount * 3; j++) {
        currentPositions[j] = prevPositions[j]
        if (j % 3 === 0) {
          currentOpacities[j / 3] = prevOpacities[j / 3]
        }
      }

      trailParticles.current[i].geometry.attributes.position.needsUpdate = true
      trailParticles.current[i].geometry.attributes.opacity.needsUpdate = true
    }

    // Update main particles and first trail position
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3
      
      // Update position with velocity
      positions[i3] += velocities.current[i3]
      positions[i3 + 1] += velocities.current[i3 + 1]

      // Update first trail position
      trailPositions.current[0][i3] = positions[i3]
      trailPositions.current[0][i3 + 1] = positions[i3 + 1]
      trailPositions.current[0][i3 + 2] = positions[i3 + 2]
      trailOpacities.current[0][i] = mainParticleOpacity

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
    trailParticles.current[0].geometry.attributes.position.needsUpdate = true
    trailParticles.current[0].geometry.attributes.opacity.needsUpdate = true
  })

  return (
    <group ref={groupRef} />
  )
} 