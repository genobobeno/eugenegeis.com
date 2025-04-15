"use client"

import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { Suspense } from 'react'

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
          <h1 className="text-4xl font-bold mb-8">Data Machines</h1>
          
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              "Forge Your Future with Efficiency",
              "Cut the Costs, Keep the Value",
              "Smarter Processes, Bigger Profits",
              "Discover Your Hidden Potential",
              "Break the Chains of Inefficiency",
              "From Overhead to Opportunity"
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
                  Are outdated processes holding your business back? We can help you combine 
                  cutting-edge AI and machine learning insights with a hands-on approach to 
                  uncover hidden inefficiencies and reduce overhead.
                </p>
              </motion.div>
            ))}
          </div>

          <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-6">Contact Me</h2>
            <div className="h-96 bg-white/5 rounded flex items-center justify-center">
            <iframe aria-label='Product Enquiry' src='https://forms.zohopublic.com/helloeugen1/form/ProductEnquiry/formperma/qXhfA-RhMCHfLAn7FpHUICMoUKo0vUmpqHj5eOJO8i0'></iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
} 