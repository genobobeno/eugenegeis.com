"use client"

import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { Suspense, useMemo } from 'react'
import SignupForm from '@/components/SignupForm'
import Image from 'next/image'

function Particles() {
  const count = 5000
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10
      
      // Assign colors based on position
      const color = Math.random() < 0.5 ? 
        [0.035, 0.878, 0.776] : // Teal (#09e0c6)
        [0.812, 0.051, 0.82]    // Purple (#cf0cd2)
      
      colors[i * 3] = color[0]
      colors[i * 3 + 1] = color[1]
      colors[i * 3 + 2] = color[2]
    }
    return { positions, colors }
  }, [])

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions.positions}
          itemSize={3}
          args={[positions.positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={positions.colors}
          itemSize={3}
          args={[positions.colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        vertexColors
        transparent
        opacity={0.3}
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
  "Stories are truer than the Truth - Proverb",
  "The Universe is a machine for the making of gods. - Henri Bergson"
]

export default function Humans() {
  return (
    <main className="min-h-screen p-8">
      <div className="fixed inset-0 -z-10">
        <Scene />
      </div>

      <div className="container mx-auto max-w-4xl mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="prose prose-invert max-w-none"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="relative w-12 h-12">
              <Image
                src="/images/HumansLogo.png"
                alt="Humans Logo"
                fill
                className="object-contain"
              />
            </div>
            <h1 className="text-4xl font-bold">Humans-In-The-Loop</h1>
          </div>

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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Rebuilding Trust, Unlocking Potential",
                description: "Transform your organization's culture by rebuilding trust at every level. Our approach combines proven leadership techniques with innovative team-building strategies to create an environment where potential can flourish."
              },
              {
                title: "Transforming Teams, Restoring Relationships",
                description: "Break down barriers and rebuild connections within your team. We help organizations move from conflict to collaboration, creating stronger relationships that drive better results."
              },
              {
                title: "Trust: The Competitive Advantage",
                description: "In today's fast-paced business environment, trust is your most valuable asset. Learn how to leverage trust as a strategic advantage that sets your organization apart."
              },
              {
                title: "Repair, Reimagine, Realign",
                description: "Heal past wounds and create a new vision for your team's future. Our process helps organizations move beyond past challenges and align around shared goals."
              },
              {
                title: "From Division to Connection",
                description: "Turn workplace divisions into opportunities for growth. We help teams bridge gaps, find common ground, and build stronger connections that drive success."
              },
              {
                title: "Trust: The Foundation of Growth",
                description: "Build a solid foundation for sustainable growth through trust-based leadership. Our methods help organizations create environments where innovation and progress thrive."
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 rounded-lg p-8 backdrop-blur-sm border border-white/10 shadow-lg min-h-[200px] flex flex-col"
              >
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-white/80 flex-grow">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-6">Contact Me</h2>
            <SignupForm />
          </div>
        </motion.div>
      </div>
    </main>
  )
} 