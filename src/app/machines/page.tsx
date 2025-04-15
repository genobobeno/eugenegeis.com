"use client"

import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { Suspense } from 'react'
import SignupForm from '@/components/SignupForm'
import Image from 'next/image'

function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <Suspense fallback={null}>
        <OrbitControls enableZoom={false} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
      </Suspense>
    </Canvas>
  )
}

export default function Machines() {
  const placards = [
    {
      title: "Forge Your Future with Efficiency",
      description: "Transform your business operations with AI-driven automation. Our solutions streamline workflows, reduce manual tasks, and create scalable systems that grow with your business."
    },
    {
      title: "Cut the Costs, Keep the Value",
      description: "Identify and eliminate unnecessary expenses while maintaining quality. Our data-driven approach helps you optimize resources and maximize ROI across all departments."
    },
    {
      title: "Discover Your Hidden Potential",
      description: "Unlock insights hidden in your data. Our advanced analytics reveal opportunities for growth, innovation, and competitive advantage you never knew existed."
    },
    {
      title: "Break the Chains of Inefficiency",
      description: "Eliminate bottlenecks and outdated practices. We help you implement modern, efficient systems that free your team to focus on what matters most."
    },
    {
      title: "Data-Driven Decision Making",
      description: "Make confident business decisions backed by real-time data and predictive analytics. Our dashboards and reports provide clear insights when you need them most."
    },
    {
      title: "Future-Proof Your Business",
      description: "Stay ahead of the competition with cutting-edge AI solutions. We help you build resilient systems that adapt to changing market conditions and customer needs."
    }
  ]

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
                src="/images/DataEngines.png"
                alt="Data Engines Logo"
                fill
                className="object-contain"
              />
            </div>
            <h1 className="text-4xl font-bold">Data Machines</h1>
          </div>
          
          <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm mb-12">
            <p className="text-lg leading-relaxed">
              With advanced training in experimental physics, statistical modeling, and data science, 
              I bring deep expertise to businesses seeking transformative solutions in AI and analytics. 
              From AI/ML transformation and algorithmic product management to data strategy, performance 
              analytics, and report automation, I specialize in designing and deploying scalable, 
              data-driven systems that optimize efficiency, enhance decision-making, and unlock new 
              revenue streams. Whether guiding executive teams on AI integration, or building automated 
              dashboards, my approach is rooted in strategic insight and technical precision—empowering 
              organizations to harness the full potential of their data.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {placards.map((placard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 rounded-lg p-8 backdrop-blur-sm border border-white/10 shadow-lg min-h-[200px] flex flex-col"
              >
                <h3 className="text-2xl font-semibold mb-4">{placard.title}</h3>
                <p className="text-white/80 flex-grow">{placard.description}</p>
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