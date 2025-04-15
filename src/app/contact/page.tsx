"use client"

import { motion } from 'framer-motion'
import SignupForm from '@/components/SignupForm'

export default function Contact() {
  return (
    <main className="min-h-screen p-8">
      <div className="container mx-auto max-w-4xl mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="prose prose-invert max-w-none"
        >
          <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
          
          <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm">
            <SignupForm />
          </div>
        </motion.div>
      </div>
    </main>
  )
} 