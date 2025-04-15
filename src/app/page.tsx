"use client"

import ParticleBackground from '@/components/ParticleBackground'
import DataMachinesPlacard from '@/components/DataMachinesPlacard'
import HumansPlacard from '@/components/HumansPlacard'
import Footer from '@/components/Footer'
import SignupForm from '@/components/SignupForm'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <ParticleBackground />
      
      <div className="container mx-auto max-w-5xl mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 h-[80vh] md:h-[80vh] mb-16">
          <div className="w-4/5 mx-auto h-[80vh] md:h-full">
            <DataMachinesPlacard />
          </div>

          <div className="w-4/5 mx-auto h-[80vh] md:h-full">
            <HumansPlacard />
          </div>
        </div>
      </div>

      <div className="w-full bg-[#1516b9]/20 backdrop-blur-sm py-8 mb-16 mt-[80vh] md:mt-0">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="prose prose-invert max-w-3xl mx-auto text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">About Me</h3>
            <p className="text-lg">
              At 46, I have changed careers multiple times, moving across multiple domains and productionalizing quant methods for growing businesses.  Simultaneously, I have always focused on the gap between technical innovation and human values; with a broad background in teaching, mentorship, debate, and meditative training, I help organizations and individuals struggling to adjust to the hyperacceleration of technical and cultural change. 
              With expertise in both AI and human conceptual development, I help organizations and individuals 
              navigate the increasingly complex intersection of technology and community.
            </p>
            <br />
            <p className="text-lg">
              I can help with the tech, and I can help with the people who build, sell, or use it. My goal is to help builders and users to achieve the most collective <i><b>human</b></i> good through the entire process.
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
          className="max-w-2xl mx-auto text-center"
        >
          <div className="bg-white/10 rounded-lg p-2 backdrop-blur-sm">
            <SignupForm />
          </div>
        </motion.div>
      </div>

      <Footer />
    </main>
  )
}
