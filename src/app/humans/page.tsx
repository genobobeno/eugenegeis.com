"use client"

import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { Suspense, useMemo } from 'react'

function Particles() {
  const count = 5000
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return positions
  }, [])

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#ffffff"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <Suspense fallback={null}>
        <Particles />
        <ambientLight intensity={0.5} />
      </Suspense>
    </Canvas>
  )
}

const quotes = [
  "Stories are truer than the Truth. - Proverb",
  "The Universe is a machine for the making of gods. - Henri Bergson"
]

export default function Humans() {
  return (
    <main className="min-h-screen p-8">
      <div className="fixed inset-0 -z-10">
        <Scene />
      </div>

      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="prose prose-invert max-w-none"
        >
          <h1 className="text-4xl font-bold mb-8">Humans</h1>

          <div className="mb-12">
            {quotes.map((quote, index) => (
              <motion.div
                key={quote}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-2xl italic text-center mb-8"
              >
                &ldquo;{quote}&rdquo;
              </motion.div>
            ))}
          </div>
          
          <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm mb-12">
            <p className="text-lg leading-relaxed">
              Drawing on a diverse background in leadership, meditative training, and multiple career 
              transitions, I help individuals and teams unlock their highest potential through personalized 
              guidance and transformative experiences. My services span trust & leadership development, 
              team synergy, personal reinvention, mentorship for career transitions, and meditative energy 
              work—all designed to foster clarity, resilience, and authentic connection. Through PhD2Pro.com, 
              I guide academics navigating industry shifts, while my tailored workshops empower professionals 
              to cultivate self-awareness, enhance collaboration, and lead with purpose in an accelerationist 
              world. With a unique blend of analytical rigor and experiential depth, I equip clients to 
              thrive both professionally and personally.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white/10 rounded-lg p-8 backdrop-blur-sm mb-12"
          >
            <h2 className="text-2xl font-semibold mb-4">Data, Dogma, and Dialogos</h2>
            <p className="text-lg leading-relaxed">
              I build a structure of narrative investigation through a framework &apos;Data, Dogma, and Dialogos&apos;. 
              Data comes from what we witness and Dogma is the value judgment we place on the Data. Dialogos 
              is the creative process of building new relationships and outcomes when we are open to reflecting 
              thru each others&apos; Data-Dogma narratives.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center text-2xl mb-12"
          >
            With the advent of AI, it has never been more important to center our understanding on what makes 
            our human Selves fundamentally different from the accelerationist technology that is going to make 
            us question everything.
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              "Rebuilding Trust, Unlocking Potential",
              "Transforming Teams, Restoring Relationships",
              "Trust: The Competitive Advantage",
              "Repair, Reimagine, Realign",
              "From Division to Connection",
              "Trust: The Foundation of Growth",
              "Bridge the Gap, Build the Future",
              "Reimagine Your Organization&apos;s Potential"
            ].map((title, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 rounded-lg p-6 backdrop-blur-sm hover:bg-white/10 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-4">{title}</h3>
                <p className="text-white/80">
                  Trust is the cornerstone of any successful business, yet it&apos;s often the most fragile. 
                  Whether you&apos;re grappling with disconnection within your team or facing skepticism from 
                  customers, we help you rebuild bridges and reignite collaboration.
                </p>
              </motion.div>
            ))}
          </div>

          <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-6">Contact Me</h2>
            <div className="h-96 bg-white/5 rounded flex items-center justify-center">
              <p className="text-white/50">Contact Form Coming Soon</p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
} 