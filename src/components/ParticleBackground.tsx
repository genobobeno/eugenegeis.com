"use client"

import { useEffect, Suspense } from 'react'
import dynamic from 'next/dynamic'
import { Canvas } from '@react-three/fiber'

// Dynamic import of the Scene component with SSR disabled
const Scene = dynamic(() => import('./Scene').then(mod => mod.default), {
  ssr: false,
  loading: () => null
})

function WebGLCheck() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const canvas = document.createElement('canvas')
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
      if (!gl) {
        const warning = document.createElement('div')
        warning.style.cssText = 'margin: auto; padding: 1rem; background: red; color: white;'
        warning.innerHTML = 'Your browser does not support WebGL. Please try a different browser.'
        document.body.appendChild(warning)
      }
    }
  }, [])

  return null
}

export default function ParticleBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-black">
      <WebGLCheck />
      <Suspense fallback={null}>
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
      </Suspense>
    </div>
  )
} 