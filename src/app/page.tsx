"use client"

import ParticleBackground from '@/components/ParticleBackground'
import DataMachinesPlacard from '@/components/DataMachinesPlacard'
import HumansPlacard from '@/components/HumansPlacard'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <ParticleBackground />
      
      <div className="container mx-auto max-w-5xl mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-32 h-[80vh] mb-16">
          <div className="w-7/8 mx-auto">
            <DataMachinesPlacard />
          </div>

          <div className="w-7/8 mx-auto">
            <HumansPlacard />
          </div>
        </div>
      </div>

      <div className="w-full bg-[#1516b9]/20 backdrop-blur-sm py-8 mb-16">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="prose prose-invert max-w-3xl mx-auto text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">About Me</h3>
            <p className="text-lg">
              I am Eugene Geis, a professional who bridges the gap between technical innovation and human potential. 
              With expertise in both machine learning and human development, I help organizations and individuals 
              navigate the complex intersection of technology and humanity.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto max-w-5xl">
        <motion.div
          id="contact"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Stay Connected</h3>
          <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
            {/* Zoho Forms iframe will go here */}
            <div className="h-96 bg-white/5 rounded flex items-center justify-center">
              <p className="text-white/50">Zoho Forms Integration Coming Soon</p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
