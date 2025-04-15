"use client"

import { motion } from 'framer-motion'

export default function Footer() {
  const technologies = [
    {
      name: "Cursor",
      url: "https://cursor.sh",
      description: "AI-first code editor"
    },
    {
      name: "Next.js",
      url: "https://nextjs.org",
      description: "React framework"
    },
    {
      name: "Three.js",
      url: "https://threejs.org",
      description: "3D graphics library"
    },
    {
      name: "OpenAI",
      url: "https://openai.com",
      description: "AI models"
    },
    {
      name: "Claude",
      url: "https://claude.ai",
      description: "AI assistant"
    }
  ]

  return (
    <footer className="w-full py-8 mt-16">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-white/60 mb-4">Built with</p>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <motion.a
                key={tech.name}
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col items-center px-4 py-2 rounded-lg hover:bg-white/5 transition-colors"
              >
                <span className="text-white font-medium">{tech.name}</span>
                <span className="text-white/50 text-sm">{tech.description}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
} 